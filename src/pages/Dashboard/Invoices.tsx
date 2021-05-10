import { Box } from 'rebass';
import * as React from 'react';
import Typography from '../../components/atoms/Typography';

export interface InvoicesProps {}

const Invoices: React.FC<InvoicesProps> = () => (
  <Box>
    <Typography.Paragraph>Invoices</Typography.Paragraph>
  </Box>
);

export default Invoices;
