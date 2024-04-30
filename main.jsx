import * as ReactDOM from 'react-dom/client'
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { App } from './src/App/App'
import { ErrorPage } from './src/404/ErrorPage'
import { Login } from './src/Login/Login'
import { Register } from './src/Register/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  }, {
    path: '/ec',
    children: [
      {
        path: 'Login',
        element: <Login />
      }, {
        path: 'register',
        element: <Register />
      }
    ]

  }, {
    path: '/tienda',
    element: <h1>Tienda</h1>
  }, {
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
