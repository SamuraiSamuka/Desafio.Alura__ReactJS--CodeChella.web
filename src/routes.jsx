import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PaginaAExperiencia from './routes/PaginaAExperiencia'
import { PaginaInicial } from './routes/PaginaInicial'
import Root from './routes/Root'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <PaginaInicial />
      },
      {
        path: "/Experiencia",
        element: <PaginaAExperiencia />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
