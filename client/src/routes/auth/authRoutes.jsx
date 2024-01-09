import GuestLayout from "@views/layouts/GuestLayout"
import Login from '@views/Login.jsx'
import Registration from '@views/Registration.jsx'

export default [ 
    {
        // path: '/',
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
    },
  ]