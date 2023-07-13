import React from 'react'
import Layout from './components/Layout'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Calender from './components/Calender'
import ProgressContainer from './components/ProgressContainer'
import CompletedContainer from './components/CompletedContainer'
import TodoContainer from './components/TodoContainer'
import CreateToDo from './components/CreateToDo'

function App() {

  return (
    <div className='text-white'>
      <Layout>
        <Routes>
          <Route path='*' element={<Navigate to="/dashboard" />} />
          <Route path='/createtodo' element={<CreateToDo />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/calender' element={<Calender />} />
          <Route path='/todo' element={<TodoContainer />} />
          <Route path='/completed' element={<CompletedContainer />} />
          <Route path='/progress' element={<ProgressContainer />} />
        </Routes>
      </Layout>
    </div>
  )
}
export default App