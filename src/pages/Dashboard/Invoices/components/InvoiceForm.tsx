import React, { useState } from 'react';
import { Box, Flex } from 'rebass';
import styled, { useTheme } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  Droppable,
  DroppableProvided,
  DropResult,
} from 'react-beautiful-dnd';
import Form from '../../../../components/atoms/Form';
import Button, { ButtonLink } from '../../../../components/atoms/Form/Button';
import Typography from '../../../../components/atoms/Typography';
import Table from '../../../../components/molecules/Table';
import CloseRedIcon from '../../../../icons/CloseRedIcon';
import DragIcon from '../../../../icons/DragIcon';
import { FlexWithBorder } from '../../styles';
import DropDown, { DropDownItem } from '../../../../components/molecules/DropDown';
import { CardContainer, InvoiceItemsContainer } from '../styled';

export interface InvoiceFormProps {}

const ProfileIcon = styled(Box)`
  background-color: ${(props) => props.theme.colors.yellow[100]};
  border: 1px solid #fadea7;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const Th = styled.th<{ align?: 'left' | 'right' | 'center' }>`
  color: ${(props) => props.theme.colors.black[300]};
  text-align: ${(props) => (props.align ? props.align : 'left')};
  font-size: 1.4rem;
`;

const Td = styled.td<{ align?: 'left' | 'right' | 'center'; border?: string }>`
  color: ${(props) => props.theme.colors.black[600]};
  border-bottom: ${(props) => (props.border ? props.border : `1px solid ${props.theme.colors.black[50]}`)};

  padding: 16px 16px 16px 0;
  font-size: 1.6rem;
  text-align: ${(props) => (props.align ? props.align : 'left')};
`;

const FullGrid = styled(Box)`
  grid-column: 1/-1;
`;

const CurrencyChangeButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  text-decoration: underline;
  font-size: 1.4rem;
  line-height: 20px;
  color: ${(props) => props.theme.colors.black[400]};
  cursor: pointer;
`;

