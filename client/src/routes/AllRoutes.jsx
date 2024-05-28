import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { DashBoard } from '../pages/DashBoard'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'

const AllRoutes = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={<DashBoard/>}/>
    </Routes>
  )
}

export  {AllRoutes}