import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './Router.jsx'

import './index.css'

import Store from './Store/store.jsx'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ Store }> 
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
