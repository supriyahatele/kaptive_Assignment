// import { Box, FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
// import { PostLogin } from '../redux/action'; // Ensure you have this action

// const Login = () => {
//   const { isLoading, isError, token, isAuth } = useSelector(state => state.auth);
//   const dispatch = useDispatch();

//   const initState = {
//     email: "",
//     password: "",
//   };
//   const [formdata, setFormdata] = useState(initState);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormdata({
//       ...formdata,
//       [name]: value,
//     });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(PostLogin(formdata));
//     setFormdata(initState);
//   };
//   if (token && isAuth) {
//     return <Navigate to="/dashboard" />;
//   }
//   return (
//     <Box
//       width={{ base: '100%', md: '30%' }}
//       p={8}
//       boxShadow="lg"
//       backgroundColor="white"
//       borderRadius="md"
//       marginTop={"10"}
//     >
//       <Text as="h1" fontSize="2xl" fontWeight="bold" mb={5}>Login</Text>
//       <form onSubmit={handleSubmit}>
//         <FormControl>
//           <FormLabel>Email</FormLabel>
//           <Input
//             type="email"
//             name="email"
//             value={formdata.email}
//             onChange={handleChange}
//           />
//           <FormLabel>Password</FormLabel>
//           <Input
//             type="password"
//             name="password"
//             value={formdata.password}
//             onChange={handleChange}
//           />
//           <Button
//             mt={5}
//             type="submit"
//             isLoading={isLoading}
//             loadingText="please wait..."
//             colorScheme="blue"
//             width="full"
//           >
//             Submit
//           </Button>
//         </FormControl>
//         {isError && <Text color="red.500" mt={3}>Something went wrong</Text>}
//       </form>
//     </Box>
//   );
// };

// export { Login };

// import React from 'react';

import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { PostLogin } from '../redux/action'; // Ensure you have this action
import '../pages/login.css'
import { useState } from "react";
import { Box, Button ,Text} from "@chakra-ui/react";

const Login = () => {
    const {token, isAuth } = useSelector(state => state.auth);
  const dispatch = useDispatch();
const navigate=useNavigate()
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
 const  handleRegister=()=>{
    navigate("/register")
  }

  return (
    <div className="container">
      <div className="heading">Sign In</div>
      <form action="" className="form" onSubmit={handleSubmit}>
        <input required className="input" type="email" name="email" id="email" placeholder="E-mail"  value={formdata.email} onChange={handleChange}/>
        <input required className="input" type="password" name="password" id="password" placeholder="Password" value={formdata.password}
            onChange={handleChange} />
        <span className="forgot-password"><a href="#">Forgot Password ?</a></span>
        <input className="login-button" type="submit" value="Sign In" />
      </form>
      <div className="social-account-container">
        <span className="title">Or Sign in with</span>
        <div className="social-accounts">
          <button className="social-button google">
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512">
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
            </svg>
          </button>
          <button className="social-button apple">
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
            </svg>
          </button>
          <button className="social-button twitter">
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
            </svg>
          </button>
        </div>
      </div>
      <Box display={"flex"} mt={"50px"} justifyContent={"center"} alignItems={"center"} gap={"20px"}>
        <Text color={"blue.500"} fontSize={"sm"}>Not an User</Text>
     <Button padding={"5"}color={"white"}backgroundColor={"#12a7d2 "} onClick={handleRegister}> Register </Button>
     </Box>
    </div>
  );
};

export  {Login};
