import styled from 'styled-components';
import * as React from 'react';
import { Box } from 'rebass';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import Nav from './Nav';
import { useUserQuery } from '../pages/Auth/service/apihooks';
import { useAuth } from '../context/AuthContext';
import Loader from '../components/Loader';

export interface LayoutProps {}
const Container = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 3;
  /* overflow-x: hidden; */
`;
export const Bg1 = styled(Box)`
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

  @media (max-width: 930px) {
    background-color: ${(props) => props.theme.colors.white};
    display: none;
  }
`;
export const Bg2 = styled(Box)`
  position: absolute;
  top: 0;
  right: -20%;
  background: ${(props) => props.theme.colors.randomRed};
  opacity: 0.1;
  filter: blur(800px);
  width: 30vw;
  height: 30vw;
  @media (max-width: 930px) {
    background-color: ${(props) => props.theme.colors.white};
    display: none;
  }
`;
const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({ children }) => {
  const history = useHistory();
  const userState = useUserQuery();
  const { setUser } = useAuth();

  if (userState.isError) {
    history.push('/login');
  }

  useEffect(() => {
    if (userState.data) {
      setUser(userState.data);
    }
  }, [setUser, userState.data]);

  if (userState.isFetching) {
    return <h1>Loading...</h1>;
  }
  return (
    <Box minHeight="100vh">
      <Bg1 />
      <Bg2 />
      <Container>
        <Nav />

        <main>{children}</main>
      </Container>
    </Box>
  );
};

export default Layout;
