import { Box, Flex } from 'rebass';
import * as React from 'react';
import styled, { useTheme } from 'styled-components';
import { useHistory } from 'react-router';
import { useState } from 'react';
import Typography from '../../../components/atoms/Typography';
import Button from '../../../components/atoms/Form/Button';
import BackIcon from '../../../icons/BackIcon';
import SaveIcon from '../../../icons/SaveIcon';
import SendIcon from '../../../icons/SendIcon';
import Form from '../../../components/atoms/Form';
import { PageContainer, PaymentLink } from './styled';
import CopyIcon from '../../../icons/CopyIcon';
import InvoiceForm from './components/InvoiceForm';
import Switch from '../../../components/atoms/Form/Switch';
import AddCustomerModal from './components/AddCustomerModal';
import SendInvoiceModal from './components/SendInvoiceModal';
import FollowUpInvoiceModal from './components/FollowUpInvoiceModal';
import DeleteInvoice from './components/DeleteInvoice';
import { DesktopContainer, MobileContainer } from './ViewInvoice';
import { UserAvatar } from '../../../layout/Nav';
import { InputGroup } from '../../Auth/SignUp';
import { BoxWithBorder, FlexWithBorder } from '../styles';
import CaretDownBorder from '../../../icons/CaretDownBorder';
import { dropDownVariants, ItemsContainer } from './components/InvoiceDetails';

export interface CreateInvoiceProps {}

