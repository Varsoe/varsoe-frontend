import * as React from 'react';
import { Box } from 'rebass';
import Typography from '../../../components/atoms/Typography';
import { useAuth } from '../../../context/AuthContext';

export interface DashboardIndexProps {}

const DashboardIndex: React.FC<DashboardIndexProps> = () => {
  const { user } = useAuth();

  return (
    <Box>
      <Typography.Paragraph>Dashboard {user?.firstName} </Typography.Paragraph>
    </Box>
  );
};

export default DashboardIndex;
