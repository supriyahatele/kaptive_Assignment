// src/components/Sidebar.js
import React from "react";
import { Box, VStack, Text, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { userName, role } = useSelector((state) => state.auth);
  const name = userName.split(" ");
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
      <Box mt="300px" ml={"3"}>
        <Box display={"flex"}>
          <Box
            width={10}
            height={10}
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
            ml={"5"}
          >
            {userName}{" "}
          </Text>
        </Box>
        <Text
          variant="ghost"
          colorScheme="whiteAlpha"
          color="white"
          fontSize={"lg"}
          ml={"5"}
        >
          {role}
        </Text>
        <Button
          backgroundColor={"blue.500"} 

        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export { Sidebar };
