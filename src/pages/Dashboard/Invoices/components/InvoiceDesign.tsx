import React from 'react';
import { Box, Flex } from 'rebass';
import styled, { useTheme } from 'styled-components';
import Typography from '../../../../components/atoms/Typography';
import Table from '../../../../components/molecules/Table';
import CompanyLogo from '../../../../icons/CompanyLogo';
import CompanyLogo2 from '../../../../icons/CompanyLogo2';
import { CardContainer, InvoiceItemsContainer } from '../styled';

export interface InvoiceDesignProps {}

interface CardContainerProps {}

const Th = styled.th<{ align?: 'left' | 'right' | 'center' }>`
  color: ${(props) => props.theme.colors.black[300]};
  text-align: ${(props) => (props.align ? props.align : 'left')};
  font-size: 1.4rem;
`;

const Td = styled.th<{ align?: 'left' | 'right' | 'center'; border?: string }>`
  color: ${(props) => props.theme.colors.black[600]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  border-bottom: ${(props) => (props.border ? props.border : `1px solid ${props.theme.colors.black[50]}`)};

  padding: 16px 16px 16px 0;
  font-size: 1.6rem;
  text-align: ${(props) => (props.align ? props.align : 'left')};
`;
const SubTotals = styled(Box)`
  grid-column: 2 / -1;
`;

const FullGrid = styled(Box)`
  grid-column: 1/-1;
`;
const InvoiceDesign: React.FC<InvoiceDesignProps> = () => {
  const theme = useTheme();
  return (
    <CardContainer>
      <Box>
        <Flex>
          <Typography.Heading type="h4" fontWeight="normal" color={theme.colors.black[200]}>
            #
          </Typography.Heading>
          <Typography.Heading type="h4">INV 002</Typography.Heading>
        </Flex>
        <Flex mt="50px">
          <Box marginRight="20px">
            <Typography.Paragraph fontSize={1} color={theme.colors.black[400]}>
              Created On
            </Typography.Paragraph>
            <Typography.Paragraph fontWeight="medium" mt="10px">
              24 Mar, 2021
            </Typography.Paragraph>
          </Box>
          <Box>
            <Typography.Paragraph fontSize={1} color={theme.colors.black[400]}>
              Due on
            </Typography.Paragraph>
            <Typography.Paragraph fontWeight="medium" mt="10px">
              24 Mar, 2021
            </Typography.Paragraph>
          </Box>
        </Flex>
      </Box>
      <Flex justifyContent="flex-end">
        <Box flex="1" maxWidth="200px">
          <Box mb="10px">
            <CompanyLogo />
          </Box>
          <Typography.Paragraph fontWeight="bold">Andela</Typography.Paragraph>
          <Typography.Paragraph fontSize={1} color={theme.colors.black[400]} mt="10px">
            No 4 and 6 Radiators Spring, Lightning Estate, <br />
            Lagos, Nigeria
          </Typography.Paragraph>
        </Box>
      </Flex>
      <Flex justifyContent="flex-start" mt="50px">
        <Box flex="1" maxWidth="200px">
          <Box mb="10px">
            <CompanyLogo2 />
          </Box>
          <Typography.Paragraph fontWeight="bold">CowryWise</Typography.Paragraph>
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
            <Th align="right">Quantity</Th>
            <Th align="right">Unit Price</Th>
            <Th align="right">Amount</Th>
          </Table.Tr>
          <Table.TBody>
            <Table.Tr>
              <Td>iPad Pro Sale</Td>
              <Td align="right">2</Td>
              <Td align="right">$800.00</Td>
              <Td align="right">$1,600.00</Td>
            </Table.Tr>
            <Table.Tr>
              <Td>iPad Pro Sale</Td>
              <Td align="right">2</Td>
              <Td align="right">$800.00</Td>
              <Td align="right">$1,600.00</Td>
            </Table.Tr>
            <Table.Tr>
              <Td border="none">iPad Pro Sale</Td>
              <Td border="none" align="right">
                2
              </Td>
              <Td border="none" align="right">
                $800.00
              </Td>
              <Td border="none" align="right">
                $1,600.00
              </Td>
            </Table.Tr>
          </Table.TBody>
        </Table.Table>
      </InvoiceItemsContainer>
      <SubTotals mt="40px">
        <Flex justifyContent="flex-end">
          <Box flex="1" maxWidth="200px">
            <Flex justifyContent="space-between">
              <Typography.Paragraph fontSize={1} color={theme.colors.black[400]} mt="10px">
                Subtotal
              </Typography.Paragraph>
              <Typography.Paragraph fontWeight="bold">$4,800.00</Typography.Paragraph>
            </Flex>
            <Flex justifyContent="space-between" mt="22px">
              <Typography.Paragraph fontSize={1} color={theme.colors.black[400]} mt="10px">
                20% Discount
              </Typography.Paragraph>
              <Typography.Paragraph fontWeight="bold">$960.00</Typography.Paragraph>
            </Flex>
            <Flex justifyContent="space-between" mt="22px">
              <Typography.Paragraph fontSize={1} color={theme.colors.black[400]} mt="10px">
                Total
              </Typography.Paragraph>
              <Typography.Heading type="h5">$3,840.00</Typography.Heading>
            </Flex>
          </Box>
        </Flex>
      </SubTotals>
      <FullGrid mt="24px">
        <Typography.Paragraph
          fontSize={1}
          fontWeight="medium"
          color={theme.colors.black[300]}
          mt="10px"
          textAlign="justify"
        >
          With this analogy, if you work on the island and live on the mainland, might as well not bother going to the
          office. At some income levels, the problem is not really an absence of financial discipline, it is just that
          cost of living is high
        </Typography.Paragraph>
      </FullGrid>
    </CardContainer>
  );
};

export default InvoiceDesign;
