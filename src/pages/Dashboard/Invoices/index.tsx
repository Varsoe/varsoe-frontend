import * as React from 'react';
import { useHistory } from 'react-router';
import { Box, Flex } from 'rebass';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import styled, { ThemeContext } from 'styled-components';
import { Badge } from '../../../components/atoms/Badge';
import Button, { ButtonLink } from '../../../components/atoms/Form/Button';
import Typography from '../../../components/atoms/Typography';
import DropDown, { DropDownItem } from '../../../components/molecules/DropDown';
import Table from '../../../components/molecules/Table';
import { statusMapping } from '../../../constants';
import { chartData } from '../../../data';
import DropDownIcon from '../../../icons/DropDownIcon';
import Filter from '../../../icons/Filter';
import InvoiceIcon from '../../../icons/InvoiceIcon';
import { BoxWithBorder } from '../styles';
import InvoiceDetails from './components/InvoiceDetails';
import InvoiceTable from './components/InvoiceTable';
import { DesktopContainer } from './ViewInvoice';

export interface DashboardIndexProps {}
interface DashboardCardProps {}
const DashboardCard = styled.div<DashboardCardProps>`
  background: #ffffff;
  border: 0.4px solid #e6e7ea;
  box-shadow: -1px -1px 8px rgba(8, 19, 45, 0.02), 1px 1px 8px rgba(8, 19, 45, 0.02);
  border-radius: 8px;
  padding: 48px 48px 24px 48px;
  @media (max-width: 930px) {
    box-shadow: none;
    border: none;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
`;

const StatBox = styled(Box)`
  @media (max-width: 930px) {
    display: none;
  }
`;

const FilterButton = styled(Button)`
  @media (max-width: 930px) {
    font-size: 12px;
  }
`;

const FilterGroup = styled(Flex)`
  @media (max-width: 930px) {
    flex: 1;
    justify-content: space-between;
  }
`;

const FilterContainer = styled(Box)`
  @media (max-width: 930px) {
    flex: 1;
  }
`;

export const DesktopTableView = styled(Box)`
  @media (max-width: 930px) {
    display: none;
  }
`;

export const Mobile = styled(Box)`
  display: none;
  @media (max-width: 930px) {
    display: block;
  }
`;
const MobileTableGrid = styled(Box)`
  display: none;
  @media (max-width: 930px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 30px;
    margin: 40px 0;
  }
`;

const WelcomeSection = styled(Flex)`
  @media (max-width: 930px) {
    display: none;
  }
`;

const windowWidth = window.innerWidth;
const isMobile = windowWidth <= 930;

