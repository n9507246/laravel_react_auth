import GuestRoutes from '@guards/GuestRoutes'
import GuestLayout from "@layouts/guest/GuestLayout"
import Login from '@pages/login/Login.jsx'
import Registration from '@pages/registration/Registration.jsx'

export default [ 
    {
        element: <GuestRoutes/>,
        children:[
            {
                element: <GuestLayout/>,
                children: [
                    {
                        path: '/login',
                        element: <Login/>
                    },
                    {
                        path: '/registration',
                        element: <Registration/>
                    },
                ]
            }
        ]
    },
  ]