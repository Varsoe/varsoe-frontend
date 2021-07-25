import { Box, Flex } from 'rebass';
import * as React from 'react';
import { useHistory } from 'react-router';
import Typography from '../../../components/atoms/Typography';
import Button, { ButtonLink } from '../../../components/atoms/Form/Button';
import PlusIcon from '../../../icons/PlusIcon';
import { DesktopTableView } from '../Invoices';
import Table from '../../../components/molecules/Table';
import DropDown, { DropDownItem } from '../../../components/molecules/DropDown';
import { theme } from '../../../theme/theme';
import AddCustomerModal from '../Invoices/components/AddCustomerModal';
import { DesktopContainer, MobileContainer } from '../Invoices/ViewInvoice';
import { BoxWithBorder } from '../styles';

export interface CustomersProps {}
const tableData = [
  {
    id: 1,
    name: 'Damola Adegoke',
    email: 'testme@gmail.com',
    phone: '+234 618 838 12',
    address: '123, main street',
  },
  {
    id: 2,
    name: 'Ahmed Adegoke',
    email: 'ahmed@gmail.com',
    phone: '+234 618 838 12',
    address: '123, main street',
  },
  {
    id: 3,
    name: 'Max Lass',
    email: 'max@gmail.com',
    phone: '+234 618 838 126',
    address: '123, main street',
  },
];
const Customers: React.FC<CustomersProps> = () => {
  const [tableDropDown, setTableDropDown] = React.useState<{ [key: string]: boolean }>({});
  const [showAddCustomerModal, setShowAddCustomerModal] = React.useState(false);

  return (
    <>
      <AddCustomerModal showModal={showAddCustomerModal} setShowModal={setShowAddCustomerModal} />

      <Box pt="40px" pb="100px">
        <DesktopContainer>
          <Flex alignItems="center" justifyContent="space-between">
            <Typography.Heading type="h5">Customers</Typography.Heading>

            <Button
              variant="primary"
              Icon={<PlusIcon />}
              onClick={() => {
                setShowAddCustomerModal(true);
              }}
            >
              New Customer
            </Button>
          </Flex>
        </DesktopContainer>
        <MobileContainer>
          <Flex alignItems="center" justifyContent="space-between" mb="20px">
            <Typography.Heading type="h6">Customers</Typography.Heading>

            <Button
              variant="transparent"
              Icon={<PlusIcon fill={theme.colors.blue[600]} />}
              fontSize="14px"
              onClick={() => {
                setShowAddCustomerModal(true);
              }}
            >
              New Customer
            </Button>
          </Flex>
        </MobileContainer>
        <MobileContainer>
          {tableData.map(({ id, name, phone, email }) => (
            <BoxWithBorder border="1px solid #F5F5F7" marginBottom="16px" p="12px 20px" borderRadius="8px">
              <Flex justifyContent="space-between" marginBottom="24px">
                <Typography.Paragraph>{name}</Typography.Paragraph>
                <Typography.Paragraph color={theme.colors.black[400]}>{phone}</Typography.Paragraph>
              </Flex>
              <Flex justifyContent="space-between">
                <Typography.Paragraph color={theme.colors.black[400]}>{email}</Typography.Paragraph>
                <DropDown
                  width="200px"
                  isOpen={!!tableDropDown[id]}
                  setIsOpen={(s) => {
                    setTableDropDown({ ...tableDropDown, [id]: s });
                  }}
                >
                  <Box>
                    <DropDownItem>
                      <ButtonLink variant="transparent" to="/customers/view" color={theme.colors.black[400]}>
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
                        Delete
                      </ButtonLink>
                    </DropDownItem>
                  </Box>
                </DropDown>
              </Flex>
            </BoxWithBorder>
          ))}
        </MobileContainer>
        <DesktopTableView mt="40px">
          <Table.Table>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Email address</Table.Th>
              <Table.Th>Phone number</Table.Th>
              <Table.Th>Address</Table.Th>
            </Table.Tr>
            <Table.TBody>
              {tableData.map(({ id, name, email, phone, address }) => (
                <Table.Tr key={id}>
                  <Table.Td noBorder>{name}</Table.Td>
                  <Table.Td noBorder>{email}</Table.Td>
                  <Table.Td noBorder>{phone}</Table.Td>
                  <Table.Td noBorder>
                    <Flex justifyContent="space-between">
                      <Typography.Paragraph>{address}</Typography.Paragraph>
                      <DropDown
                        width="200px"
                        isOpen={!!tableDropDown[id]}
                        setIsOpen={(s) => {
                          setTableDropDown({ ...tableDropDown, [id]: s });
                        }}
                      >
                        <Box>
                          <DropDownItem>
                            <ButtonLink variant="transparent" to="/customers/view" color={theme.colors.black[400]}>
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
        </DesktopTableView>
      </Box>
    </>
  );
};

export default Customers;
