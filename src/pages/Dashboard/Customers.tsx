import { Box } from 'rebass';
import * as React from 'react';
import Typography from '../../components/atoms/Typography';

export interface CustomersProps {}

const Customers: React.FC<CustomersProps> = () => (
  <Box>
    <Typography.Paragraph>Customers</Typography.Paragraph>
  </Box>
);

export default Customers;
