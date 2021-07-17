import { Box, Flex } from 'rebass';
import styled, { css } from 'styled-components';
import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { theme } from '../../../theme/theme';

const variantsToColorMap = {
  primary: {
    bg: theme.colors.blue[600],
    color: theme.colors.white,
    border: 'none',
    hoverBg: theme.colors.blue[500],
  },
  danger: {
    bg: theme.colors.red[600],
    color: theme.colors.white,
    border: 'none',
    hoverBg: theme.colors.red[500],
  },
  outline: {
    bg: theme.colors.transparent,
    color: theme.colors.blue[600],
    border: `1px solid ${theme.colors.blue[600]}`,
    hoverBg: theme.colors.blue[100],
  },
  transparent: {
    bg: theme.colors.transparent,
    color: theme.colors.blue[600],
    border: 'none',
    hoverBg: theme.colors.transparent,
  },
};

const ButtonStyle = styled.button<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>>`
  cursor: pointer;
  padding: ${(props) => (props.variant === 'transparent' ? '0' : '12px 16px')};
  background-color: ${(props) => variantsToColorMap[props.variant].bg};
  color: ${(props) => props.color || variantsToColorMap[props.variant].color};
  border: ${(props) => variantsToColorMap[props.variant].border};
  border-radius: 8px;
  font-size: ${(props) => props.fontSize};
  cursor: pointer;
  box-shadow: ${(props) => (props.shadow ? '4px 4px 8px rgba(90, 98, 115, 0.16);' : 'none')};
  width: ${(props) => (props.width ? props.width : 'auto')};
  min-height: ${(props) => (props.variant === 'transparent' ? 'auto' : '48px')};
  box-shadow: ${(props) => (props.variant === 'transparent' ? 'none' : '4px 4px 8px rgba(90, 98, 115, 0.16)')};

  &:hover {
    background-color: ${(props) => variantsToColorMap[props.variant].hoverBg};
  }
  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb};
    `}
  ${({ mt }) =>
    mt &&
    css`
      margin-top: ${mt};
    `}
    ${({ mr }) =>
    mr &&
    css`
      margin-right: ${mr};
    `}
    ${({ ml }) =>
    ml &&
    css`
      margin-left: ${ml};
    `}
  &.hamburger {
    svg {
      width: 32px;
      height: 32px;
    }
  }
  svg {
    width: 24px;
    height: 24px;
  }
`;

type Variants = 'primary' | 'transparent' | 'outline' | 'danger';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variants;
  Icon?: React.ReactNode;
  children: React.ReactNode;
  shadow?: boolean;
  color?: string;
  fontSize?: string;
  width?: string;
  mr?: string;
  ml?: string;
  mb?: string;
  mt?: string;
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
      <Box ml={Icon ? '5px' : '0px'} width="100%" fontSize={fontSize}>
        {children}
      </Box>
    </Flex>
  </ButtonStyle>
);

export type ButtonLinkProps = LinkProps & ButtonProps & { variant?: Variants };
const LinkStyle = styled(Link)<ButtonProps>`
  color: ${(props) => props.color || theme.colors.blue[600]};
  text-decoration: none;
  display: block;
  font-weight: ${({ theme: t }) => t.fontWeights.medium};
  font-size: ${(props) => props.fontSize};
  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb};
    `}
  ${({ mt }) =>
    mt &&
    css`
      margin-top: ${mt};
    `}
    ${({ mr }) =>
    mr &&
    css`
      margin-right: ${mr};
    `}
    ${({ ml }) =>
    ml &&
    css`
      margin-left: ${ml};
    `}
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
