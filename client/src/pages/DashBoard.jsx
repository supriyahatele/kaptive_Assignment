import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Sidebar } from '../components/Sidebar';
import { Charts } from '../components/Charts';
import { CashflowSummary } from '../components/CashflowSummary';
import { Header } from '../components/Header';

const DashBoard = () => {
  const [chartType, setChartType] = useState("bar"); // State to manage chart type

  const toggleChartType = () => {
    setChartType(prevType => (prevType === "bar" ? "line" : "bar"));
  };

  return (
    <Box width={"100%"} backgroundColor={"white"}>
      <Flex>
        <Sidebar />
        <Box flex="1">
          <Header toggleChartType={toggleChartType} />
          <Box p="2">
            <Charts chartType={chartType} />
            <CashflowSummary />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export { DashBoard };
