// src/components/Sidebar.js
import React from "react";
import { Box, VStack, Text, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { userName, role } = useSelector((state) => state.auth);
  const name = userName?.split(" ");
  let newString = "";
  newString = name[0].charAt(0).toUpperCase() + name[1].charAt(0).toUpperCase();

  return (
    <Box w="200px" bg="purple.700" color="white" p="4">
      <Text fontSize="2xl" fontWeight="bold">
        KAPTIVE
      </Text>
      <VStack align="start" mt="4" spacing="4">
        <Button variant="ghost" colorScheme="whiteAlpha" color="white">
          Charts
        </Button>
        <Button variant="ghost" colorScheme="whiteAlpha" color="white">
          Tables
        </Button>
        <Button variant="ghost" colorScheme="whiteAlpha" color="white">
          Reports
        </Button>
        <Button variant="ghost" colorScheme="whiteAlpha" color="white">
          Forecast
        </Button>
      </VStack>
      <Box mt="200px" ml={"3"} >
        <Box display={"flex"} justifyContent={"center"}width={"150px"} alignContent={"center"}gap={"20px"}  height={"80px"}>
          <Box
            width={"60px"}
            height={"50px"}
            backgroundColor={"green"}
            borderRadius={"50%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text>{newString}</Text>{" "}
          </Box>
          <Text
            variant="ghost"
            colorScheme="whiteAlpha"
            color="white"
            fontWeight={'bold'}
            fontSize={"lg"}
           
          >
            {userName}{" "}
          </Text>
        </Box>
        <Text
          variant="ghost"
          colorScheme="whiteAlpha"
          color="white"
          fontSize={"md"}
          ml={"5"}
        >
          {role}
        </Text>
        <Button
        mt={4}
          backgroundColor={"white.600"} 
color={"black"}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export { Sidebar };
