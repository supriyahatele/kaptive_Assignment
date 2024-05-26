// src/components/CashflowSummary.js
import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Text, Button } from '@chakra-ui/react';
import { CashflowRow } from './CashflowRow';
import  newData from '../db.json'
import { useState } from 'react';
console.log(newData)
const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const CashflowSummary = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const totalPages = Math.ceil(newData.Sheet1.length / rowsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = newData.Sheet1.slice(startIndex, endIndex);
  return (
    <Box mt="2" bg="white"  boxShadow="md" borderRadius="md" width={"100%"} p="4">
      <Text fontSize="md" mb="2">Cashflow Summary</Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th sx={{ padding: '4px' }}> <Text fontSize={"xs"}>Cashflow</Text></Th>
            {months.map((item,index) => (
              <Th sx={{ padding: '4px' }} key={index}> <Text  fontSize={"xs"} textAlign={"left"} >{item}</Text></Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
        {currentData.map((entry, index) => (
            <CashflowRow key={index} label={entry.Overhead} data={months.map(month => entry[month])} />
          ))}
          
        </Tbody>
      </Table>
      <Box mt="4" display="flex" justifyContent="space-between">
        <Button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</Button>
        <Text>Page {currentPage} of {totalPages}</Text>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</Button>
      </Box>
    </Box>
  );
};

export  {CashflowSummary};
