import * as React from 'react';
import { useHistory } from 'react-router';
import { Box, Flex } from 'rebass';
import styled from 'styled-components';
import Form from '../../components/atoms/Form';
import Button from '../../components/atoms/Form/Button';
import Typography from '../../components/atoms/Typography';
import Apple from '../../icons/Apple';
import Google from '../../icons/Google';
import { theme } from '../../theme/theme';
import { BoxWithBorder, FlexWithBorder } from '../Dashboard/styles';
import { AuthButtons, Content, Logo, YellowBg } from './SignUp';

export interface LoginProps {}
const Bg = styled(Flex)`
  @media (max-width: 1020px) {
    display: none;
  }
`;

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  overflow-x: hidden;
  @media (max-width: 1020px) {
    grid-template-columns: 1fr;
  }
`;
const Login: React.FC<LoginProps> = () => {
  const history = useHistory();
  return (
    <Grid>
      <Box style={{ position: 'relative' }} overflowX="hidden">
        <YellowBg />
        <Content pt="28px" maxWidth="600px" margin="0 auto" width="100%" px="20px" pb="30px">
          <Flex justifyContent="space-between" alignItems="center">
            <Logo src="/logo.png" />
            <Button variant="transparent" fontSize={theme.fontSizes[2]} onClick={() => history.push('/signup')}>
              Sign Up
            </Button>
          </Flex>
          <Box mt="120px">
            <Typography.Heading type="h4">Welcome back,</Typography.Heading>
            <Typography.Paragraph>Alright. Let’s get back right into it.</Typography.Paragraph>
          </Box>
          <BoxWithBorder py="32px" borderBottom="1px solid #E6E7EA">
            <AuthButtons>
              <Google style={{ marginLeft: 'auto', marginRight: '10px' }} />
              <Typography.Paragraph style={{ marginRight: 'auto' }}>Login In with Google</Typography.Paragraph>
            </AuthButtons>
            <AuthButtons style={{ marginTop: '24px' }}>
              <Apple style={{ marginLeft: 'auto', marginRight: '10px' }} />
              <Typography.Paragraph style={{ marginRight: 'auto' }}>Login In with Apple</Typography.Paragraph>
            </AuthButtons>
          </BoxWithBorder>
          <Box mt="32px">
            <Form.FormGroup mb="40px">
              <Form.Input placeholder="email" />
            </Form.FormGroup>
            <Form.FormGroup mb="10px">
              <Form.Input placeholder="Password" type="password" />
            </Form.FormGroup>
            <Flex alignItems="center" pb="40px">
              <Typography.Paragraph color={theme.colors.black[400]}>Forgot Password</Typography.Paragraph>
              <Button
                variant="transparent"
                fontSize={theme.fontSizes[2]}
                ml="5px"
                mr="5px"
                onClick={() => history.push('/forgot-password')}
              >
                Reset Password
              </Button>
            </Flex>
          </Box>
          <Button variant="primary">Login</Button>
        </Content>
      </Box>
      <Bg
        overflowY="hidden"
        height="100vh"
        backgroundColor={theme.colors.blue[100]}
        alignItems="center"
        pl="80px"
        pr="20px"
      >
        <Box maxWidth="500px" mt="-50px">
          <Flex mb="40px">
            <FlexWithBorder
              width="32px"
              height="32px"
              backgroundColor={theme.colors.blue[200]}
              borderRadius="50%"
              justifyContent="center"
              alignItems="center"
            >
              <BoxWithBorder width="12px" height="12px" backgroundColor={theme.colors.black[600]} borderRadius="50%" />
            </FlexWithBorder>
            <Box ml="16px" flex="1">
              <Typography.Heading type="h6">Seamless Payments</Typography.Heading>
              <Typography.Paragraph color={theme.colors.black[400]}>
                Varsoe makes your life easy by giving you back your time so you can focus on doing the work
              </Typography.Paragraph>
            </Box>
          </Flex>
          <Flex mb="40px">
            <FlexWithBorder
              width="32px"
              height="32px"
              backgroundColor={theme.colors.blue[200]}
              borderRadius="50%"
              justifyContent="center"
              alignItems="center"
            >
              <BoxWithBorder width="12px" height="12px" backgroundColor={theme.colors.black[600]} borderRadius="50%" />
            </FlexWithBorder>
            <Box ml="16px" flex="1">
              <Typography.Heading type="h6">Simple Invoices</Typography.Heading>
              <Typography.Paragraph color={theme.colors.black[400]}>
                Varsoe makes your life easy by giving you back your time so you can focus on doing the work
              </Typography.Paragraph>
            </Box>
          </Flex>
          <Flex mb="40px">
            <FlexWithBorder
              width="32px"
              height="32px"
              backgroundColor={theme.colors.blue[200]}
              borderRadius="50%"
              justifyContent="center"
              alignItems="center"
            >
              <BoxWithBorder width="12px" height="12px" backgroundColor={theme.colors.black[600]} borderRadius="50%" />
            </FlexWithBorder>
            <Box ml="16px" flex="1">
              <Typography.Heading type="h6">Customer management</Typography.Heading>
              <Typography.Paragraph color={theme.colors.black[400]}>
                Varsoe makes your life easy by giving you back your time so you can focus on doing the work
              </Typography.Paragraph>
            </Box>
          </Flex>
          <Flex>
            <FlexWithBorder
              width="32px"
              height="32px"
              backgroundColor={theme.colors.blue[200]}
              borderRadius="50%"
              justifyContent="center"
              alignItems="center"
            >
              <BoxWithBorder width="12px" height="12px" backgroundColor={theme.colors.black[600]} borderRadius="50%" />
            </FlexWithBorder>
            <Box ml="16px" flex="1">
              <Typography.Heading type="h6">Track expenses</Typography.Heading>
              <Typography.Paragraph color={theme.colors.black[400]}>
                Varsoe makes your life easy by giving you back your time so you can focus on doing the work
              </Typography.Paragraph>
            </Box>
          </Flex>
        </Box>
      </Bg>
    </Grid>
  );
};

export default Login;
