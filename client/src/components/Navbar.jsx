
import { Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{textAlign:"center"}}>
        <Link to={"/"}> <Text as="h1" fontSize="3xl" fontWeight="bold"  >Login/Register</Text> </Link>   
    </div>
  )
}

export  {Navbar}