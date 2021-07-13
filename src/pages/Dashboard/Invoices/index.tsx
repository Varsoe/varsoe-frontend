import * as React from 'react';
import { useHistory } from 'react-router';
import { Box, Flex } from 'rebass';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import styled, { ThemeContext } from 'styled-components';
import { Badge } from '../../../components/atoms/Badge';
import Button, { ButtonLink } from '../../../components/atoms/Form/Button';
import Select from '../../../components/atoms/Form/Select';
import Typography from '../../../components/atoms/Typography';
import DropDown, { DropDownItem } from '../../../components/molecules/DropDown';
import Table from '../../../components/molecules/Table';
import { statusMapping } from '../../../constants';
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
      <XAxis
        dataKey="name"
        axisLine={false}
        tickLine={false}
        padding={{ left: 10 }}
        tick={{ color: '#848996', fontSize: '14px' }}
      />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#0555FF" fillOpacity={1} fill="url(#colorUv)" />
    </AreaChart>
  </ResponsiveContainer>
);
const tableData = [
  {
    id: 1,
    status: 'sent',
    date: '12 Mar 2021',
    name: 'Adegoke Damola',
    project: 'Varsoe Mobile App',
    amount: '$34,0000',
  },
  {
    id: 2,
    status: 'pending',
    date: '12 Mar 2021',
    name: 'Bro Jack',
    project: 'Varsoe Mobile App',
    amount: '$34,0000',
  },
  {
    id: 3,
    status: 'paid',
    date: '12 Mar 2021',
    name: 'Test Martin',
    project: 'Varsoe Mobile App',
    amount: '$34,0000',
  },
  {
    id: 4,
    status: 'overdue',
    date: '12 Mar 2021',
    name: 'Test Martin',
    project: 'Varsoe Mobile App',
    amount: '$34,0000',
  },
];
const DashboardIndex: React.FC<DashboardIndexProps> = () => {
  const history = useHistory();
  const theme = React.useContext(ThemeContext);
  const [showInvoice, setShowInvoice] = React.useState(false);
  return (
    <Box pt="40px" pb="100px">
      <InvoiceDetails show={showInvoice} setShowInvoice={setShowInvoice} />
      <Flex alignItems="center" justifyContent="space-between">
        <Typography.Heading type="h5">Welcome Damola,</Typography.Heading>
        <Button
          variant="primary"
          Icon={<InvoiceIcon />}
          onClick={() => {
            history.push('/invoices/create');
          }}
        >
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
                <Flex justifyContent="space-between" flex="0.4" alignItems="center" height="50%">
                  <Button variant="transparent" ml="20px" color={theme.colors.black[600]}>
                    1 month
                  </Button>
                  <Button variant="transparent" ml="20px" color={theme.colors.black[600]}>
                    6 month
                  </Button>
                  <Button variant="transparent" ml="20px" color={theme.colors.black[600]}>
                    1 year
                  </Button>
                  <Button variant="transparent" ml="20px" color={theme.colors.black[600]}>
                    Custom
                  </Button>
                </Flex>
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
            {tableData.map(({ id, status, date, name, project, amount }) => (
              <Table.Tr key={id}>
                <Table.Td>
                  <Badge type={statusMapping[status].color}>{statusMapping[status].text}</Badge>
                </Table.Td>
                <Table.Td>{date}</Table.Td>
                <Table.Td>{name}</Table.Td>
                <Table.Td>{project}</Table.Td>
                <Table.Td>
                  <Typography.Paragraph color={theme.colors.green[600]}>{amount}</Typography.Paragraph>
                </Table.Td>
                <Table.Td>
                  <Flex justifyContent="space-between" alignItems="center">
                    <Button variant="transparent" onClick={() => setShowInvoice(true)}>
                      View
                    </Button>
                    <Box>
                      <DropDown width="200px">
                        <Box>
                          <DropDownItem>
                            <ButtonLink variant="transparent" to="/invoices/view" color={theme.colors.black[400]}>
                              View
                            </ButtonLink>
                          </DropDownItem>
                          <DropDownItem>
                            <ButtonLink variant="transparent" to="/" color={theme.colors.black[400]}>
                              Edit
                            </ButtonLink>
                          </DropDownItem>
                          <DropDownItem>
                            <ButtonLink variant="transparent" to="/" color={theme.colors.black[400]}>
                              Create payment link
                            </ButtonLink>
                          </DropDownItem>
                          <DropDownItem>
                            <ButtonLink variant="transparent" to="/" color={theme.colors.black[400]}>
                              Duplicate
                            </ButtonLink>
                          </DropDownItem>
                          <DropDownItem>
                            <ButtonLink variant="transparent" to="/" color={theme.colors.black[400]}>
                              Delete
                            </ButtonLink>
                          </DropDownItem>
                        </Box>
                      </DropDown>
                    </Box>
                  </Flex>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.TBody>
        </Table.Table>
      </Box>
    </Box>
  );
};

export default DashboardIndex;
