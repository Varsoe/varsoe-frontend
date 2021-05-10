import { Box } from 'rebass';
import * as React from 'react';
import Typography from '../../components/atoms/Typography';

export interface PaymentProps {}

const Payment: React.FC<PaymentProps> = () => (
  <Box>
    <Typography.Paragraph>Payment</Typography.Paragraph>
  </Box>
);

export default Payment;
