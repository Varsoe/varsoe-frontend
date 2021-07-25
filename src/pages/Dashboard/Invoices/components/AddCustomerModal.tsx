import React, { useState } from 'react';
import { Box, Flex } from 'rebass';
import styled from 'styled-components';
import Form from '../../../../components/atoms/Form';
import Button from '../../../../components/atoms/Form/Button';
import Typography from '../../../../components/atoms/Typography';
import Modal from '../../../../components/molecules/Modal';
import CloseWhite from '../../../../icons/CloseWhite';
import { theme } from '../../../../theme/theme';

export interface AddCustomerModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const UploadImage = styled(Box)`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.blue[100]};
  color: ${(props) => props.theme.colors.blue[600]};
  border: 1px solid #b7caf5;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AddCustomerModal: React.FC<AddCustomerModalProps> = ({ showModal, setShowModal }) => (
  <Modal showModal={showModal} setShowModal={setShowModal}>
    <Flex justifyContent="space-between">
      <Typography.Heading type="h6">Add new customer</Typography.Heading>
      <Button variant="transparent" onClick={() => setShowModal(false)}>
        <CloseWhite />
      </Button>
    </Flex>
    <Box>
      <UploadImage>
        <Typography.Paragraph fontSize={1} color={theme.colors.blue[600]}>
          Upload
        </Typography.Paragraph>
      </UploadImage>
      <Box margin="40px 0">
        <Form.FormGroup mb="32px">
          <Form.Label>Customer name</Form.Label>
          <Form.Input />
        </Form.FormGroup>
        <Form.FormGroup mb="32px">
          <Form.Label>Customer email</Form.Label>
          <Form.Input />
        </Form.FormGroup>
        <Form.FormGroup mb="32px">
          <Form.Label>Phone number (optional)</Form.Label>
          <Form.Input />
        </Form.FormGroup>
        <Form.FormGroup mb="32px">
          <Form.Label>Company name (optional)</Form.Label>
          <Form.Input />
        </Form.FormGroup>
        <Form.FormGroup mb="32px">
          <Form.Label>Address (optional)</Form.Label>
          <Form.Input />
        </Form.FormGroup>
      </Box>
      <Flex justifyContent="flex-end" alignItems="center" mt="40px" mb="40px">
        <Box>
          <Button variant="transparent">Cancel</Button>
          <Button variant="primary" ml="15px">
            Add customer
          </Button>
        </Box>
      </Flex>
    </Box>
  </Modal>
);

export default AddCustomerModal;
