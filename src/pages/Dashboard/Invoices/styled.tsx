import { Flex } from 'rebass';
import styled from 'styled-components';

export const PaymentLink = styled(Flex)`
  background-color: ${(props) => props.theme.colors.black[20]};
  border: 1px solid #e6e7ea;
  padding: 16px;
  border-radius: 8px;
  margin-top: 8px;
`;
