import { ThemeProvider } from 'styled-components';
import * as React from 'react';
import RouterComponent from './Routes/Router';
import { GlobalStyles } from './styles';
import { theme } from './theme/theme';

export interface AppProps {}

const App: React.FC<AppProps> = () => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <RouterComponent />
    </ThemeProvider>
  </>
);

export default App;
