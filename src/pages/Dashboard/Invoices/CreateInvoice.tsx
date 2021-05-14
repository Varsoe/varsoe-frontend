import { Box, Flex } from 'rebass';
import { Switch } from '@rebass/forms';
import * as React from 'react';
import styled, { useTheme } from 'styled-components';
import { useHistory } from 'react-router';
import Typography from '../../../components/atoms/Typography';
import Button from '../../../components/atoms/Form/Button';
import BackIcon from '../../../icons/BackIcon';
import SaveIcon from '../../../icons/SaveIcon';
import SendIcon from '../../../icons/SendIcon';
import Form from '../../../components/atoms/Form';
import { PaymentLink } from './styled';
import CopyIcon from '../../../icons/CopyIcon';
import InvoiceForm from './components/InvoiceForm';

export interface CreateInvoiceProps {}

const PageContainer = styled(Box)`
  display: grid;
  grid-template-columns: 400px 1fr;
  margin-top: 40px;
  grid-gap: 30px 70px;
  align-items: center;
`;

const CreateInvoice: React.FC<CreateInvoiceProps> = () => {
  const theme = useTheme();
  const history = useHistory();
  return (
    <Box mt="40px" mb="80px">
      <Button onClick={() => history.goBack()} variant="transparent" Icon={<BackIcon style={{ width: '8px' }} />}>
        <Typography.Paragraph color={theme.colors.black[400]} fontSize={1}>
          Back
        </Typography.Paragraph>
      </Button>
      <Flex justifyContent="space-between" alignItems="center" mt="36px" mb="60px">
        <Typography.Heading type="h5">Create Invoice</Typography.Heading>
        <Box>
          <Button variant="outline" Icon={<SaveIcon />}>
            Save Draft
          </Button>
          <Button variant="primary" ml="15px" Icon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </Flex>
      <PageContainer>
        <Box>
          <Typography.Heading type="h6">Customer & Project</Typography.Heading>
          <Box margin="24px 0">
            <Form.FormGroup mb="40px">
              <Form.Label>Customer name</Form.Label>
              <Form.Select placeholder="Select or add new customer">
                <option value="12months">Microsoft</option>
                <option value="10months">Lest</option>
                <option value="11months">Varsoe</option>
              </Form.Select>
            </Form.FormGroup>
            <Form.FormGroup mb="40px">
              <Form.Label>Project name</Form.Label>
              <Form.Select placeholder="Select or add new project">
                <option value="12months">Microsoft</option>
                <option value="10months">Lest</option>
                <option value="11months">Varsoe</option>
              </Form.Select>
            </Form.FormGroup>
            <Flex mb="8px" justifyContent="space-between" alignItems="center">
              <Form.Label>PaymentLink</Form.Label>
              <Switch />
            </Flex>
            <PaymentLink justifyContent="space-between">
              <Typography.Paragraph>pay.varsoe.com/invoice2311_damola...</Typography.Paragraph>
              <Flex>
                <CopyIcon />
              </Flex>
            </PaymentLink>
          </Box>
        </Box>
        <InvoiceForm />
      </PageContainer>
    </Box>
  );
};

export default CreateInvoice;
