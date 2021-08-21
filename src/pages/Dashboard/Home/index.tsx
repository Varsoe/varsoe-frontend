import * as React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { Box } from 'rebass';
import Typography from '../../../components/atoms/Typography';
import { useAuth, User } from '../../../context/AuthContext';
import { useUserQuery } from '../../Auth/service/apihooks';

export interface DashboardIndexProps {}

const DashboardIndex: React.FC<DashboardIndexProps> = () => {
  const history = useHistory();
  const userState = useUserQuery();
  const { user, setUser } = useAuth();

  if (userState.isError) {
    history.push('/login');
  }

  useEffect(() => {
    if (userState.data) {
      setUser(userState.data as User);
    }
  }, [setUser, userState.data]);

  return (
    <Box>
      <Typography.Paragraph>Dashboard {user.firstName} </Typography.Paragraph>
    </Box>
  );
};

export default DashboardIndex;
