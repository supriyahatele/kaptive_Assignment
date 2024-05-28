import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Sidebar } from '../components/Sidebar';
import { Charts } from '../components/Charts';
import { CashflowSummary } from '../components/CashflowSummary';
import { Header } from '../components/Header';

const DashBoard = () => {
  const [chartType, setChartType] = useState("bar"); // State to manage chart type
  const [viewType, setViewType] = useState("Summary"); // State to manage view type

  const toggleChartType = () => {
    setChartType(prevType => (prevType === "bar" ? "line" : "bar"));
  };

  const handleViewChange = (view) => {
    setViewType(view);
  };

  return (
    <Box width={"100%"} backgroundColor={"white"}>
      <Flex>
        <Sidebar />
        <Box flex="1">
          <Header toggleChartType={toggleChartType} handleViewChange={handleViewChange} />
          <Box p="2">
            <Charts chartType={chartType} viewType={viewType} />
            <CashflowSummary />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export { DashBoard };
