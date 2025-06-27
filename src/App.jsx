import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TodoApp from './pages/TodoApp'
import PostsViewer from './components/PostsViewer'
import Menu from './pages/Menu'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/api-integration" element={<PostsViewer />} />
      <Route path="/task-manager" element={<TodoApp />} />
    </Routes>
    
  )
}

export default App;