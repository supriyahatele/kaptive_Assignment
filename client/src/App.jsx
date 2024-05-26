import { Box, Text } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <Box
      backgroundColor="blue.700"
      height={{
        base: 'auto',
        sm: 'auto',
        md: '700',
        lg: '700',
        xl: '700',
        '2xl': '100vh',
      }}
    >
      <AllRoutes />
    </Box>
  );
}

export default App;
