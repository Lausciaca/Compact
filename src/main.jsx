import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import ErrorPage from './components/error-page.jsx'
import ComponentsPage from './routes/componentes.jsx'
import InicioPage from './routes/inicio.jsx'
import Contact from './routes/contact'


const router = createBrowserRouter([
  {
    path: '/',
    element: <InicioPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/componentes',
    element: <ComponentsPage />,
    errorElement: <ErrorPage />,
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
