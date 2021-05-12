import * as React from 'react';
import { Box, Flex } from 'rebass';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import styled, { ThemeContext } from 'styled-components';
import { Badge } from '../../../components/atoms/Badge';
import Button, { ButtonLink } from '../../../components/atoms/Form/Button';
import Select from '../../../components/atoms/Form/Select';
import Typography from '../../../components/atoms/Typography';
import DropDown from '../../../components/molecules/DropDown';
import Table from '../../../components/molecules/Table';
import { chartData } from '../../../data';
import Filter from '../../../icons/Filter';
import InvoiceIcon from '../../../icons/InvoiceIcon';
import InvoiceDetails from './components/InvoiceDetails';

export interface DashboardIndexProps {}
interface DashboardCardProps {}
const DashboardCard = styled.div<DashboardCardProps>`
  background: #ffffff;
  border: 0.4px solid #e6e7ea;
  box-shadow: -1px -1px 8px rgba(8, 19, 45, 0.02), 1px 1px 8px rgba(8, 19, 45, 0.02);
  border-radius: 8px;
  padding: 48px 48px 24px 48px;
`;

const Chart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <AreaChart data={chartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1" rotate="180deg">
          <stop offset="0%" stopColor="rgba(5, 85, 255)" stopOpacity={0.096} />
          <stop offset="78.34%" stopColor="rgba(5, 85, 255)" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" axisLine={false} tickLine={false} padding={{ left: 10 }} tick={{ color: '#848996' }} />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#0555FF" fillOpacity={1} fill="url(#colorUv)" />
    </AreaChart>
  </ResponsiveContainer>
);
const DashboardIndex: React.FC<DashboardIndexProps> = () => {
  const theme = React.useContext(ThemeContext);
  const [showInvoice, setShowInvoice] = React.useState(false);
  return (
    <Box pt="40px" pb="100px">
      <InvoiceDetails show={showInvoice} setShowInvoice={setShowInvoice} />
      <Flex alignItems="center" justifyContent="space-between">
        <Typography.Heading type="h5">Welcome Damola,</Typography.Heading>
        <Button variant="primary" Icon={<InvoiceIcon />}>
          Create Invoice
        </Button>
      </Flex>
      <Box mt="46px">
        <DashboardCard>
          <Flex flexDirection="column" justifyContent="space-between" flex="1">
            <Flex height="100px" justifyContent="space-between">
              <Box>
                <Typography.Paragraph fontSize={1}>Amount Dues</Typography.Paragraph>
                <Flex alignItems="center">
                  <Typography.Heading type="h5" mr="5px">
                    $45,000
                  </Typography.Heading>
                  <Typography.Paragraph fontSize={1} color={theme.colors.statusGreen}>
                    +32%
                  </Typography.Paragraph>
                </Flex>
              </Box>
              <Box>
                <Typography.Paragraph fontSize={1}>Amount Dues</Typography.Paragraph>
                <Flex alignItems="center">
                  <Typography.Heading type="h5" mr="5px">
                    $45,000
                  </Typography.Heading>
                  <Typography.Paragraph fontSize={1} color={theme.colors.statusRed}>
                    -25%
                  </Typography.Paragraph>
                </Flex>
              </Box>
              <Box>
                <Typography.Paragraph fontSize={1}>Invoices Due</Typography.Paragraph>
                <Flex alignItems="center">
                  <Typography.Heading type="h5" mr="5px">
                    15
                  </Typography.Heading>
                  <Typography.Paragraph fontSize={1} color={theme.colors.statusGreen}>
                    +32%
                  </Typography.Paragraph>
                </Flex>
              </Box>
              <Box>
                <Typography.Paragraph fontSize={1}>Amount Dues</Typography.Paragraph>
                <Flex alignItems="center">
                  <Typography.Heading type="h5" mr="5px">
                    15
                  </Typography.Heading>
                  <Typography.Paragraph fontSize={1} color={theme.colors.statusGreen}>
                    +32%
                  </Typography.Paragraph>
                </Flex>
              </Box>
              <Box>
                <Select>
                  <option value="12months">12 Months</option>
                  <option value="10months">10 Months</option>
                  <option value="11months">11 Months</option>
                </Select>
              </Box>
            </Flex>
            <Chart />
          </Flex>
        </DashboardCard>
      </Box>
      <Box mt="64px">
        <Flex alignItems="center">
          <Typography.Heading type="h5" mr="15px">
            Invoice
          </Typography.Heading>
          <Button variant="transparent" Icon={<Filter />}>
            Filter
          </Button>
        </Flex>
        <Table.Table>
          <Table.Tr>
            <Table.Th>Status</Table.Th>
            <Table.Th>Date</Table.Th>
            <Table.Th>Client</Table.Th>
            <Table.Th>Project</Table.Th>
            <Table.Th>Amount</Table.Th>
            <Table.Th>Quick actions</Table.Th>
          </Table.Tr>
          <Table.TBody>
            <Table.Tr>
              <Table.Td>
                <Badge type="blue">Sent</Badge>
              </Table.Td>
              <Table.Td>12 Mar 2021</Table.Td>
              <Table.Td>Adegoke Damola</Table.Td>
              <Table.Td>Varsoe Mobile App</Table.Td>
              <Table.Td>
                <Typography.Paragraph color={theme.colors.green[600]}>$34,0000</Typography.Paragraph>
              </Table.Td>
              <Table.Td>
                <Flex justifyContent="space-between" alignItems="center">
                  <Button variant="transparent" onClick={() => setShowInvoice(true)}>
                    View
                  </Button>
                  <Box>
                    <DropDown>
                      <Box>
                        <Box py="12px" px="16px">
                          <ButtonLink variant="transparent" to="/invoices/view" color={theme.colors.black[400]}>
                            View
                          </ButtonLink>
                        </Box>
                        <Box py="12px" px="16px">
                          <ButtonLink variant="transparent" to="/" color={theme.colors.black[400]}>
                            Edit
                          </ButtonLink>
                        </Box>
                        <Box py="12px" px="16px">
                          <ButtonLink variant="transparent" to="/" color={theme.colors.black[400]}>
                            Create payment link
                          </ButtonLink>
                        </Box>
                        <Box py="12px" px="16px">
                          <ButtonLink variant="transparent" to="/" color={theme.colors.black[400]}>
                            Duplicate
                          </ButtonLink>
                        </Box>
                      </Box>
                    </DropDown>
                  </Box>
                </Flex>
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>
                <Badge type="red">Overdue</Badge>
              </Table.Td>
              <Table.Td>12 Mar 2021</Table.Td>
              <Table.Td>Adegoke Damola</Table.Td>
              <Table.Td>Varsoe Mobile App</Table.Td>
              <Table.Td>
                <Typography.Paragraph color={theme.colors.green[600]}>$34,0000</Typography.Paragraph>
              </Table.Td>
              <Table.Td>
                <Flex justifyContent="space-between" alignItems="center">
                  <Button variant="transparent" onClick={() => setShowInvoice(true)}>
                    View
                  </Button>
                  <Box>
                    <DropDown>
                      <Box>
                        <Box py="12px" px="16px">
                          <ButtonLink variant="transparent" to="/invoices/view" color={theme.colors.black[400]}>
                            View
                          </ButtonLink>
                        </Box>
                        <Box py="12px" px="16px">
                          <ButtonLink variant="transparent" to="/" color={theme.colors.black[400]}>
                            Edit
                          </ButtonLink>
                        </Box>
                        <Box py="12px" px="16px">
                          <ButtonLink variant="transparent" to="/" color={theme.colors.black[400]}>
                            Create payment link
                          </ButtonLink>
                        </Box>
                        <Box py="12px" px="16px">
                          <ButtonLink variant="transparent" to="/" color={theme.colors.black[400]}>
                            Duplicate
                          </ButtonLink>
                        </Box>
                      </Box>
                    </DropDown>
                  </Box>
                </Flex>
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>
                <Badge type="yellow">Pending</Badge>
              </Table.Td>
              <Table.Td>12 Mar 2021</Table.Td>
              <Table.Td>Adegoke Damola</Table.Td>
              <Table.Td>Varsoe Mobile App</Table.Td>
              <Table.Td>
                <Typography.Paragraph color={theme.colors.green[600]}>$34,0000</Typography.Paragraph>
              </Table.Td>
              <Table.Td>
                <Flex justifyContent="space-between" alignItems="center">
                  <Button variant="transparent" onClick={() => setShowInvoice(true)}>
                    View
                  </Button>
                  <Box>
                    <DropDown>
                      <Box>
                        <Box py="12px" px="16px">
                          <ButtonLink variant="transparent" to="/invoices/view" color={theme.colors.black[400]}>
                            View
                          </ButtonLink>
                        </Box>
                        <Box py="12px" px="16px">
                          <ButtonLink variant="transparent" to="/" color={theme.colors.black[400]}>
                            Edit
                          </ButtonLink>
                        </Box>
                        <Box py="12px" px="16px">
                          <ButtonLink variant="transparent" to="/" color={theme.colors.black[400]}>
                            Create payment link
                          </ButtonLink>
                        </Box>
                        <Box py="12px" px="16px">
                          <ButtonLink variant="transparent" to="/" color={theme.colors.black[400]}>
                            Duplicate
                          </ButtonLink>
                        </Box>
                      </Box>
                    </DropDown>
                  </Box>
                </Flex>
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>
                <Badge type="green">Pending</Badge>
              </Table.Td>
              <Table.Td>12 Mar 2021</Table.Td>
              <Table.Td>Adegoke Damola</Table.Td>
              <Table.Td>Varsoe Mobile App</Table.Td>
              <Table.Td>
                <Typography.Paragraph color={theme.colors.green[600]}>$34,0000</Typography.Paragraph>
              </Table.Td>
              <Table.Td>
                <Flex justifyContent="space-between" alignItems="center">
                  <Button variant="transparent" onClick={() => setShowInvoice(true)}>
                    View
                  </Button>
                  <Box>
                    <DropDown>
                      <Box>
                        <Box py="12px" px="16px">
                          <ButtonLink variant="transparent" to="/invoices/view" color={theme.colors.black[400]}>
                            View
                          </ButtonLink>
                        </Box>
                        <Box py="12px" px="16px">
                          <ButtonLink variant="transparent" to="/" color={theme.colors.black[400]}>
                            Edit
                          </ButtonLink>
                        </Box>
                        <Box py="12px" px="16px">
                          <ButtonLink variant="transparent" to="/" color={theme.colors.black[400]}>
                            Create payment link
                          </ButtonLink>
                        </Box>
                        <Box py="12px" px="16px">
                          <ButtonLink variant="transparent" to="/" color={theme.colors.black[400]}>
                            Duplicate
                          </ButtonLink>
                        </Box>
                      </Box>
                    </DropDown>
                  </Box>
                </Flex>
              </Table.Td>
            </Table.Tr>
          </Table.TBody>
        </Table.Table>
      </Box>
    </Box>
  );
};

export default DashboardIndex;
