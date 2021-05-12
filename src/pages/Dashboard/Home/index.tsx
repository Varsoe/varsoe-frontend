import * as React from 'react';
import { Box } from 'rebass';
import Typography from '../../../components/atoms/Typography';

export interface DashboardIndexProps {}

const DashboardIndex: React.FC<DashboardIndexProps> = () => (
  <Box>
    <Typography.Paragraph>Dashboard</Typography.Paragraph>
  </Box>
);

export default DashboardIndex;
