import { Box } from 'rebass';
import styled from 'styled-components';

export type StatusColor = 'green' | 'red' | 'yellow' | 'blue';
interface BadgeProps {
  type: StatusColor;
}
export const Badge = styled(Box)<BadgeProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 23px;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, type }) => theme.colors[type][500]};
  margin-top: 3px;
`;
