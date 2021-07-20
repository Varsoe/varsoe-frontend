import * as React from 'react';
import styled from 'styled-components';
import { Text, Flex, Box } from 'rebass';
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import MobileHambuger from '../icons/MobileHambuger';
import Typography from '../components/atoms/Typography';
import Button, { ButtonLink } from '../components/atoms/Form/Button';
import { Mobile } from '../pages/Dashboard/Invoices';
import { BoxWithBorder } from '../pages/Dashboard/styles';
import CaretRight from '../icons/CaretRight';
import CloseModalIcon from '../icons/CloseModalIcon';
import { theme } from '../theme/theme';

export interface NavProps {}
const NavContainer = styled.div`
  padding: 2.4rem 0;
  display: flex;
  flex: 1;
  align-items: center;
  position: relative;
  z-index: 0;
  @media (max-width: 9030px) {
    justify-content: space-between;
  }
`;
const NavGroup = styled.nav`
  display: flex;
  margin: 0;
  margin-left: auto;
  align-items: center;
  @media (max-width: 930px) {
    display: none;
  }
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
  display: inline-block;
  @media (max-width: 903px) {
    display: none;
  }
`;
export const UserAvatar = styled(BoxWithBorder)`
  /* width: 32px;
  height: 32px; */
  /* background-color: #fce9c4; */
  /* border: 2px solid #f7c86c; */
  color: #f5bd4f;
  border-radius: 50%;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLinksMobile = styled(NavLink)`
  display: flex;
  font-size: 16px;
  line-height: 24px;
  color: #5a6273;
  display: flex;
  text-decoration: none;
  padding: 16px 12px;
  align-items: center;
  justify-content: space-between;
  &.active {
    color: ${(props) => props.theme.colors.blue[600]};
  }
  pointer-events: all;
`;

const MobileNavGroupBg = styled.div`
  display: none;
  padding: 15px;
  background: #08132d29;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 500;
  @media (max-width: 930px) {
    &.active {
      display: block;
    }
  }
`;

const MobileNavGroup = styled.nav`
  background: #fff;
  width: 100%;
  padding: 8px;
  margin-top: 40%;
  border: 1px solid #f5f5f7;
  box-sizing: border-box;
  box-shadow: 2px 2px 4px rgba(8, 19, 45, 0.04), -2px -2px 8px rgba(8, 19, 45, 0.04);
  border-radius: 8px;
  position: relative;
  z-index: 41;
`;

const Nav: React.FC<NavProps> = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const location = useLocation();
  const [first, path] = location.pathname.split('/');
  return (
    <NavContainer>
      {/* <ButtonLink to="https://www.varsoe.com" variant="transparent"> */}
      <Logo src="/logo.png" />
      {/* </ButtonLink> */}
      <Mobile>
        <Button variant="transparent" onClick={() => setShowMobileNav(true)} className="hamburger">
          <MobileHambuger />
        </Button>
      </Mobile>
      {/* </Button> */}
      <Mobile>
        <Typography.Heading type="h6" textTransform="capitalize">
          {path || 'dashboard'}
        </Typography.Heading>
      </Mobile>
      <Mobile>
        <UserAvatar width="32px" height="32px" backgroundColor="#fce9c4">
          DA
        </UserAvatar>
      </Mobile>
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
        <Flex alignItems="center" ml={2} marginLeft="50px">
          <UserAvatar
            frameBorder="1px solid #FDF2DC"
            backgroundColor={theme.colors.yellow[100]}
            color={theme.colors.yellow[600]}
            width="32px"
            height="32px"
          >
            DA
          </UserAvatar>
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
      </NavGroup>
      <MobileNavGroupBg className={showMobileNav ? 'active' : ''}>
        <Button variant="transparent" style={{ position: 'absolute', top: '10%', left: '20px' }}>
          <CloseModalIcon onClick={() => setShowMobileNav(false)} />
        </Button>
        <MobileNavGroup>
          <NavLinksMobile to="/" activeClassName="active" exact onClick={() => setShowMobileNav(false)}>
            <span>Dashboard</span>
            <CaretRight />
          </NavLinksMobile>
          <NavLinksMobile to="/invoices" activeClassName="active" exact onClick={() => setShowMobileNav(false)}>
            <span>Invoices</span>
            <CaretRight />
          </NavLinksMobile>
          <NavLinksMobile to="/payment" activeClassName="active" exact onClick={() => setShowMobileNav(false)}>
            <span>Payment</span>
            <CaretRight />
          </NavLinksMobile>
          <NavLinksMobile to="/customers" activeClassName="active" exact onClick={() => setShowMobileNav(false)}>
            <span>Customers</span>
            <CaretRight />
          </NavLinksMobile>
        </MobileNavGroup>
      </MobileNavGroupBg>
    </NavContainer>
  );
};

export default Nav;
