// Summary.js
import React from 'react';
import { Box, Text, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react';

const Summary = ({ revenueData, cogsData, grossProfitData }) => {
  const calculateTotal = (data) => {
    return Object.keys(data).reduce((total, month) => total + data[month], 0);
  };

  const totalRevenue = calculateTotal(revenueData);
  const totalCOGS = calculateTotal(cogsData);
  const totalGrossProfit = calculateTotal(grossProfitData);

  return (
    <Box p="4" boxShadow="md" borderRadius="md">
      <Text fontSize="md" mb="4">Summary</Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing="4">
        <Box 
          border="1px solid" 
          p="4" 
          borderRadius="md" 
          transition="transform 0.2s, box-shadow 0.2s" 
          _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          backgroundPosition={"green"}
        >
          <Stat>
            <StatLabel>Total Revenue</StatLabel>
            <StatNumber>{`${totalRevenue.toLocaleString()}$`}</StatNumber>
            <StatHelpText>For the year</StatHelpText>
          </Stat>
        </Box>
        <Box 
          border="1px solid" 
          p="4" 
          borderRadius="md" 
          transition="transform 0.2s, box-shadow 0.2s" 
          _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          backgroundPosition={"green"}
        >
          <Stat>
            <StatLabel>Total COGS</StatLabel>
            <StatNumber>{`${totalCOGS.toLocaleString()}$`}</StatNumber>
            <StatHelpText>Cost of Goods Sold</StatHelpText>
          </Stat>
        </Box>
        <Box 
          border="1px solid" 
          p="4" 
          borderRadius="md" 
          transition="transform 0.2s, box-shadow 0.2s" 
          _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
          backgroundPosition={"green"}
        >
          <Stat>
            <StatLabel>Gross Profit</StatLabel>
            <StatNumber>{`${totalGrossProfit.toLocaleString()}$`}</StatNumber>
            <StatHelpText>Revenue - COGS</StatHelpText>
          </Stat>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export { Summary };
