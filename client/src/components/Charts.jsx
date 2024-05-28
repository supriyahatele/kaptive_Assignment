import React, { useMemo } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import newData from '../db.json';
import { Summary } from './Summary';
import { StaticDataCards } from './StaticDataCards';

const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const calculateTotalRevenue = (data) => {
  const filteredData = data.filter(entry => entry.Overhead.includes("Revenue"));
  const totalRevenue = months.reduce((acc, month) => {
    acc[month] = filteredData.reduce((sum, entry) => sum + entry[month], 0);
    return acc;
  }, {});
  return totalRevenue;
};

const calculateTotalCOGS = (data) => {
  const filteredData = data.filter(entry => entry.Overhead.includes("COGS"));
  const totalCOGS = months.reduce((acc, month) => {
    acc[month] = filteredData.reduce((sum, entry) => sum + entry[month], 0);
    return acc;
  }, {});
  return totalCOGS;
};

const calculateGrossProfit = (revenue, cogs) => {
  return months.reduce((acc, month) => {
    acc[month] = revenue[month] - cogs[month];
    return acc;
  }, {});
};
const incomeStatementData = [
  { title: "Revenue", value: 250000 },
  { title: "Expenses", value: 180000 },
  { title: "Net Income", value: 70000 }
];

const balanceSheetData = [
  { title: "Assets", value: 500000 },
  { title: "Liabilities", value: 200000 },
  { title: "Equity", value: 300000 }
];
const Charts = ({ chartType, viewType }) => {
  const revenueData = useMemo(() => calculateTotalRevenue(newData.Sheet1), [newData.Sheet1]);
  const cogsData = useMemo(() => calculateTotalCOGS(newData.Sheet1), [newData.Sheet1]);
  const grossProfitData = useMemo(() => calculateGrossProfit(revenueData, cogsData), [revenueData, cogsData]);

  const chartData = months.map(month => ({
    name: month,
    Revenue: revenueData[month] || 0,
    COGS: cogsData[month] || 0,
    'Gross Profit': grossProfitData[month] || 0
  }));

  const renderChart = () => {
    if (viewType === "Summary") {
      return <Summary revenueData={revenueData} cogsData={revenueData} grossProfitData={grossProfitData} />;
    } else if (viewType === "Balance Sheet") {
      return <StaticDataCards title="Balance Sheet" data={balanceSheetData} />;
    } else if (viewType === "Income Statement") {
      return <StaticDataCards title="Income Statement" data={incomeStatementData} />;
    } else {
      return chartType === "bar" ? (
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} style={{padding:"5px"}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Revenue" fill="green" />
          <Bar dataKey="COGS" fill="pink" />
          <Bar dataKey="Gross Profit" fill="#ffc658" />
        </BarChart>
      ) : (
        <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} style={{padding:"5px"}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Revenue" stroke="green" />
          <Line type="monotone" dataKey="COGS" stroke="pink" />
          <Line type="monotone" dataKey="Gross Profit" stroke="#ffc658" />
        </LineChart>
      );
    }
  };

  return (
    <Box p="4" boxShadow="md" borderRadius="md">
      <Text fontSize="md" mb="4" fontWeight={600}>Charts</Text>
      <ResponsiveContainer width="100%" height={250}>
        {renderChart()}
      </ResponsiveContainer>
    </Box>
  );
};

export { Charts };
