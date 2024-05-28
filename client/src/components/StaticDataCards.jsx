import { StaticDataCard } from "./StaticDataCard";
import { Box,Text } from "@chakra-ui/react";

const StaticDataCards = ({ title, data }) => (
    <Box p="4"  height ={200} display={"flex"}  justifyContent={"space-around"} >
      {data.map((item, index) => (
        <StaticDataCard key={index} title={item.title} value={item.value} />
      ))}
    </Box>
  );
  export {StaticDataCards}