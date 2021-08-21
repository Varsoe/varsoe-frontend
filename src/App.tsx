import { ThemeProvider } from 'styled-components';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import RouterComponent from './Routes/Router';
import { GlobalStyles } from './styles';
import { theme } from './theme/theme';
import { AuthProvider } from './context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

export interface AppProps {}

const App: React.FC<AppProps> = () => (
  <AuthProvider>
    <GlobalStyles />
    <ToastContainer />
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterComponent />
      </QueryClientProvider>
    </ThemeProvider>
  </AuthProvider>
);

export default App;
