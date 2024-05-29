import { Box, Text } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <Box width={"100%"} height={"705px"} display={"flex"} alignContent={"center"} justifyContent={"center"}  backgroundColor={"blue.200"}>
      <AllRoutes />
    </Box>
  );
}

export default App;
