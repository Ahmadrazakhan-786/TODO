// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {

//   return (
//     <>
//       <h1 className='bg-amber-400'>hii ahmad</h1>
//     </>
//   )
// }

// export default App


// src/App.jsx
import React from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center pt-20">
      <h1 className="text-3xl font-bold mb-6 text-red-300 mt-5 mr-10">📝TODO LIST</h1>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default App
