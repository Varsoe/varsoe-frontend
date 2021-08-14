import { ThemeProvider } from 'styled-components';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import RouterComponent from './Routes/Router';
import { GlobalStyles } from './styles';
import { theme } from './theme/theme';

const queryClient = new QueryClient();

export interface AppProps {}

const App: React.FC<AppProps> = () => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterComponent />
      </QueryClientProvider>
    </ThemeProvider>
  </>
);

export default App;
