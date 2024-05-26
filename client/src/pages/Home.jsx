import React from 'react';
import { Login } from './Login';
import { Register } from './Register';
import { Box } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ base: 'column', md: 'row' }}
      width={{ base: '100%', md: '100%' }}   
      margin="auto"
      p={4}
      justifyContent="space-around"
    >
      
      <Login />
      <Register />
    </Box>
  );
};

export { Home };
