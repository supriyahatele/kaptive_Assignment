import { Box,Text } from "@chakra-ui/react";


const StaticDataCard = ({ title, value }) => (
    <Box p="4" m="2" bg="white" boxShadow="md" borderRadius="md" width="250px" textAlign={"center"}  transition="transform 0.2s, box-shadow 0.2s" 
    _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}>
      <Text fontSize="lg" mb="2">{title}</Text>
      <Text fontSize="2xl">{value}$</Text>
    </Box>
  );

  export {StaticDataCard}