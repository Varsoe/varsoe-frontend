import * as React from 'react';
import styled from 'styled-components';
import { Text, Flex, Box } from 'rebass';
import { NavLink } from 'react-router-dom';

export interface NavProps {}
const NavContainer = styled.div`
  padding: 2.4rem 0;
  display: flex;
  flex: 1;
  align-items: center;
  position: relative;
  z-index: 0;
`;
const NavGroup = styled.nav`
  display: flex;
  margin: 0 auto;
  align-items: center;
`;
const NavLinks = styled(NavLink)`
  font-size: 1.6rem;
  color: rgba(8, 19, 45, 0.4);
  margin-right: 6.4rem;
  text-decoration: none;
  position: relative;
  &.active {
    color: ${(props) => props.theme.colors.blue[600]};
  }
  &.active::before {
    position: absolute;
    width: 6px;
    height: 6px;
    left: calc(50% - 3px);
    bottom: -10px;
    content: '';
    background-color: ${(props) => props.theme.colors.blue[600]};
    border-radius: 50%;
  }
`;
const Logo = styled.img`
  height: 20px;
  object-fit: contain;
`;
const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  background-color: #fce9c4;
  border: 2px solid #f7c86c;
  color: #f5bd4f;
  border-radius: 50%;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav: React.FC<NavProps> = () => (
  <NavContainer>
    <Logo src="/logo.png" />
    <NavGroup>
      <NavLinks to="/" activeClassName="active" exact>
        Dashboard
      </NavLinks>
      <NavLinks to="/invoices" activeClassName="active">
        Invoices
      </NavLinks>
      <NavLinks to="/payment" activeClassName="active">
        Payment
      </NavLinks>
      <NavLinks to="/customers" activeClassName="active">
        Customers
      </NavLinks>
    </NavGroup>
    <Flex alignItems="center" ml={2}>
      <UserAvatar>DA</UserAvatar>
      <Text fontSize={[2]} color="primary" ml="2">
        Damola Adegoke
      </Text>
      <Box ml="2">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.64"
            d="M5.29289 6.29289L1.70711 2.70711C1.07714 2.07714 1.52331 1 2.41421 1H9.58579C10.4767 1 10.9229 2.07714 10.2929 2.70711L6.70711 6.29289C6.31658 6.68342 5.68342 6.68342 5.29289 6.29289Z"
            fill="#08132D"
            stroke="#08132D"
          />
        </svg>
      </Box>
    </Flex>
  </NavContainer>
);

export default Nav;
