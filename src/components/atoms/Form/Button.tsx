import { Box, Flex } from 'rebass';
import styled from 'styled-components';
import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { theme } from '../../../theme/theme';

const variantsToColorMap = {
  primary: {
    bg: theme.colors.blue[600],
    color: theme.colors.white,
    border: 'none',
  },
  outline: {
    bg: theme.colors.transparent,
    color: theme.colors.blue[600],
    border: `1px solid ${theme.colors.blue[600]}`,
  },
  transparent: {
    bg: theme.colors.transparent,
    color: theme.colors.blue[600],
    border: 'none',
  },
};

const ButtonStyle = styled.button<ButtonProps>`
  padding: ${(props) => (props.variant === 'transparent' ? '0' : '12px 16px')};
  background-color: ${(props) => variantsToColorMap[props.variant].bg};
  color: ${(props) => props.color || variantsToColorMap[props.variant].color};
  border: ${(props) => variantsToColorMap[props.variant].border};
  border-radius: 8px;
  font-size: ${(props) => (props.fontSize ? '1rem' : '1.6rem')};
  cursor: pointer;
  box-shadow: ${(props) => (props.shadow ? '4px 4px 8px rgba(90, 98, 115, 0.16);' : 'none')};
  width: ${(props) => (props.width ? props.width : 'auto')};
  min-height: 48px;
  svg {
    width: 24px;
    height: 24px;
  }
`;

type Variants = 'primary' | 'transparent' | 'outline';
export interface ButtonProps {
  variant: Variants;
  Icon?: React.ReactNode;
  children: React.ReactNode;
  shadow?: boolean;
  color?: string;
  fontSize?: string;
  width?: string;
  onClick?: () => void;
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  variant = 'primary',
  Icon,
  children,
  shadow,
  fontSize,
  ...rest
}) => (
  <ButtonStyle variant={variant} shadow={shadow} {...rest}>
    <Flex alignItems="center">
      {Icon}
      <Box ml={Icon ? '5px' : '0px'} width="100%">
        {children}
      </Box>
    </Flex>
  </ButtonStyle>
);

export type ButtonLinkProps = LinkProps & ButtonProps & { variant?: Variants };
const LinkStyle = styled(Link)<ButtonProps>`
  color: ${(props) => props.color || theme.colors.blue[600]};
  text-decoration: none;
`;
export const ButtonLink: React.FC<React.PropsWithChildren<ButtonLinkProps>> = ({
  variant = 'transparent',
  children,
  ...rest
}) => (
  <LinkStyle variant={variant} {...rest}>
    {children}
  </LinkStyle>
);

Button.defaultProps = {
  variant: 'primary',
};
ButtonLink.defaultProps = {
  variant: 'primary',
};

export default Button;
