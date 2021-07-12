import React from 'react';
import styled, { css } from 'styled-components';

type TextProps = {
  fontSize?: number;
  color?: string;
  fontWeight?: string;
  mr?: string;
  ml?: string;
  mb?: string;
  mt?: string;
  textAlign?: 'left' | 'right' | 'justify' | 'center';
};

// type HeadingProps = TextProps & {
//   type: string;
// };

const tagMapping = {
  h1: {
    sz: '7.2rem',
    ls: '-1.75px',
  },
  h2: {
    sz: '6.0rem',
    ls: '-1.5px',
  },
  h3: {
    sz: '4.8rem',
    ls: '0.75px',
  },
  h4: {
    sz: '3.2rem',
    ls: '-0.4px',
  },
  h5: {
    sz: '2.4rem',
    ls: '0px',
  },
  h6: {
    sz: '2.0rem',
    ls: '-0.15px',
  },
};
const Paragraph = styled.p<TextProps>`
  font-size: ${(props) => (props.fontSize ? props.theme.fontSizes[props.fontSize] : props.theme.fontSizes[2])};
  color: ${(props) => (props.color ? props.color : props.theme.colors.black[600])};
  line-height: 24px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : props.theme.fontWeights.regular)};
  margin: 0;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
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

const HeadingTag = ({ type, children, ...props }: { children: React.ReactNode; type: keyof typeof tagMapping }) =>
  React.createElement(type, props, children);

const Heading = styled(HeadingTag)<TextProps>`
  font-size: ${(props) => tagMapping[props.type].sz};
  letter-spacing: ${(props) => tagMapping[props.type].ls};
  color: ${(props) => (props.color ? props.color : props.theme.colors.black[600])};
  line-height: ${(props) => props.theme.lineHeights[props.type]};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : props.theme.fontWeights.regular)};
  margin: 0;
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

export default {
  Paragraph,
  Heading,
};