const CreateInvoice: React.FC<CreateInvoiceProps> = () => {
  const theme = useTheme();
  const history = useHistory();
  const [on, setOn] = useState(false);
  const [showCustomerModal, setShowCustomerModal] = React.useState();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setOn(checked);
  };
  const options = [
    {
      id: 1,
      label: 'Eden Mobile app Redesign',
      value: 2,
    },
    {
      id: 2,
      label: 'Greatest of all time',
      value: 6,
    },
    {
      id: 3,
      label: 'Varsoe Website',
      value: 3,
    },
    {
      id: 4,
      label: 'iPad Pro Sale',
      value: 4,
    },
  ];

  const options2 = [
    {
      id: 1,
      label: 'Apple',
      value: 2,
    },
    {
      id: 2,
      label: 'Microsoft',
      value: 6,
    },
    {
      id: 3,
      label: 'Bloomberg',
      value: 3,
    },
    {
      id: 4,
      label: 'Amazon',
      value: 4,
    },
  ];
  const [date, setDate] = React.useState('');
  const [showCustomerDropdown, setShowCustomerDropdown] = React.useState(false);
  const [showProjectDropDown, setShowProjectDropDown] = React.useState(false);
  const [showInvoiceDropDown, setShowInvoiceDropDown] = React.useState(false);
  const border = '1px solid #E6E7EA';
  return (
    <>
      {/* <AddCustomerModal /> */}
      {/* <SendInvoiceModal /> */}
      {/* <FollowUpInvoiceModal /> */}
      {/* <DeleteInvoice /> */}
      <Box mt="40px" mb="80px">
        <Flex justifyContent="space-between">
          <Button onClick={() => history.goBack()} variant="transparent" Icon={<BackIcon style={{ width: '8px' }} />}>
            <Typography.Paragraph color={theme.colors.black[400]} fontSize={1}>
              Back
            </Typography.Paragraph>
          </Button>
          <MobileContainer>
            <Button variant="transparent">Save draft</Button>
          </MobileContainer>
        </Flex>
        <DesktopContainer>
          <Flex justifyContent="space-between" alignItems="center" mt="36px" mb="40px">
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
        </DesktopContainer>
        <MobileContainer mt="16px">
          <Typography.Heading type="h6">Create Invoice</Typography.Heading>
        </MobileContainer>

        <UserAvatar
          width="80px"
          height="80px"
          my="32px"
          frameBorder="1px solid #FDF2DC"
          backgroundColor={theme.colors.yellow[100]}
        >
          Add logo
        </UserAvatar>

        <PageContainer>
          <Box marginBottom="100px">
            <Typography.Heading type="h6">Customer & Project</Typography.Heading>
            <Box margin="24px 0">
              <Form.FormGroup mb="40px">
                <Form.Label>Customer name</Form.Label>
                <Form.SelectAdd options={options2} addItemText="Add new customer" />
              </Form.FormGroup>
              <Form.FormGroup mb="40px">
                <Form.Label>Project name</Form.Label>
                <Form.SelectAdd options={options} addItemText="Add new project" />
              </Form.FormGroup>
              <Flex mb="8px" justifyContent="space-between" alignItems="center">
                <Form.Label>Payment Link</Form.Label>
                <Switch checked={on} onChange={handleChange} />
              </Flex>
              {on && (
                <PaymentLink justifyContent="space-between">
                  <Typography.Paragraph>pay.varsoe.com/invoice2311_damola...</Typography.Paragraph>
                  <Flex>
                    <Button variant="transparent">
                      <CopyIcon />
                    </Button>
                  </Flex>
                </PaymentLink>
              )}
            </Box>
          </Box>
          <Box>
            <InvoiceForm />
            <Flex justifyContent="flex-end" alignItems="center" mt="40px" mb="40px">
              <Box>
                <Button variant="outline" Icon={<SaveIcon />}>
                  Save Draft
                </Button>
                <Button variant="primary" ml="15px" Icon={<SendIcon />}>
                  Send
                </Button>
              </Box>
            </Flex>
          </Box>
        </PageContainer>
        <MobileContainer mt="24px">
          <Box>
            <Form.FormGroup mb="32px">
              <Form.Input placeholder="Invoice title" />
            </Form.FormGroup>
            <InputGroup mb="32px">
              <Form.Date date={date} setDate={setDate} placeholder="Invoice Date" />
              <Form.Date date={date} setDate={setDate} placeholder="Due Date" />
            </InputGroup>
            <BoxWithBorder borderBottom={border}>
              <FlexWithBorder
                margin="24px 0 0 0"
                paddingBottom="16px"
                justifyContent="space-between"
                alignItems="center"
                style={{ cursor: 'pointer' }}
                onClick={() => setShowCustomerDropdown((status) => !status)}
              >
                <Typography.Paragraph color={theme.colors.black[400]}>Select customer</Typography.Paragraph>
                <CaretDownBorder />
              </FlexWithBorder>
              <ItemsContainer
                initial={showCustomerDropdown ? 'open' : 'collapsed'}
                animate={showCustomerDropdown ? 'open' : 'collapsed'}
                inherit={false}
                variants={dropDownVariants}
                transition={{
                  type: 'tween',
                  duration: 0.2,
                }}
              >
                <Form.FormGroup mb="40px">
                  <Form.SelectAdd options={options2} addItemText="Add new customer" />
                </Form.FormGroup>
              </ItemsContainer>
            </BoxWithBorder>

            <BoxWithBorder borderBottom={border}>
              <FlexWithBorder
                margin="24px 0 0 0"
                paddingBottom="16px"
                justifyContent="space-between"
                alignItems="center"
                style={{ cursor: 'pointer' }}
                onClick={() => setShowProjectDropDown((status) => !status)}
              >
                <Typography.Paragraph color={theme.colors.black[400]}>Select Project</Typography.Paragraph>
                <CaretDownBorder />
              </FlexWithBorder>
              <ItemsContainer
                initial={showProjectDropDown ? 'open' : 'collapsed'}
                animate={showProjectDropDown ? 'open' : 'collapsed'}
                inherit={false}
                variants={dropDownVariants}
                transition={{
                  type: 'tween',
                  duration: 0.2,
                }}
              >
                <Form.FormGroup mb="40px">
                  <Form.SelectAdd options={options} addItemText="Add new project" />
                </Form.FormGroup>
              </ItemsContainer>
            </BoxWithBorder>

            <BoxWithBorder borderBottom={border}>
              <FlexWithBorder
                margin="24px 0 0 0"
                paddingBottom="16px"
                justifyContent="space-between"
                alignItems="center"
                style={{ cursor: 'pointer' }}
                onClick={() => setShowInvoiceDropDown((status) => !status)}
              >
                <Typography.Paragraph color={theme.colors.black[400]}>Invoice Details</Typography.Paragraph>
                <CaretDownBorder />
              </FlexWithBorder>
              <ItemsContainer
                initial={showInvoiceDropDown ? 'open' : 'collapsed'}
                animate={showInvoiceDropDown ? 'open' : 'collapsed'}
                inherit={false}
                variants={dropDownVariants}
                transition={{
                  type: 'tween',
                  duration: 0.2,
                }}
              >
                <Form.FormGroup mb="40px">
                  <Box>Test</Box>
                </Form.FormGroup>
              </ItemsContainer>
            </BoxWithBorder>
            <Flex justifyContent="center" mt="30px">
              <Button variant="primary" ml="15px" Icon={<SendIcon />}>
                Send
              </Button>
            </Flex>
          </Box>
        </MobileContainer>
      </Box>
    </>
  );
};

export default CreateInvoice;
