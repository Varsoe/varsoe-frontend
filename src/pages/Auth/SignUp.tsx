import { Box, Flex } from 'rebass';
import * as React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import Typography from '../../components/atoms/Typography';
import RegisterBg from '../../icons/RegisterBg';
import Button from '../../components/atoms/Form/Button';
import Google from '../../icons/Google';
import Apple from '../../icons/Apple';
import { BoxWithBorder } from '../Dashboard/styles';
import Form from '../../components/atoms/Form';
import { theme } from '../../theme/theme';
import LargeCheck from '../../icons/LargeCheck';
import Ellipse from '../../icons/Ellipse';
import EllipseFull from '../../icons/EllipseFull';

export interface SignUpProps {}
export const Logo = styled.img`
  height: 20px;
  object-fit: contain;
  display: inline-block;
`;
export const Grid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  overflow-x: hidden;
  @media (max-width: 1020px) {
    grid-template-columns: 1fr;
  }
`;

const Bg = styled(Box)`
  background-color: ${(props) => props.theme.colors.black[600]};
  z-index: 2;
  overflow-y: hidden;
  position: relative;
  @media (max-width: 1020px) {
    display: none;
  }
`;

export const AuthButtons = styled.button`
  padding: 12px;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid #e6e7ea;
  border-radius: 8px;
  outline: none;
  display: flex;
  width: 100%;
  align-items: center;
  height: 48px;
  cursor: pointer;
  position: relative;
  z-index: 3;
`;

export const YellowBg = styled(Box)`
  position: absolute;
  left: 0;
  right: 0;
  height: 50vh;
  width: 120vh;
  background-color: #f9a000;
  border: 1px solid #f9a000;
  filter: blur(400px);
  transform: rotate(-50deg) translate(-150px, -80%);
  opacity: 0.2;
`;

export const Content = styled(Box)`
  position: relative;
  z-index: 3;
`;

const InputGroup = styled(Flex)`
  & > * {
    margin-right: 16px;
  }
  & > *:last-child {
    margin-right: 0;
  }
  @media (max-width: 600px) {
    display: block !important;
    & > * {
      margin-right: 0px;
      margin-bottom: 40px;
    }
    & > *:last-child {
      margin-bottom: 0;
    }
  }
`;
const SignUp: React.FC<SignUpProps> = () => {
  const history = useHistory();
  return (
    <Grid>
      <Box style={{ position: 'relative' }} overflowX="hidden">
        <YellowBg />
        <Content pt="28px" maxWidth="600px" margin="0 auto" width="100%" px="20px" pb="30px">
          <Flex justifyContent="space-between" alignItems="center">
            <Logo src="/logo.png" />
            <Button
              variant="transparent"
              fontSize={theme.fontSizes[2]}
              onClick={() => {
                history.push('/login');
              }}
            >
              Log In
            </Button>
          </Flex>
          <Box mt="120px">
            <Typography.Heading type="h4">Welcome to Varsoe</Typography.Heading>
            <Typography.Paragraph>Let’s make your life easier.</Typography.Paragraph>
          </Box>
          <BoxWithBorder py="32px" borderBottom="1px solid #E6E7EA">
            <AuthButtons>
              <Google style={{ marginLeft: 'auto', marginRight: '10px' }} />
              <Typography.Paragraph style={{ marginRight: 'auto' }}>Sign up with Google</Typography.Paragraph>
            </AuthButtons>
            <AuthButtons style={{ marginTop: '24px' }}>
              <Apple style={{ marginLeft: 'auto', marginRight: '10px' }} />
              <Typography.Paragraph style={{ marginRight: 'auto' }}>Sign up with Apple</Typography.Paragraph>
            </AuthButtons>
          </BoxWithBorder>
          <Box mt="32px">
            <InputGroup mb="40px">
              <Form.Input placeholder="First name" />
              <Form.Input placeholder="Last name" />
            </InputGroup>
            <Form.FormGroup mb="40px">
              <Form.Input placeholder="email" />
            </Form.FormGroup>
            <Form.FormGroup mb="40px">
              <Form.Input placeholder="Password" type="password" />
            </Form.FormGroup>
            <Flex alignItems="center" py="20px">
              <Typography.Paragraph color={theme.colors.black[400]}>I accept the</Typography.Paragraph>
              <Button variant="transparent" fontSize={theme.fontSizes[2]} ml="5px" mr="5px">
                Terms of Use
              </Button>{' '}
              <Typography.Paragraph color={theme.colors.black[400]}>and</Typography.Paragraph>
              <Button variant="transparent" fontSize={theme.fontSizes[2]} mr="5px" ml="5px">
                {' '}
                Privacy Policy
              </Button>
            </Flex>
          </Box>
          <Button variant="primary">Create Account</Button>
        </Content>
      </Box>
      <Bg overflowY="hidden" height="100vh">
        <Flex
          flexDirection="column"
          pl="60px"
          pb="70px"
          pt="80px"
          flex="1"
          justifyContent="space-between"
          height="100%"
        >
          <Flex>
            <EllipseFull style={{ marginRight: '20px' }} />
            <Ellipse style={{ marginRight: '20px' }} />
            <Ellipse />
          </Flex>
          <Box marginBottom="20px">
            <Typography.Heading type="h3" color={theme.colors.white}>
              Invoices
            </Typography.Heading>
            <Typography.Paragraph color={theme.colors.white}>Talk about invoicing here</Typography.Paragraph>
          </Box>
        </Flex>
        <RegisterBg
          style={{
            position: 'absolute',
            left: '60px',
            width: '100%',
            right: '-50px',
            top: '50%',
            transform: 'translateY(-48%)',
            zIndex: 3,
          }}
        />
        <LargeCheck style={{ position: 'absolute', bottom: '0px', left: '50px' }} />
      </Bg>
    </Grid>
  );
};

export default SignUp;
