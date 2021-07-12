import { Box } from 'rebass';
import styled from 'styled-components';
import * as React from 'react';

export interface SwitchProps {
  checked: boolean | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SwitchContainer = styled(Box)`
  cursor: pointer;
`;
const SwitchLabel = styled.label`
  display: inline-block;
  height: 20px;
  width: 32px;
  background-color: ${(props) => props.theme.colors.black[100]};
  border-radius: 1em;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 1.5px;
`;

const Div = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 16px;
  transition: all 300ms;
  background-color: ${(props) => props.theme.colors.white};
  transform: translate3d(0, 0, 0);
`;

const Span = styled.span`
  position: absolute;
  display: block;
  right: 0;
  left: 0;
  bottom: 0;
  height: 20px;
  width: 32px;
  border-radius: 1em;
`;
const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  &:checked ~ ${Div} {
    transform: translate3d(calc(100% - 2px), 0, 0);
    margin-right: 2px;
    background-color: ${(props) => props.theme.colors.white};
  }
  &:checked + ${Span} {
    background-color: ${(props) => props.theme.colors.blue[600]};
  }
`;

const Switch: React.FC<SwitchProps> = (props) => (
  <SwitchContainer>
    <SwitchLabel>
      <Input {...props} type="checkbox" />
      <Span />
      <Div />
    </SwitchLabel>
  </SwitchContainer>
);

export default Switch;
