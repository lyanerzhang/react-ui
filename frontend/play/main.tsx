import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root')
  // const root = document.getElementById('root')

  rootElement?.addEventListener('click', e => {
    e.stopPropagation()
    console.log('click root')
    // true 表示捕获阶段，false 表示冒泡阶段 默认是冒泡阶段false
  })
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
