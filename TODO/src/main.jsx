// import { StrictMode } from 'react'

// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import store from './redux/store.js'
// import { Provider } from 'react-redux'

// createRoot(document.getElementById('root')).render(
//  <Provider store={store}>
//     <App />
//   </Provider>
// )

// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

