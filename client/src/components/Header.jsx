import React from 'react';
import { Box, Flex, Button, Spacer } from '@chakra-ui/react';

const Header = ({ toggleChartType, handleViewChange }) => {
  return (
    <Box bg="gray.100" p="4" borderBottom="1px" borderColor="gray.200">
      <Flex align="center">
        <Button onClick={() => handleViewChange('Summary')}>Summary</Button>
        <Button onClick={() => handleViewChange('Balance Sheet')}>Balance Sheet</Button>
        <Button onClick={() => handleViewChange('Income Statement')}>Income Statement</Button>
        <Spacer />
        <Button onClick={() => { toggleChartType(); handleViewChange('Normal View'); }}>Normal View</Button>
        <Button onClick={() => { toggleChartType(); handleViewChange('Growth View'); }}>Growth View</Button>
        <Button>Settings</Button>
      </Flex>
    </Box>
  );
};

export { Header };