const Chart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <AreaChart data={chartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1" rotate="180deg">
          <stop offset="0%" stopColor="rgba(5, 85, 255)" stopOpacity={0.096} />
          <stop offset="78.34%" stopColor="rgba(5, 85, 255)" stopOpacity={0} />
        </linearGradient>
      </defs>
      <DesktopContainer>
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          padding={{ left: 10 }}
          tick={{ color: '#848996', fontSize: isMobile ? '10px' : '14px' }}
        />
      </DesktopContainer>
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
  const [activeAmount, setActiveAmount] = React.useState('amount-due');
  const [amountToShow, setAmountToShow] = React.useState(false);

  return (
    <Box pt="40px" pb="100px" sx={{ pb: '0px' }}>
      <InvoiceDetails show={showInvoice} setShowInvoice={setShowInvoice} />
      <WelcomeSection alignItems="center" justifyContent="space-between">
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
      </WelcomeSection>
      <Mobile>
        <DropDown
          isOpen={amountToShow}
          setIsOpen={setAmountToShow}
          width="200px"
          right={false}
          header={
            <Flex alignItems="center">
              <Typography.Paragraph textTransform="capitalize" color={theme.colors.blue[600]}>
                {activeAmount.replace('-', ' ')}
              </Typography.Paragraph>
              <Box ml="4px">
                <svg
                  fill={theme.colors.blue[600]}
                  width="8"
                  height="8"
                  viewBox="0 0 12 8"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: 'scale(0.5)' }}
                >
                  <path
                    fill={theme.colors.blue[600]}
                    stroke={theme.colors.blue[600]}
                    d="M5.29289 6.29289L1.70711 2.70711C1.07714 2.07714 1.52331 1 2.41421 1H9.58579C10.4767 1 10.9229 2.07714 10.2929 2.70711L6.70711 6.29289C6.31658 6.68342 5.68342 6.68342 5.29289 6.29289Z"
                  />
                </svg>
              </Box>
            </Flex>
          }
        >
          <Box>
            <DropDownItem>
              <Button
                variant="transparent"
                color={theme.colors.black[400]}
                onClick={() => {
                  setAmountToShow(false);
                  setActiveAmount('amount-due');
                }}
              >
                Amount Due
              </Button>
            </DropDownItem>
            <DropDownItem>
              <Button
                variant="transparent"
                color={theme.colors.black[400]}
                onClick={() => {
                  setActiveAmount('amount-received');
                }}
              >
                Amount Received
              </Button>
            </DropDownItem>
            <DropDownItem>
              <Button
                variant="transparent"
                color={theme.colors.black[400]}
                onClick={() => {
                  setActiveAmount('total-invoices');
                }}
              >
                Total Invoices
              </Button>
            </DropDownItem>
            <DropDownItem>
              <Button
                variant="transparent"
                color={theme.colors.black[400]}
                onClick={() => {
                  setActiveAmount('invoices-due');
                }}
              >
                Invoices Due
              </Button>
            </DropDownItem>
          </Box>
        </DropDown>
        <Box marginRight="20px" marginBottom="24px">
          <Flex alignItems="center">
            <Typography.Heading type="h4" mr="4px" mt="8px">
              $45,000
            </Typography.Heading>
            <Typography.Paragraph fontSize={1} color={theme.colors.statusGreen}>
              +32%
            </Typography.Paragraph>
          </Flex>
        </Box>
        <Button
          variant="primary"
          onClick={() => {
            history.push('/invoices/create');
          }}
        >
          Create Invoice
        </Button>
      </Mobile>
      <Box mt="40px">
        <DashboardCard>
          <Flex flexDirection="column" justifyContent="space-between" flex="1">
            <Flex height="100px" justifyContent="space-between" flexWrap="wrap">
              <StatBox marginRight="20px" marginBottom="20px">
                <Typography.Paragraph fontSize={1}>Amount Due</Typography.Paragraph>
                <Flex alignItems="center">
                  <Typography.Heading type="h5" mr="5px">
                    $45,000
                  </Typography.Heading>
                  <Typography.Paragraph fontSize={1} color={theme.colors.statusGreen}>
                    +32%
                  </Typography.Paragraph>
                </Flex>
              </StatBox>
              <StatBox marginRight="20px" marginBottom="20px">
                <Typography.Paragraph fontSize={1}>Amount Dues</Typography.Paragraph>
                <Flex alignItems="center">
                  <Typography.Heading type="h5" mr="5px">
                    $45,000
                  </Typography.Heading>
                  <Typography.Paragraph fontSize={1} color={theme.colors.statusRed}>
                    -25%
                  </Typography.Paragraph>
                </Flex>
              </StatBox>
              <StatBox marginRight="20px" marginBottom="20px">
                <Typography.Paragraph fontSize={1}>Invoices Due</Typography.Paragraph>
                <Flex alignItems="center">
                  <Typography.Heading type="h5" mr="5px">
                    15
                  </Typography.Heading>
                  <Typography.Paragraph fontSize={1} color={theme.colors.statusGreen}>
                    +32%
                  </Typography.Paragraph>
                </Flex>
              </StatBox>
              <StatBox marginRight="20px" marginBottom="20px">
                <Typography.Paragraph fontSize={1}>Amount Dues</Typography.Paragraph>
                <Flex alignItems="center">
                  <Typography.Heading type="h5" mr="5px">
                    15
                  </Typography.Heading>
                  <Typography.Paragraph fontSize={1} color={theme.colors.statusGreen}>
                    +32%
                  </Typography.Paragraph>
                </Flex>
              </StatBox>
              <FilterContainer>
                <FilterGroup justifyContent="space-between" alignItems="center" height="50%">
                  <FilterButton variant="transparent" color={theme.colors.black[300]} fontSize={theme.fontSizes[1]}>
                    1 month
                  </FilterButton>
                  <FilterButton
                    variant="transparent"
                    ml="20px"
                    color={theme.colors.blue[600]}
                    fontSize={theme.fontSizes[1]}
                  >
                    6 month
                  </FilterButton>
                  <FilterButton
                    variant="transparent"
                    ml="20px"
                    color={theme.colors.black[300]}
                    fontSize={theme.fontSizes[1]}
                  >
                    1 year
                  </FilterButton>
                  <FilterButton
                    variant="transparent"
                    ml="20px"
                    color={theme.colors.black[300]}
                    fontSize={theme.fontSizes[1]}
                  >
                    Custom
                  </FilterButton>
                </FilterGroup>
              </FilterContainer>
            </Flex>
            <Chart />
          </Flex>
        </DashboardCard>
      </Box>
      <DesktopTableView mt="64px">
        <Flex alignItems="center">
          <Typography.Heading type="h5" mr="15px">
            Invoice
          </Typography.Heading>
          <Button variant="transparent" Icon={<Filter />}>
            Filter
          </Button>
        </Flex>
        <InvoiceTable />
      </DesktopTableView>
      <Mobile>
        <Flex alignItems="center" justifyContent="space-between">
          <Typography.Paragraph mr="15px">All Invoices</Typography.Paragraph>
          <Button variant="transparent">Filter</Button>
        </Flex>
        <MobileTableGrid>
          {tableData.map(({ id, status, date, name, project, amount }) => (
            <BoxWithBorder
              py="12px"
              px="20px"
              border="1px solid #F5F5F7"
              borderRadius="8px"
              key={id}
              onClick={() => history.push('/invoices/view')}
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
        </MobileTableGrid>
      </Mobile>
    </Box>
  );
};

export default DashboardIndex;
