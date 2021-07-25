import React from 'react';
import { Box, Flex } from 'rebass';
import { Badge } from '../../../../components/atoms/Badge';
import Button, { ButtonLink } from '../../../../components/atoms/Form/Button';
import Typography from '../../../../components/atoms/Typography';
import DropDown, { DropDownItem } from '../../../../components/molecules/DropDown';
import Table from '../../../../components/molecules/Table';
import { statusMapping } from '../../../../constants';
import { theme } from '../../../../theme/theme';

export interface TransactionsTableProps {}

export const transactionData = [
  {
    id: 1,
    status: 'successful',
    date: '12 Mar 2021',
    payment: 'card',
    amount: '$34,0000',
  },
  {
    id: 2,
    status: 'pending',
    date: '12 Mar 2021',
    payment: 'card',
    amount: '$34,0000',
  },
  {
    id: 3,
    status: 'failed',
    date: '12 Mar 2021',
    payment: 'card',
    amount: '$34,0000',
  },
  {
    id: 4,
    status: 'successful',
    date: '12 Mar 2021',
    payment: 'card',
    amount: '$34,0000',
  },
];
const TransactionsTable: React.FC<TransactionsTableProps> = () => {
  const [tableDropDown, setTableDropDown] = React.useState<{ [key: string]: boolean }>({});
  return (
    <Table.Table>
      <Table.Tr>
        <Table.Th>Date</Table.Th>
        <Table.Th>Payment Method</Table.Th>
        <Table.Th>Amount</Table.Th>
        <Table.Th>Status</Table.Th>
      </Table.Tr>
      <Table.TBody>
        {transactionData.map(({ id, status, date, payment, amount }) => (
          <Table.Tr key={id}>
            <Table.Td>{date}</Table.Td>
            <Table.Td>
              <Typography.Paragraph color={theme.colors.green[600]}>{amount}</Typography.Paragraph>
            </Table.Td>
            <Table.Td>{payment}</Table.Td>
            <Table.Td>
              <Flex justifyContent="space-between">
                <Badge type={statusMapping[status].color}>{statusMapping[status].text}</Badge>
                <DropDown
                  width="200px"
                  isOpen={!!tableDropDown[id]}
                  setIsOpen={(s) => {
                    setTableDropDown({ ...tableDropDown, [id]: s });
                  }}
                >
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
              </Flex>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.TBody>
    </Table.Table>
  );
};

export default TransactionsTable;
