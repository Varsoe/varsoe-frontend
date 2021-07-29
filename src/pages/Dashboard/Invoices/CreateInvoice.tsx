import { Box, Flex } from 'rebass';
import * as React from 'react';
import styled, { useTheme } from 'styled-components';
import { useHistory } from 'react-router';
import { useState } from 'react';
import { stringify, v4 as uuidv4 } from 'uuid';
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
import { dropDownVariants, ItemsContainer } from './components/InvoiceDetails';
import CaretRight from '../../../icons/CaretRight';
import OptionsList from './components/OptionListScreen';
import AddProjectModal from './components/AddProjectModal';
import DeleteIcon from '../../../icons/DeleteIcon';

export interface CreateInvoiceProps {}

const CreateInvoice: React.FC<CreateInvoiceProps> = () => {
  const theme = useTheme();
  const history = useHistory();
  const [on, setOn] = useState(false);
  const [showCustomerModal, setShowCustomerModal] = React.useState(false);
  const [showProjectModal, setShowProjectModal] = React.useState(false);
  const [showCustomerListScreen, setShowCustomerListScreen] = React.useState(false);
  const [showProjectListScreen, setShowProjectListScreen] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setOn(checked);
  };
  const selectCustomer = ({ id, name }: { id: number; name: string }) => {
    console.log(id, name);
  };
  const selectProject = ({ id, name }: { id: number; name: string }) => {
    console.log(id, name);
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

  const customerList = [
    {
      id: 1,
      name: 'Adegoke Damola',
    },
    {
      id: 2,
      name: 'Ahmed Adebisi',
    },
    {
      id: 3,
      name: 'Akinbowale Akin-Taylor',
    },
    {
      id: 4,
      name: 'Comupter Warehouse Group',
    },
  ];
  const projectList = [
    {
      id: 1,
      name: 'Project Mbape',
    },
    {
      id: 2,
      name: 'Project Japa',
    },
    {
      id: 3,
      name: 'Project Grid',
    },
    {
      id: 4,
      name: 'Project Motivation',
    },
  ];
  const [date, setDate] = React.useState('');
  const [showInvoiceDropDown, setShowInvoiceDropDown] = React.useState(false);
  const border = '1px solid #E6E7EA';

  interface ItemProps {
    id: string;
    name: string;
    quantity: number;
    amount: number;
  }
  const DEFAULT_ITEM = { id: uuidv4(), name: 'Icons', quantity: 16, amount: 2020 };

  const [items, setItems] = useState<ItemProps[]>([DEFAULT_ITEM]);
  const addItem = () => {
    const newItem = {
      id: uuidv4(),
      name: `Icons ${items.length}`,
      quantity: 16,
      amount: 2020,
    };
    setItems([...items, newItem]);
  };
  const removeItem = (id: string) => {
    const itemsLeft = items.filter(({ id: itemId }) => itemId !== id);
    setItems(itemsLeft);
  };
  return (
    <>
      <AddCustomerModal showModal={showCustomerModal} setShowModal={setShowCustomerModal} />
      <AddProjectModal showModal={showProjectModal} setShowModal={setShowProjectModal} />
      {/* <SendInvoiceModal /> */}
      {/* <FollowUpInvoiceModal /> */}
      {/* <DeleteInvosice /> */}
      <Box mt="40px" mb="80px">
        <DesktopContainer>
          <Flex justifyContent="space-between">
            <Button onClick={() => history.goBack()} variant="transparent" Icon={<BackIcon style={{ width: '8px' }} />}>
              <Typography.Paragraph color={theme.colors.black[400]} fontSize={1}>
                Back
              </Typography.Paragraph>
            </Button>
          </Flex>
        </DesktopContainer>
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
          {showCustomerListScreen || showProjectListScreen ? (
            <Box>
              {showCustomerListScreen && (
                <OptionsList
                  title="Customer"
                  options={customerList}
                  selectOption={selectCustomer}
                  showModal={(value) => setShowCustomerModal(value)}
                  hideOptionsList={(value) => setShowCustomerListScreen(value)}
                />
              )}

              {showProjectListScreen && (
                <OptionsList
                  title="Project"
                  options={projectList}
                  selectOption={selectProject}
                  showModal={(value) => setShowProjectModal(value)}
                  hideOptionsList={(value) => setShowProjectListScreen(value)}
                />
              )}
            </Box>
          ) : (
            <Box>
              <Flex justifyContent="space-between" alignItems="center">
                <Button
                  onClick={() => history.goBack()}
                  variant="transparent"
                  Icon={<BackIcon style={{ width: '8px' }} />}
                >
                  <Typography.Paragraph color={theme.colors.black[400]} fontSize={1}>
                    Back
                  </Typography.Paragraph>
                </Button>
                <MobileContainer>
                  <Button variant="transparent" fontSize="14px">
                    Save draft
                  </Button>
                </MobileContainer>
              </Flex>

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
                  onClick={() => setShowCustomerListScreen((status) => !status)}
                >
                  <Typography.Paragraph color={theme.colors.black[400]}>Select customer</Typography.Paragraph>
                  <CaretRight />
                </FlexWithBorder>
              </BoxWithBorder>

              <BoxWithBorder borderBottom={border}>
                <FlexWithBorder
                  margin="24px 0 0 0"
                  paddingBottom="16px"
                  justifyContent="space-between"
                  alignItems="center"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setShowProjectListScreen((status) => !status)}
                >
                  <Typography.Paragraph color={theme.colors.black[400]}>Select Project</Typography.Paragraph>
                  <CaretRight />
                </FlexWithBorder>
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
                  <Typography.Paragraph color={theme.colors.blue[400]}>Item</Typography.Paragraph>
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
                  {items.map(({ id, name, quantity, amount }, i) => (
                    <BoxWithBorder
                      py="16px"
                      key={id}
                      borderBottom={border}
                      marginBottom="16px"
                      borderTop={i === 0 ? border : ''}
                    >
                      <Flex justifyContent="space-between">
                        <Typography.Paragraph fontSize={1} color={theme.colors.black[600]} mt="10px">
                          {name}
                        </Typography.Paragraph>
                        <Typography.Paragraph fontSize={1}>{quantity}</Typography.Paragraph>
                      </Flex>
                      <Flex justifyContent="space-between" paddingBottom="16px">
                        <Typography.Paragraph fontSize={1} color={theme.colors.black[600]} mt="10px">
                          ${amount}
                        </Typography.Paragraph>
                        <Flex>
                          <Button
                            variant="transparent"
                            ml="15px"
                            fontSize="14px"
                            color={theme.colors.red[600]}
                            onClick={() => removeItem(id)}
                          >
                            Remove
                          </Button>
                          <Button variant="transparent" ml="15px" fontSize="14px" color={theme.colors.blue[600]}>
                            Edit
                          </Button>
                        </Flex>
                      </Flex>
                    </BoxWithBorder>
                  ))}
                  <Form.FormGroup mb="32px">
                    <Form.Input placeholder="Item name" />
                  </Form.FormGroup>
                  <InputGroup mb="14px" className="mobile">
                    <Form.Input placeholder="Quantity" />
                    <Form.Input placeholder="Amount" />
                  </InputGroup>
                  <FlexWithBorder justifyContent="center" paddingBottom="18px">
                    <Button
                      variant="transparent"
                      ml="15px"
                      Icon={<DeleteIcon />}
                      color={theme.colors.red[600]}
                      fontSize="14px"
                    >
                      Clear Item
                    </Button>
                  </FlexWithBorder>
                </ItemsContainer>
              </BoxWithBorder>

              <Flex justifyContent="center" alignItems="center" mt="40px">
                <Button variant="transparent" onClick={addItem}>
                  + &nbsp; Add Item
                </Button>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center" mt="60px">
                <Typography.Paragraph fontSize={1} color={theme.colors.black[600]} mt="10px">
                  Subtotal
                </Typography.Paragraph>
                <Typography.Paragraph fontWeight="bold">$4,800.00</Typography.Paragraph>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center" mt="16px">
                <Typography.Paragraph fontSize={1} color={theme.colors.black[600]} mt="10px">
                  Total
                </Typography.Paragraph>
                <Typography.Paragraph fontWeight="bold">$4,800.00</Typography.Paragraph>
              </Flex>
              <Flex justifyContent="center" mt="30px">
                <Button variant="primary" ml="15px" Icon={<SendIcon />}>
                  Send
                </Button>
              </Flex>
            </Box>
          )}
        </MobileContainer>
      </Box>
    </>
  );
};

export default CreateInvoice;
