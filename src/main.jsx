import React from 'react'
import ReactDOM from 'react-dom/client'
import Sidebar from './sidebar.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx'
import Dashboard from './Sites/Dashboard.jsx'
import Recipe from './Sites/Recipe.jsx'

import Store from './Store/store.jsx'
import { Provider } from 'react-redux'

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
    <Provider store={ Store }> 
      <Sidebar />
      <RouterProvider router={router} />
      <Recipe />
    </Provider>
  </React.StrictMode>,
)
