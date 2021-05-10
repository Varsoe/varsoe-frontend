import { Box } from 'rebass';
import styled from 'styled-components';

interface BadgeProps {
  type: 'green' | 'red' | 'yellow' | 'blue';
}
export const Badge = styled(Box)<BadgeProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 7px 15px;
  border-radius: 23px;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, type }) => theme.colors[type][500]};
  margin-top: 3px;
`;
