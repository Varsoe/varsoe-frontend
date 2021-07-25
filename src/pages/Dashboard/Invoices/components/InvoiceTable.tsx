import React from 'react';
import { Box, Flex } from 'rebass';
import { Badge } from '../../../../components/atoms/Badge';
import Button, { ButtonLink } from '../../../../components/atoms/Form/Button';
import Typography from '../../../../components/atoms/Typography';
import DropDown, { DropDownItem } from '../../../../components/molecules/DropDown';
import Table from '../../../../components/molecules/Table';
import { statusMapping } from '../../../../constants';
import { theme } from '../../../../theme/theme';

export interface InvoiceTableProps {
  setShowInvoice?: React.Dispatch<React.SetStateAction<boolean>>;
  isCustomerPage?: boolean;
}

export const invoiceData = [
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
const InvoiceTable: React.SFC<InvoiceTableProps> = ({ setShowInvoice, isCustomerPage }) => {
  const [tableDropDown, setTableDropDown] = React.useState<{ [key: string]: boolean }>({});
  return (
    <Table.Table>
      <Table.Tr>
        <Table.Th>Status</Table.Th>
        <Table.Th>Date</Table.Th>
        {!isCustomerPage && <Table.Th>Client</Table.Th>}
        <Table.Th>Project</Table.Th>
        <Table.Th>Amount</Table.Th>
        <Table.Th>Quick actions</Table.Th>
      </Table.Tr>
      <Table.TBody>
        {invoiceData.map(({ id, status, date, name, project, amount }) => (
          <Table.Tr key={id}>
            <Table.Td>
              <Badge type={statusMapping[status].color}>{statusMapping[status].text}</Badge>
            </Table.Td>
            <Table.Td>{date}</Table.Td>
            <Table.Td>{name}</Table.Td>
            <Table.Td>{project}</Table.Td>
            <Table.Td>
              <Flex justifyContent="space-between">
                <Typography.Paragraph color={theme.colors.green[600]}>{amount}</Typography.Paragraph>
                {isCustomerPage && (
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
                )}
              </Flex>
            </Table.Td>
            {!isCustomerPage && (
              <Table.Td>
                <Flex justifyContent="space-between" alignItems="center">
                  {setShowInvoice && (
                    <Button variant="transparent" onClick={() => setShowInvoice(true)}>
                      View
                    </Button>
                  )}
                  <Box>
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
                  </Box>
                </Flex>
              </Table.Td>
            )}
          </Table.Tr>
        ))}
      </Table.TBody>
    </Table.Table>
  );
};

export default InvoiceTable;
