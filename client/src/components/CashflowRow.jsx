// src/components/CashflowRow.js
import React from 'react';
import { Tr, Td, Text } from '@chakra-ui/react';

const CashflowRow = ({ label, data }) => {
  return (
    <Tr  textAlign={"left"}>
      <Td  sx={{ padding: '4px' }}> <Text  fontSize={"xs"}>{label}</Text></Td>
      {data.map((item, index) => (
        <Td sx={{ padding: '4px' }} key={index}> <Text fontSize={"xs"}>{Math.round(item).toLocaleString()}</Text></Td>
      ))}
    </Tr>
  );
};

export  {CashflowRow};
