import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'

const AllRoutes = () => {
  return (
    <Routes>
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
    </Routes>
  )
}

export  {AllRoutes}