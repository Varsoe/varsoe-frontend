import { Box, Flex } from 'rebass';
import styled from 'styled-components';

export const PaymentLink = styled(Flex)`
  background-color: ${(props) => props.theme.colors.black[20]};
  border: 1px solid #e6e7ea;
  padding: 16px;
  border-radius: 8px;
  margin-top: 8px;
`;

export const CardContainer = styled(Box)`
  background: ${(props) => props.theme.colors.white};
  border: 0.4px solid #e6e7ea;
  box-shadow: -1px -1px 8px rgba(8, 19, 45, 0.02), 1px 1px 8px rgba(8, 19, 45, 0.02);
  border-radius: 16px;
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 400px;
`;

export const InvoiceItemsContainer = styled(Box)`
  background: ${(props) => props.theme.colors.white};
  border: 1px solid #e6e7ea;
  border-radius: 8px;
  grid-column: 1 / -1;
  padding: 16px 20px;
  margin-top: 40px;
`;

export const PageContainer = styled(Box)`
  display: grid;
  grid-template-columns: 450px 1fr;
  margin-top: 40px;
  grid-gap: 30px 70px;
  @media (max-width: 1140px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 930px) {
    display: none;
  }
`;
