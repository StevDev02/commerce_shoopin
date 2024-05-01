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
import { Shop } from './src/Shop/Shop'

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
    path: '/ec/shop/',
    element: <Shop />,
    children: [
      {
        path: 'tacones',
        element: <h1>Tacones</h1>
      }, {
        path: 'blusas',
        element: <h1>Blusas</h1>
      }, {
        path: 'pantalones',
        element: <h1>Pantalones</h1>
      }, {
        path: 'faldas',
        element: <h1>Faldas</h1>
      }, {
        path: 'lenceria',
        element: <h1>Lenceria</h1>
      }
    ]
  }, {
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
