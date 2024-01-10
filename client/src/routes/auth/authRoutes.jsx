import GuestRoutes from '@guards/GuestRoutes'
import GuestLayout from "@views/layouts/GuestLayout"
import Login from '@views/Login.jsx'
import Registration from '@views/Registration.jsx'

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