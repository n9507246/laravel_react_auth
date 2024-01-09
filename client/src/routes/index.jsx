import { createBrowserRouter} from "react-router-dom"

import Login from '@views/Login.jsx'
import Home from '@views/Home.jsx'

export default createBrowserRouter([
    {
        path: '/',
        element:<Home />
    },
    {
        path: '/login',
        element: <Login/>
    }
])