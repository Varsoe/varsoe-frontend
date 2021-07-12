import * as React from 'react';
import { Box, Flex } from 'rebass';
import Form from '../../../../components/atoms/Form';
import Button from '../../../../components/atoms/Form/Button';
import Typography from '../../../../components/atoms/Typography';
import Modal from '../../../../components/molecules/Modal';
import CloseWhite from '../../../../icons/CloseWhite';
import ProfileImage from '../../../../icons/Profile';
import { theme } from '../../../../theme/theme';
import { BoxWithBorder } from '../../styles';

export interface SendInvoiceModalProps {}

const FollowUpInvoiceModal: React.FC<SendInvoiceModalProps> = () => {
  const [showModal, setShowModal] = React.useState(true);
  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <Flex justifyContent="space-between">
        <Typography.Heading type="h6">Send Invoice</Typography.Heading>
        <Button variant="transparent" onClick={() => setShowModal(false)}>
          <CloseWhite />
        </Button>
      </Flex>
      <Box py="32px">
        <ProfileImage />
        <Typography.Paragraph>Damola Adegoke</Typography.Paragraph>
        <Typography.Paragraph color={theme.colors.blue[600]} fontSize={1}>
          adegokedamolat@gmail.com
        </Typography.Paragraph>
        <Form.FormGroup mt="40px">
          <Form.Label>Email content</Form.Label>
          <BoxWithBorder border="1px solid #2860E1" borderRadius="8px" py="13px" px="16px">
            <Typography.Paragraph>Hello Damola,</Typography.Paragraph>
            <Typography.Paragraph mt="30px">
              Trust you’re doing well. Please find my invoice attached to the mail. Alongside is the payment link to
              make payments to me.
            </Typography.Paragraph>
            <Typography.Paragraph mt="30px">Looking forward to your response.</Typography.Paragraph>
            <Typography.Paragraph mt="30px">Payment link: pay.varsoe.com/damola_INV002311</Typography.Paragraph>
            <Typography.Paragraph mt="30px">Regards,</Typography.Paragraph>
            <Typography.Paragraph mt="1px">Adebisi Ahmed</Typography.Paragraph>
          </BoxWithBorder>
        </Form.FormGroup>
      </Box>
      <Flex justifyContent="flex-end" alignItems="center" mt="20px" mb="20px">
        <Box>
          <Button variant="transparent" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" ml="15px">
            Send Invoice
          </Button>
        </Box>
      </Flex>
    </Modal>
  );
};

export default FollowUpInvoiceModal;
