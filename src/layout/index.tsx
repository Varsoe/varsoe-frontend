import styled from 'styled-components';
import * as React from 'react';
import { Box } from 'rebass';
import Nav from './Nav';

export interface LayoutProps {}
const Container = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 1em;
`;
const Bg1 = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  background: ${(props) => props.theme.colors.randomRed};
  background: #f9a000;
  opacity: 0.1;
  border: 1px solid #f9a000;
  filter: blur(800px);
  transform: rotate(-180deg);
  width: 70vw;
  height: 428px;
`;
const Bg2 = styled(Box)`
  position: absolute;
  top: 0;
  right: -20%;
  background: ${(props) => props.theme.colors.randomRed};
  opacity: 0.1;
  filter: blur(800px);
  width: 30vw;
  height: 30vw;
`;
const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({ children }) => (
  <Box minHeight="100vh">
    <Bg1 />
    <Bg2 />
    <Container>
      <Nav />
      <main>{children}</main>
    </Container>
  </Box>
);

export default Layout;
