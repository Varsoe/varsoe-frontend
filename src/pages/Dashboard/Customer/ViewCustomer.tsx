import { useHistory } from 'react-router';
import { Box, Flex } from 'rebass';
import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/atoms/Form/Button';
import Typography from '../../../components/atoms/Typography';
import BackIcon from '../../../icons/BackIcon';
import { theme } from '../../../theme/theme';
import InvoiceTable, { invoiceData } from '../Invoices/components/InvoiceTable';
import Avatar from '../../../icons/Avatar';
import { BoxWithBorder, FlexWithBorder } from '../styles';
import AddCustomerModal from '../Invoices/components/AddCustomerModal';
import TransactionsTable, { transactionData } from './components/TransactionsTable';
import { DesktopContainer, MobileContainer } from '../Invoices/ViewInvoice';
import { Badge } from '../../../components/atoms/Badge';
import { statusMapping } from '../../../constants';

export interface ViewCustomerProps {}

const PageContainer = styled(Box)`
  display: grid;
  grid-template-columns: 300px 1fr;
  margin-top: 40px;
  grid-gap: 30px 70px;
  @media (max-width: 1140px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 930px) {
    display: none;
  }
`;
const TabButton = styled(Button)`
  position: relative;
  color: ${(props) => props.theme.colors.black[200]};
  &.active {
    color: ${(props) => props.theme.colors.blue[600]};
  }
  &.active::before {
    position: absolute;
    width: 6px;
    height: 6px;
    left: calc(50% - 3px);
    bottom: -10px;
    content: '';
    background-color: ${(props) => props.theme.colors.blue[600]};
    border-radius: 50%;
  }
`;
const ViewCustomer: React.FC<ViewCustomerProps> = () => {
  const history = useHistory();
  const [showAddCustomerModal, setShowAddCustomerModal] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('invoices');
  return (
    <>
      <AddCustomerModal showModal={showAddCustomerModal} setShowModal={setShowAddCustomerModal} />
      <Box mt="40px" mb="80px" sx={{ mt: '0px' }}>
        <DesktopContainer>
          <Button
            onClick={() => history.goBack()}
            variant="transparent"
            Icon={<BackIcon style={{ width: '8px', marginTop: '-4px' }} />}
          >
            <Typography.Paragraph color={theme.colors.black[400]} fontSize={1}>
              Back
            </Typography.Paragraph>
          </Button>
        </DesktopContainer>
        <MobileContainer>
          <Box>
            <Flex justifyContent="center" alignItems="center" flexDirection="column">
              <Avatar width="65px" height="65px" />
              <Box ml="8px">
                <Typography.Heading type="h5" textAlign="center">
                  Damola Adegoke
                </Typography.Heading>
                <Typography.Paragraph color={theme.colors.blue[600]} fontSize={1} textAlign="center">
                  adegokedamolat@gmail.com
                </Typography.Paragraph>
              </Box>
              {/* </Box> */}
            </Flex>
            <Flex mt="40px" justifyContent="space-between">
              <Box>
                <Typography.Paragraph textAlign="center" color={theme.colors.black[300]}>
                  Expected
                </Typography.Paragraph>
                <Typography.Heading type="h6" color={theme.colors.black[600]}>
                  $9,054.56
                </Typography.Heading>
              </Box>

              <Box>
                <Typography.Paragraph color={theme.colors.black[300]} textAlign="center">
                  Paid
                </Typography.Paragraph>
                <Typography.Heading type="h6" color={theme.colors.black[600]}>
                  $9,054.56
                </Typography.Heading>
              </Box>
              <Box>
                <Typography.Paragraph textAlign="center" color={theme.colors.black[300]}>
                  Pending
                </Typography.Paragraph>
                <Typography.Heading type="h6" color={theme.colors.black[600]}>
                  $9,054.56
                </Typography.Heading>
              </Box>
            </Flex>
            <Box mt="66px">
              <Flex mb="42px" justifyContent="space-between">
                <TabButton
                  variant="transparent"
                  mr="64px"
                  onClick={() => setActiveTab('information')}
                  className={activeTab === 'information' ? 'active' : ''}
                >
                  Information
                </TabButton>
                <TabButton
                  variant="transparent"
                  mr="64px"
                  onClick={() => setActiveTab('invoices')}
                  className={activeTab === 'invoices' ? 'active' : ''}
                >
                  Invoices
                </TabButton>
                <TabButton
                  variant="transparent"
                  onClick={() => setActiveTab('transactions')}
                  className={activeTab === 'transactions' ? 'active' : ''}
                >
                  Transactions
                </TabButton>
              </Flex>
              {activeTab === 'information' && (
                <Box marginTop="56px">
                  <Box mb="24px">
                    <Typography.Paragraph textAlign="center" color={theme.colors.black[300]} mb="8px" fontSize={1}>
                      Phone number
                    </Typography.Paragraph>
                    <Typography.Paragraph textAlign="center" fontWeight="bold" color={theme.colors.black[600]}>
                      +2349021366728
                    </Typography.Paragraph>
                  </Box>
                  <Box>
                    <Typography.Paragraph textAlign="center" color={theme.colors.black[300]} mb="8px" fontSize={1}>
                      Address
                    </Typography.Paragraph>
                    <Typography.Paragraph textAlign="center" fontWeight="bold" color={theme.colors.black[600]}>
                      +No 4 and 6 Radiators Spring, Lightning Estate, Lagos, Nigeria
                    </Typography.Paragraph>
                  </Box>
                </Box>
              )}
              {activeTab === 'invoices' && (
                <Box mt="26px">
                  {invoiceData.map(({ id, status, date, name, amount }) => (
                    <BoxWithBorder
                      py="12px"
                      px="20px"
                      border="1px solid #F5F5F7"
                      borderRadius="8px"
                      key={id}
                      onClick={() => history.push('/invoices/view')}
                      marginBottom="16px"
                    >
                      <Flex justifyContent="space-between" alignItems="center">
                        <Typography.Paragraph>{name}</Typography.Paragraph>
                        <Typography.Paragraph color={theme.colors.green[600]}>{amount}</Typography.Paragraph>
                      </Flex>
                      <Flex justifyContent="space-between" alignItems="center">
                        <Typography.Paragraph color={theme.colors.black[400]}>{date}</Typography.Paragraph>
                        <Typography.Paragraph color={theme.colors.statusGreen}>
                          <Badge type={statusMapping[status].color}>{statusMapping[status].text}</Badge>
                        </Typography.Paragraph>
                      </Flex>
                    </BoxWithBorder>
                  ))}
                </Box>
              )}
              {activeTab === 'transactions' && (
                <Box mt="26px">
                  {transactionData.map(({ id, status, date, payment, amount }) => (
                    <BoxWithBorder
                      py="12px"
                      px="20px"
                      border="1px solid #F5F5F7"
                      borderRadius="8px"
                      key={id}
                      onClick={() => history.push('/invoices/view')}
                      marginBottom="16px"
                    >
                      <Flex justifyContent="space-between" alignItems="center">
                        <Typography.Paragraph color={theme.colors.green[600]}>{amount}</Typography.Paragraph>
                        <Typography.Paragraph color={theme.colors.black[400]} textTransform="capitalize">
                          {payment}
                        </Typography.Paragraph>
                      </Flex>
                      <Flex justifyContent="space-between" alignItems="center">
                        <Typography.Paragraph color={theme.colors.black[400]} textTransform="capitalize">
                          {date}
                        </Typography.Paragraph>
                        <Typography.Paragraph color={theme.colors.statusGreen}>
                          <Badge type={statusMapping[status].color}>{statusMapping[status].text}</Badge>
                        </Typography.Paragraph>
                      </Flex>
                    </BoxWithBorder>
                  ))}
                </Box>
              )}
            </Box>
          </Box>
        </MobileContainer>
        <PageContainer>
          <Box>
            <Flex>
              <Avatar width="65px" height="65px" />
              <Box ml="8px">
                <Typography.Heading type="h5">Damola Adegoke</Typography.Heading>
                <Typography.Paragraph color={theme.colors.blue[600]}>adegokedamolat@gmail.com</Typography.Paragraph>
              </Box>
            </Flex>
            <Flex mt="40px" justifyContent="space-between">
              <Box>
                <Typography.Paragraph color={theme.colors.black[300]}>Expected</Typography.Paragraph>
                <Typography.Paragraph color={theme.colors.black[600]}>$9,054.56</Typography.Paragraph>
              </Box>

              <Box>
                <Typography.Paragraph color={theme.colors.black[300]}>Paid</Typography.Paragraph>
                <Typography.Paragraph color={theme.colors.black[600]}>$9,054.56</Typography.Paragraph>
              </Box>
              <Box>
                <Typography.Paragraph color={theme.colors.black[300]}>Pending</Typography.Paragraph>
                <Typography.Paragraph color={theme.colors.black[600]}>$9,054.56</Typography.Paragraph>
              </Box>
            </Flex>
            <FlexWithBorder mt="48px" borderBottom="1px solid #E6E7EA" pb="16px" justifyContent="space-between">
              <Typography.Paragraph>Information</Typography.Paragraph>
              <Button
                variant="transparent"
                color={theme.colors.blue[600]}
                onClick={() => setShowAddCustomerModal(true)}
              >
                Edit
              </Button>
            </FlexWithBorder>
            <Box py="24px">
              <Typography.Paragraph color={theme.colors.black[300]}>Phone number</Typography.Paragraph>
              <Typography.Paragraph color={theme.colors.black[600]}>+2349021366728</Typography.Paragraph>
            </Box>
            <Box py="24px">
              <Typography.Paragraph color={theme.colors.black[300]}>Address</Typography.Paragraph>
              <Typography.Paragraph color={theme.colors.black[600]}>
                No 4 and 6 Radiators Spring, Lightning Estate, Lagos, Nigeria{' '}
              </Typography.Paragraph>
            </Box>
          </Box>

          <Box>
            <Flex mb="42px">
              <TabButton
                variant="transparent"
                mr="64px"
                onClick={() => setActiveTab('invoices')}
                className={activeTab === 'invoices' ? 'active' : ''}
              >
                Invoices
              </TabButton>
              <TabButton
                variant="transparent"
                onClick={() => setActiveTab('transactions')}
                className={activeTab === 'transactions' ? 'active' : ''}
              >
                Transactions
              </TabButton>
            </Flex>
            {activeTab === 'invoices' ? <InvoiceTable isCustomerPage data={[]} /> : <TransactionsTable />}
          </Box>
        </PageContainer>
      </Box>
    </>
  );
};

export default ViewCustomer;
