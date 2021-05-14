import React from 'react';
import { Box, Flex } from 'rebass';
import styled, { useTheme } from 'styled-components';
import Form from '../../../../components/atoms/Form';
import Typography from '../../../../components/atoms/Typography';

export interface InvoiceFormProps {}

const CardContainer = styled(Box)`
  background: ${(props) => props.theme.colors.white};
  border: 0.4px solid #e6e7ea;
  box-shadow: -1px -1px 8px rgba(8, 19, 45, 0.02), 1px 1px 8px rgba(8, 19, 45, 0.02);
  border-radius: 8px;
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 400px;
`;
const ProfileIcon = styled(Box)`
  background-color: ${(props) => props.theme.colors.yellow[100]};
  border: 1px solid #fadea7;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const InvoiceForm: React.FC<InvoiceFormProps> = () => {
  const theme = useTheme();
  return (
    <CardContainer>
      <Box>
        <ProfileIcon />
        <Box flex="1" maxWidth="200px">
          <Form.FormGroup mb="24px" mt="24px">
            <Form.Label>Invoice Date</Form.Label>
            <Form.Input placeholder="Select date" />
          </Form.FormGroup>
          <Form.FormGroup mb="48px">
            <Form.Label>Due Date</Form.Label>
            <Form.Input placeholder="Select date" />
          </Form.FormGroup>
          <Form.FormGroup mb="20px">
            <Form.Label>Title</Form.Label>
            <Form.Input placeholder="Enter a title" />
          </Form.FormGroup>
        </Box>
      </Box>

      <Flex justifyContent="flex-end">
        <Box flex="1" maxWidth="200px">
          <Form.FormGroup mb="32px">
            <Form.Label>Invoice No.</Form.Label>
            <Form.Input placeholder="Select or add new customer" />
          </Form.FormGroup>
          <Typography.Paragraph fontSize={1} color={theme.colors.black[400]} mt="10px">
            Invoice For:
          </Typography.Paragraph>
          <Typography.Paragraph fontWeight="bold">Acme LLC</Typography.Paragraph>
          <Typography.Paragraph fontSize={1} color={theme.colors.black[400]} mt="10px">
            No 4 and 6 Radiators Spring, Lightning Estate, <br />
            Lagos, Nigeria
          </Typography.Paragraph>
        </Box>
      </Flex>
    </CardContainer>
  );
};

export default InvoiceForm;
