import * as ReactDOM from 'react-dom/client'
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { ErrorPage } from './src/404/Error'
import { App } from './src/App/App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/elemento',
        element: <h3>Elementos </h3>
      }
    ]
  },
  {
    path: '/page',
    element: <h3>Aqui va una page </h3>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
