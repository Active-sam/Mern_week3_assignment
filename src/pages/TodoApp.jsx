import React from 'react'
import TaskManager from '../components/TaskManager';
import Footer from '../components/Footer';
import Header from '../components/Header';

const TodoApp = () => {
  return (
    <div>
      <Header/>
      <TaskManager/>
      <Footer/>
    </div>
  )
}

export default TodoApp;