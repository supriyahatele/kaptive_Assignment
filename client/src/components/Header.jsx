import React from 'react';
import { Box, Flex, Button, Spacer } from '@chakra-ui/react';

const Header = ({ toggleChartType }) => {
  return (
    <Box bg="gray.100" p="4" borderBottom="1px" borderColor="gray.200">
      <Flex align="center">
        <Button>Summary</Button>
        <Button>Balance Sheet</Button>
        <Button>Income Statement</Button>
        <Spacer />
        <Button onClick={toggleChartType}>Normal View</Button>
        <Button onClick={toggleChartType}>Growth View</Button>
        <Button>Settings</Button>
      </Flex>
    </Box>
  );
};

export { Header };
