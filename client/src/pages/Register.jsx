// import { Box, FormControl, FormLabel, Input, Button, Text, useToast } from '@chakra-ui/react';
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { PostRegister } from '../redux/action'; // Ensure you have this action

// const Register = () => {
//   const dispatch = useDispatch();
//   const toast = useToast();
//   const initialVal = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     password: '',
//   };
//   const [formData, setFormData] = useState(initialVal);

//   const handleChange = (e) => {
//     const { value, name } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await dispatch(PostRegister(formData));
//       toast({
//         title: "Registration successful.",
//         description: "You have successfully registered.",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//       });
//       setFormData(initialVal);
//     } catch (error) {
//       toast({
//         title: "An error occurred.",
//         description: "Something went wrong. Please try again.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   return (
//     <Box
//       width={{ base: '100%', md: '30%' }}
//       p={8}
//       boxShadow="lg"
//       backgroundColor="white"
//       borderRadius="md"
//       marginTop={"10"}
//     >
//       <Text as="h1" fontSize="2xl" fontWeight="bold" mb={5}>Register</Text>
//       <form onSubmit={handleSubmit}>
//         <FormControl>
//           <FormLabel>First Name</FormLabel>
//           <Input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//           />
//           <FormLabel>Last Name</FormLabel>
//           <Input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//           />
//           <FormLabel>Email</FormLabel>
//           <Input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <FormLabel>Phone</FormLabel>
//           <Input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//           />
//           <FormLabel>Password</FormLabel>
//           <Input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           <Button
//             mt={5}
//             type="submit"
//             colorScheme="green"
//             width="full"
//           >
//             Submit
//           </Button>
//         </FormControl>
//       </form>
//     </Box>
//   );
// }

// export { Register };


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import '../pages/login.css';
import { PostRegister } from '../redux/action'; // Ensure you have this action
import { useNavigate } from 'react-router-dom';
import { Box, Button,Text } from '@chakra-ui/react';


const Register = () => {
  const dispatch = useDispatch();
const navigate=useNavigate()
  const initState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  };

  const [formData, setFormData] = useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(PostRegister(formData));
    navigate('/');
    setFormData(initState);
  };

 const handleLogin=()=>{
  navigate("/")
 }
   

  return (
    <div className="container">
      <div className="heading">Register</div>
      <form action="" className="form" onSubmit={handleSubmit}>
        <input
          required
          className="input"
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          required
          className="input"
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          required
          className="input"
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          required
          className="input"
          type="text"
          name="phone"
          id="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          required
          className="input"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input className="login-button" type="submit" value="Register" />
      </form>
      <Box display={"flex"}  justifyContent={"center"} alignItems={"center"} gap={"20px"}>
        <Text color={"blue.500"} fontSize={"sm"}>Not an User</Text>
        {/* onClick={handleLogin} */}
     <Button padding={"5"}color={"white"}backgroundColor={"#12a7d2 "} onClick={handleLogin}> Login </Button>
     </Box>
    </div>
  );
};

export { Register };
