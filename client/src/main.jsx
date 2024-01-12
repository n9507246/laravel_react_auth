import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {AuthContextProvider} from '@contexts/authContext'
import { RouterProvider } from "react-router-dom"
import router from "@routes"

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthContextProvider>,
)
