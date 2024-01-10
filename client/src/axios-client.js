import axios from 'axios'

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})

axiosClient.interceptors.request.use((config)=> {
    const token = localStorage.getItem('ACCESS_TOKEN') //получаем токен из хранилища
    if(token) //если токен существует
        config.headers.Authorization = `Bearer ${token}` //устанавливаем заголовок с токеном  
    return config
})

// axiosClient.interceptors.response.use((response)=> {
//     return response
// }, (error) => {
//     return error
// })

export default axiosClient