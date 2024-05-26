import { Box, FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { PostLogin } from '../redux/action'; // Ensure you have this action

const Login = () => {
  const { isLoading, isError, token, isAuth } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const initState = {
    email: "",
    password: "",
  };
  const [formdata, setFormdata] = useState(initState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(PostLogin(formdata));
    setFormdata(initState);
  };
  if (token && isAuth) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <Box
      width={{ base: '100%', md: '30%' }}
      p={8}
      boxShadow="lg"
      backgroundColor="white"
      borderRadius="md"
      marginTop={"10"}
    >
      <Text as="h1" fontSize="2xl" fontWeight="bold" mb={5}>Login</Text>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
          />
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={formdata.password}
            onChange={handleChange}
          />
          <Button
            mt={5}
            type="submit"
            isLoading={isLoading}
            loadingText="please wait..."
            colorScheme="blue"
            width="full"
          >
            Submit
          </Button>
        </FormControl>
        {isError && <Text color="red.500" mt={3}>Something went wrong</Text>}
      </form>
    </Box>
  );
};

export { Login };
