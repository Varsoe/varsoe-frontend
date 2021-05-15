import { Box, Flex } from 'rebass';
import styled from 'styled-components';

interface BoxWithBorderProps {
  borderRadius?: string;
  border?: string;
  borderBottom?: string;
}

export const BoxWithBorder = styled(Box)<BoxWithBorderProps>`
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  border-bottom: ${(props) => props.borderBottom};
`;

interface FlexWithBorderProps {
  borderRadius?: string;
  border?: string;
  borderBottom?: string;
  borderTop?: string;
}

export const FlexWithBorder = styled(Flex)<FlexWithBorderProps>`
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  border-bottom: ${(props) => props.borderBottom};
  border-top: ${(props) => props.borderTop};
`;
