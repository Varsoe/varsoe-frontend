import * as React from 'react';
import { Box, Flex } from 'rebass';
import Button from '../../../../components/atoms/Form/Button';
import Typography from '../../../../components/atoms/Typography';
import Modal from '../../../../components/molecules/Modal';
import CloseWhite from '../../../../icons/CloseWhite';
import TrashIcon from '../../../../icons/Trash';
import { theme } from '../../../../theme/theme';

export interface DeleteInvoiceProps {}

const DeleteInvoice: React.FC<DeleteInvoiceProps> = () => {
  const [showModal, setShowModal] = React.useState(true);
  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <Flex justifyContent="flex-end">
        <Button variant="transparent" onClick={() => setShowModal(false)}>
          <CloseWhite />
        </Button>
      </Flex>
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <TrashIcon />
        <Typography.Heading type="h6" mt="24px" mb="8px">
          Delete Invoice
        </Typography.Heading>
        <Typography.Paragraph textAlign="center">
          Are you sure you want to delete this invoice(#INV 002)? The payment link attached to this invoice will
          automatically become inactive
        </Typography.Paragraph>
      </Flex>
      <Flex justifyContent="flex-end" alignItems="center" mt="40px" mb="20px">
        <Box>
          <Button variant="transparent" onClick={() => setShowModal(false)} color={theme.colors.black[600]}>
            No, don’t delete
          </Button>
          <Button variant="danger" ml="15px">
            Yes Delete
          </Button>
        </Box>
      </Flex>
    </Modal>
  );
};

export default DeleteInvoice;
