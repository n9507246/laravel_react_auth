import { createBrowserRouter} from "react-router-dom"

import profileRoutes from "@routes/profile/profileRoutes"
import authRoutes from "@routes/auth/authRoutes"
import notFoundRoute from '@routes/notFound/nodFoundRoute.jsx'

export default createBrowserRouter([
    ...authRoutes,
    ...profileRoutes,
    ...notFoundRoute
])