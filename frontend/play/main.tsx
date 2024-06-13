import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root')
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      // <React.StrictMode>
      //   <BrowserRouter>
      //     <App />
      //   </BrowserRouter>
      // </React.StrictMode>,
    )
  }
})
