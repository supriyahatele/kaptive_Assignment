import { Box, FormControl, FormLabel, Input, Button, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PostRegister } from '../redux/action'; // Ensure you have this action

const Register = () => {
  const dispatch = useDispatch();
  const initialVal = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  };
  const [formData, setFormData] = useState(initialVal);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(PostRegister(formData));
    setFormData(initialVal);
  };

  return (
    <Box
      width={{ base: '100%', md: '30%' }}
      p={8}
      boxShadow="lg"
      backgroundColor="white"
      borderRadius="md"
      marginTop={"10"}
    >
      <Text as="h1" fontSize="2xl" fontWeight="bold" mb={5}>Register</Text>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormLabel>Phone</FormLabel>
          <Input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            mt={5}
            type="submit"
            colorScheme="green"
            width="full"
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </Box>
  );
}

export { Register };
