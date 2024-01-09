 
import DefaultLayout from "@views/layouts/DefaultLayout"
import Dashboard from '@views/Dashboard.jsx'

export default [ 
  {
    element: <DefaultLayout/>,
    children:[
      {
          path: '/dashboard',
          element: <Dashboard/>
      },
    ]
  }
]