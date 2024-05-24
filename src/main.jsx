import React from 'react'
import ReactDOM from 'react-dom/client'
import Sidebar from './sidebar.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx'
import Dashboard from './Sites/Dashboard.jsx'
import Recipe from './Sites/Recipe.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Dashboard />,
    errorElement: <ErrorPage />
  },
  {
    path: "Recipes",
    element: <Recipe />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Sidebar />
    <RouterProvider router={router} />
    <Recipe />
  </React.StrictMode>,
)
