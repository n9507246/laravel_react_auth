import { Navigate } from 'react-router-dom'

import RequiredAuthRoutes from '@guards/RequiredAuthRoutes' 
import DefaultLayout from "@layouts/default/DefaultLayout"
import Dashboard from '@views/Dashboard.jsx'

export default [ 
  {
    element: <RequiredAuthRoutes/>,
    children: [
          {
              element: <DefaultLayout/>,
              children:[
                  {
                      path: '/',
                      element: <Navigate to='/dashboard'/>
                  },
                  {
                      path: '/dashboard',
                      element: <Dashboard/>
                  },
              ]
          }
      ]
  }
]