import React from 'react'
import ReactDOM from 'react-dom/client'
import Sidebar from './sidebar.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './Sites/Dashboard.jsx'
import Recipe from './Sites/Recipe.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Dashboard />,
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Sidebar />
    <Recipe />
  </React.StrictMode>,
)
