import { useHistory } from 'react-router';
import { Box, Flex } from 'rebass';
import React from 'react';
import Form from '../../components/atoms/Form';
import Button, { ButtonLink } from '../../components/atoms/Form/Button';
import Typography from '../../components/atoms/Typography';
import { theme } from '../../theme/theme';
import { Logo } from './SignUp';
import BackIcon from '../../icons/BackIcon';

export interface ForgotPasswordProps {}

const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
  const history = useHistory();
  return (
    <Flex flexDirection="column" maxWidth="1350px" width="100%" px="20px" margin="0 auto" minHeight="100vh">
      <Flex justifyContent="space-between" flex="0.25" mt="40px" alignItems="flex-start">
        <ButtonLink to="https://www.varsoe.com" variant="transparent">
          <Logo src="/logo.png" />
        </ButtonLink>
        <Button variant="transparent" fontSize={theme.fontSizes[2]} onClick={() => history.push('/signup')}>
          Sign Up
        </Button>
      </Flex>
      <Flex flex="0.75" flexDirection="column" justifyContent="center" alignItems="center" width="100%">
        <Flex flex="1" maxWidth="500px" width="100%" alignItems="center" flexDirection="column">
          <Box mt="20px" mb="40px" textAlign="center">
            <Typography.Heading type="h5" textAlign="center" mb="8px">
              Forgot password
            </Typography.Heading>
            <Typography.Paragraph textAlign="center">
              Enter your email address and we’ll send you a reset email.
            </Typography.Paragraph>
          </Box>
          <Box mb="40px" alignSelf="stretch">
            <Form.Input placeholder="Email address" />
          </Box>
          <Button variant="primary" mb="24px">
            Reset Password
          </Button>
          {/* <ButtonLink variant="primary" mb="24px" to="/login">
            &lt; Back to Login
          </ButtonLink> */}
          <Button
            onClick={() => history.goBack()}
            variant="transparent"
            Icon={<BackIcon style={{ width: '8px', marginTop: '-4px' }} />}
          >
            <Typography.Paragraph color={theme.colors.black[400]} fontSize={1}>
              Back
            </Typography.Paragraph>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ForgotPassword;
