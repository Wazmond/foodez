import React from 'react'
import ReactDOM from 'react-dom/client'
import Sidebar from './sidebar.jsx'
import Recipe from './recipe.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Sidebar />
    <Recipe />
  </React.StrictMode>,
)
