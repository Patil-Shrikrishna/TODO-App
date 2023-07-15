import React from 'react'
import Layout from './components/Layout'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './containers/Dashboard'
import Calender from './components/Calender'
import ProgressContainer from './containers/ProgressContainer'
import CompletedContainer from './containers/CompletedContainer'
import TodoContainer from './containers/TodoContainer'
import CreateToDoContainer from './containers/CreateToDoContainer'

function App() {

  return (
    <div className='text-white'>
      <Layout>
        <Routes>
          <Route path='*' element={<Navigate to="/dashboard" />} />
          <Route path='/createtodo' element={<CreateToDoContainer />} />
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