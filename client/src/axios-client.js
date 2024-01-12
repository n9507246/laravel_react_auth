import axios from 'axios'

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})

axiosClient.interceptors.request.use(
    
    (config)=> {
        
        const token = localStorage.getItem('ACCESS_TOKEN') //получаем токен из хранилища
        if(token) config.headers.Authorization = `Bearer ${token}`

        return config
    },

    (error) => {
        if(import.meta.env.VITE_DEBUG == "TRUE") console.log('axios interceptors log(request):', error); 
        return Promise.reject(err);
    }

)

axiosClient.interceptors.response.use(
    
    (response)=> {
        return response
    },

    (error) => {

        if(error.response.data.message === "Token has expired"){
            console.error("Token has expired") 
            //получаем новый токен 
                return axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/refresh`, {}, {
                    //для того что бы получить новый токен надо отправить запрос на auth/refresh со старым токеном
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
                    }
                })
                .then(response => {
                    //устанавливаем новый токен в localStorage  
                        localStorage.setItem('ACCESS_TOKEN', response.data.access_token)
                    //error.config используется для изменения конфигурации запроса, чтобы попытаться исправить ошибку. 
                    //устанавливаем обновленный токен в заголовок авторизации
                        error.config.headers.Authorization = `Bearer ${localStorage.getItem('ACCESS_TOKEN', response.data.access_token)}`
                    //выполняем запрос снова для попытки исправить ошибку
                        console.log("Token has been updated") 
                        return axiosClient.request(error.config)
                })
        }
        
        if(import.meta.env.VITE_DEBUG == "TRUE") console.error('axios interceptors log(response):', error)
        return Promise.reject(error);
    }
    
)

export default axiosClient