const border = '1px solid #E6E7EA';
interface ItemProps {
  id: string;
}
const DEFAULT_ITEM = { id: uuidv4() };
const InvoiceForm: React.FC<InvoiceFormProps> = () => {
  const theme = useTheme();
  const [items, setItems] = useState<ItemProps[]>([DEFAULT_ITEM]);

  const handleChange = () => {};
  const addItem = () => {
    const newItem = {
      id: uuidv4(),
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    const itemsLeft = items.filter(({ id: itemId }) => itemId !== id);
    setItems(itemsLeft);
  };

  const handleDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) {
      return;
    }
    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      return;
    }
    const newItems = [...items];
    const [reOrderedItem] = newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, reOrderedItem);
    setItems(newItems);
    return null;
  };
  const [date, setDate] = React.useState('');
  const [currencyDropDown, setCurrencyDropdown] = React.useState(false);
  return (
    <CardContainer>
      <Box>
        <ProfileIcon />
        <Box flex="1" maxWidth="280px">
          <Form.FormGroup mb="24px" mt="24px">
            <Form.Label>Invoice Date</Form.Label>
            <Form.Input placeholder="Select date" />
          </Form.FormGroup>
          <Form.FormGroup mb="48px">
            <Form.Label>Due Date</Form.Label>
            {/* <Form.Input placeholder="Select date" /> */}
            <Form.Date date={date} setDate={setDate} />
          </Form.FormGroup>
          <Form.FormGroup mb="20px">
            <Form.Label>Title</Form.Label>
            <Form.Input placeholder="Enter a title" />
          </Form.FormGroup>
          <Flex>
            <Typography.Paragraph fontSize={1} color={theme.colors.black[400]}>
              Your currency is USD.
            </Typography.Paragraph>
            <DropDown
              iconColor={theme.colors.blue[600]}
              width="70px"
              isOpen={currencyDropDown}
              setIsOpen={setCurrencyDropdown}
              header={<CurrencyChangeButton>Change currency</CurrencyChangeButton>}
            >
              <Box>
                <DropDownItem>
                  <ButtonLink variant="transparent" to="/invoices/view" color={theme.colors.black[400]}>
                    USD
                  </ButtonLink>
                </DropDownItem>
                <DropDownItem>
                  <ButtonLink variant="transparent" to="/" color={theme.colors.black[400]}>
                    NGN
                  </ButtonLink>
                </DropDownItem>
              </Box>
            </DropDown>
          </Flex>
        </Box>
      </Box>

      <Flex justifyContent="flex-end">
        <Box flex="1" maxWidth="280px">
          <Form.FormGroup mb="32px">
            <Form.Label>Invoice No.</Form.Label>
            <Form.Input placeholder="Select or add new customer" />
          </Form.FormGroup>
          <Typography.Paragraph fontSize={1} color={theme.colors.black[400]} mt="10px">
            Invoice For:
          </Typography.Paragraph>
          <Typography.Paragraph fontWeight="bold" color={theme.colors.black[400]}>
            Acme LLC
          </Typography.Paragraph>
          <Typography.Paragraph fontSize={1} color={theme.colors.black[400]} mt="10px">
            No 4 and 6 Radiators Spring, Lightning Estate, <br />
            Lagos, Nigeria
          </Typography.Paragraph>
        </Box>
      </Flex>
      <InvoiceItemsContainer>
        <Table.Table>
          <Table.Tr>
            <Th>Item(s)</Th>
            <Th>Quantity</Th>
            <Th>UnitPrice</Th>
            <Th>Amount</Th>
            <Th align="center">Actions</Th>
          </Table.Tr>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="invoiceList">
              {(providedDroppable: DroppableProvided) => (
                <Table.TBody {...providedDroppable?.droppableProps} ref={providedDroppable.innerRef}>
                  {items.map(({ id }, i) => (
                    <Draggable key={id} index={i} draggableId={id}>
                      {(providedDraggable: DraggableProvided, snapshot) => (
                        <Table.Tr
                          {...providedDraggable?.draggableProps}
                          ref={providedDraggable.innerRef}
                          isDragging={snapshot.isDragging}
                        >
                          <Td>
                            <Form.Input placeholder="Service name" />
                          </Td>
                          <Td>
                            <Form.Input value={1} width="80px" onChange={handleChange} />
                          </Td>
                          <Td>
                            <Form.Input value={0} width="120px" onChange={handleChange} />
                          </Td>
                          <Td>
                            <Typography.Paragraph fontWeight="bold" textAlign="right">
                              $0
                            </Typography.Paragraph>
                          </Td>
                          <Td>
                            <Flex alignItems="center" justifyContent="center">
                              <Button variant="transparent" onClick={() => removeItem(id)}>
                                <CloseRedIcon style={{ marginRight: '10px' }} />
                              </Button>
                              <Box {...providedDraggable.dragHandleProps}>
                                <DragIcon />
                              </Box>
                            </Flex>
                          </Td>
                        </Table.Tr>
                      )}
                    </Draggable>
                  ))}
                  {providedDroppable.placeholder}
                </Table.TBody>
              )}
            </Droppable>
          </DragDropContext>
        </Table.Table>
        <FlexWithBorder
          justifyContent="center"
          alignItems="center"
          borderTop={border}
          borderBottom={border}
          flex="1"
          padding="15px 0"
        >
          <Button variant="transparent" onClick={addItem}>
            + &nbsp; Add Item
          </Button>
        </FlexWithBorder>
        <FullGrid mt="40px">
          <Flex justifyContent="flex-end" flexDirection="column" alignItems="flex-end">
            <Box flex="1" width="200px">
              <Flex justifyContent="space-between">
                <Typography.Paragraph fontSize={1} color={theme.colors.black[400]} mt="10px">
                  Subtotal
                </Typography.Paragraph>
                <Typography.Paragraph fontWeight="bold">$4,800.00</Typography.Paragraph>
              </Flex>
            </Box>
            <Box flex="1">
              <Flex justifyContent="space-between" mt="22px" alignItems="center">
                <Flex alignItems="center">
                  <Box mr="30px">
                    <Form.Label>Discount</Form.Label>
                  </Box>
                  <Box mr="30px">
                    <Form.Input placeholder="Discount" />
                  </Box>
                </Flex>
                <Typography.Paragraph fontWeight="bold">$960.00</Typography.Paragraph>
              </Flex>
            </Box>
            <Box flex="1" width="200px">
              <Flex justifyContent="space-between" mt="22px">
                <Typography.Paragraph fontSize={1} color={theme.colors.black[400]} mt="10px">
                  Total
                </Typography.Paragraph>
                <Typography.Heading type="h5">$3,840.00</Typography.Heading>
              </Flex>
            </Box>
          </Flex>
        </FullGrid>
      </InvoiceItemsContainer>
    </CardContainer>
  );
};

export default InvoiceForm;
