import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { useHistory } from 'react-router';

import { Box, Flex } from 'rebass';
import styled, { ThemeContext } from 'styled-components';
import { Badge } from '../../../../components/atoms/Badge';
import Button from '../../../../components/atoms/Form/Button';
import Typography from '../../../../components/atoms/Typography';
import useOnClickOutside from '../../../../hooks/ClickOutsideClose';
import Avatar from '../../../../icons/Avatar';
import CaretDownBorder from '../../../../icons/CaretDownBorder';
import CloseIcon from '../../../../icons/CloseIcon';
import CopyIcon from '../../../../icons/CopyIcon';
import Folder from '../../../../icons/Folder';
import LinkIcon from '../../../../icons/LinkIcon';
import { BoxWithBorder, FlexWithBorder } from '../../styles';
import { PaymentLink } from '../styled';

interface InvoiceDetailsContainerProps {
  show?: boolean;
}

export interface InvoiceDetailsProps extends InvoiceDetailsContainerProps {
  setShowInvoice: React.Dispatch<React.SetStateAction<boolean>>;
}
const InvoiceDetailsContainer = styled(motion.div)<InvoiceDetailsContainerProps>`
  position: fixed;
  top: 10px;
  right: 10px;
  max-width: 440px;
  min-height: calc(100% - 20px);
  bottom: 10px;
  width: 30%;
  min-width: 250px;
  background-color: ${(props) => props.theme.colors.white};
  opacity: 1;
  z-index: 5;
  border-radius: 12px;
`;

interface InvoiceDetailsBgProps {}
const InvoiceDetailsBg = styled(Box)<InvoiceDetailsBgProps>`
  background-color: rgba(8, 19, 45, 1);
  opacity: 0.16;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  right: 0;
  z-index: 4;
  width: 100%;
  height: 100%;
  transition: all ease 250ms;
`;

const UserData = styled(Flex)`
  border-radius: 8px;
  border: 1px solid #e6e7ea;
  padding: 20px 21px;
  align-items: center;
  margin: 24px 0;
`;

const ButtonWrapper = styled(Flex)`
  background-color: ${(props) => props.theme.colors.white};
  margin-top: 32px;
  z-index: 3;
  position: relative;
`;

const ItemsContainer = styled(motion(Box))``;

const border = '1px solid #F5F5F7';
const variants = {
  open: {
    opacity: 1,
    height: 'auto',
    x: 0,
  },
  collapsed: { opacity: 0, height: 0 },
};
const InvoiceDetails: React.FC<InvoiceDetailsProps> = ({ show, setShowInvoice }) => {
  const items = [
    {
      name: 'Email template',
      amount: '$4,000.00',
    },
    {
      name: 'Website',
      amount: '$4,000.00',
    },
    {
      name: 'Mobile app design',
      amount: '$4,000.00',
    },
  ];
  const history = useHistory();
  const theme = React.useContext(ThemeContext);
  const [itemOpened, setItemOpened] = React.useState(false);
  const previewRef = useRef(null);
  const handleClickOutside = () => {
    setShowInvoice(false);
  };
  useOnClickOutside(previewRef, handleClickOutside);
  return (
    <>
      {show && <InvoiceDetailsBg />}
      <InvoiceDetailsContainer
        show={show}
        animate={{ x: show ? '0' : '100%', opacity: show ? 1 : 0 }}
        initial={{ x: '100%' }}
        exit={{ x: '0', opacity: 0 }}
        ref={previewRef}
        transition={{
          type: 'tween',
          duration: 0.2,
        }}
      >
        <FlexWithBorder
          alignItems="center"
          justifyContent="space-between"
          padding="20px 16px"
          width="100%"
          borderBottom={border}
        >
          <Typography.Paragraph color={theme.colors.black[400]}>Invoice details</Typography.Paragraph>
          <Button variant="transparent" onClick={() => setShowInvoice(false)}>
            <CloseIcon />
          </Button>
        </FlexWithBorder>
        <Box padding="20px 16px">
          <Flex justifyContent="space-between" alignItems="center">
            <Typography.Heading type="h5">$2,000.00</Typography.Heading>
            <Badge type="yellow">Pending</Badge>
          </Flex>
          <UserData>
            <Box marginRight="5px">
              <Avatar />
            </Box>
            <Typography.Paragraph>Adegoke Damola</Typography.Paragraph>
          </UserData>
          <BoxWithBorder borderBottom={border}>
            <Typography.Paragraph color={theme.colors.black[400]}>Project</Typography.Paragraph>
            <Flex justifyContent="space-between" marginTop="8px" paddingBottom="16px">
              <Typography.Paragraph>Eden Design System</Typography.Paragraph>
              <Box>
                <Folder />
              </Box>
            </Flex>
          </BoxWithBorder>
          <Box margin="24px 0">
            <Typography.Paragraph color={theme.colors.black[400]}>Payment Link</Typography.Paragraph>
            <PaymentLink justifyContent="space-between">
              <Typography.Paragraph>pay.varsoe.com/invoice2311_damola...</Typography.Paragraph>
              <Flex>
                <Button variant="transparent">
                  <LinkIcon />
                </Button>
                <Button variant="transparent">
                  <CopyIcon />
                </Button>
              </Flex>
            </PaymentLink>
          </Box>
          <BoxWithBorder margin="24px 0" borderBottom={border} paddingBottom="16px">
            <Typography.Paragraph color={theme.colors.black[400]}>Title</Typography.Paragraph>
            <Typography.Paragraph>Invoice level up</Typography.Paragraph>
          </BoxWithBorder>
          <BoxWithBorder borderBottom={border}>
            <FlexWithBorder
              margin="24px 0 0 0"
              paddingBottom="16px"
              justifyContent="space-between"
              alignItems="center"
              style={{ cursor: 'pointer' }}
              onClick={() => setItemOpened((status) => !status)}
            >
              <Typography.Paragraph color={theme.colors.black[400]}>Items</Typography.Paragraph>
              <CaretDownBorder />
            </FlexWithBorder>
            <ItemsContainer
              initial={itemOpened ? 'open' : 'collapsed'}
              animate={itemOpened ? 'open' : 'collapsed'}
              inherit={false}
              variants={variants}
              transition={{
                type: 'tween',
                duration: 0.35,
              }}
            >
              {items.map(({ name, amount }) => (
                <Flex justifyContent="space-between" padding="16px 0" key={name}>
                  <Typography.Paragraph>{name}</Typography.Paragraph>
                  <Typography.Paragraph>{amount}</Typography.Paragraph>
                </Flex>
              ))}
            </ItemsContainer>
          </BoxWithBorder>
          <ButtonWrapper>
            <Box flex="1" backgroundColor={theme.colors.white}>
              <Button variant="outline" width="100%" onClick={() => history.push('/invoices/view')}>
                View Invoice
              </Button>
            </Box>
            <Box flex="1" ml="20px" backgroundColor={theme.colors.white}>
              <Button variant="primary" width="100%">
                Mark as paid
              </Button>
            </Box>
          </ButtonWrapper>
        </Box>
      </InvoiceDetailsContainer>
    </>
  );
};

export default InvoiceDetails;
