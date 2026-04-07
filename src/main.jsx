import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

console.log('Main.jsx is loading!')
console.log('Root element:', document.getElementById('root'))

try {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
  console.log('React rendered successfully!')
} catch(error) {
  console.error('React render error:', error)
  document.body.innerHTML = '<h1>Error: ' + error.message + '</h1>'
}
