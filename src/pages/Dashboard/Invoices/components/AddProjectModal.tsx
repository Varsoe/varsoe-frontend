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

const AddCustomerModal: React.FC<AddCustomerModalProps> = ({ showModal, setShowModal }) => (
  <Modal showModal={showModal} setShowModal={setShowModal}>
    <Flex justifyContent="space-between">
      <Typography.Heading type="h6">Add Project</Typography.Heading>
      <Button variant="transparent" onClick={() => setShowModal(false)}>
        <CloseWhite />
      </Button>
    </Flex>
    <Box>
      <Box margin="40px 0">
        <Form.FormGroup mb="32px">
          <Form.Label>Project name</Form.Label>
          <Form.Input />
        </Form.FormGroup>
        <Form.FormGroup mb="32px">
          <Form.Label>Project Details</Form.Label>
          <Form.TextArea cols={30} rows={5} />
        </Form.FormGroup>
      </Box>
      <Flex justifyContent="flex-end" alignItems="center" mt="40px" mb="40px">
        <Box>
          <Button variant="transparent">Cancel</Button>
          <Button variant="primary" ml="15px">
            Add Project
          </Button>
        </Box>
      </Flex>
    </Box>
  </Modal>
);

export default AddCustomerModal;
