import { Box } from 'rebass';
import styled, { css } from 'styled-components';
import React, { InputHTMLAttributes } from 'react';
import Select from './Select';
import SelectAdd from './SelectAdd';
import Date from './Date';
import Button from './Button';

const FormLabel = styled.label`
  margin-bottom: 10px;
  display: inline-block;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.black[600]};
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // width?: string;
}
const InputStyle = styled.input<InputProps>`
  border: 1px solid #ced0d5;
  border-radius: 8px;
  height: 48px;
  width: ${(props) => (props.width ? props.width : '100%')};
  padding: 16px 12px;
  &::placeholder {
    color: ${(props) => props.theme.colors.black[200]};
  }
  &:hover {
    box-shadow: 0 0 0 4px ${(props) => props.theme.colors.blue[100]};
  }
  &:focus {
    border-radius: 8px;
    outline: none;
    border-color: ${(props) => props.theme.colors.blue[400]};
    box-shadow: 0 0 0 4px ${(props) => props.theme.colors.blue[100]};
    /* box-shadow: 0 0 0 2px ${(props) => props.theme.colors.blue[600]}; */
  }
`;

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ type, ...rest }) => {
  const [show, setShow] = React.useState<boolean>(false);
  if (type !== 'password') {
    return <InputStyle type={type} {...rest} />;
  }
  return (
    <Box style={{ position: 'relative' }}>
      <InputStyle type={show ? 'text' : 'password'} {...rest} />
      <Button
        style={{
          position: 'absolute',
          right: '15px',
          top: '20px',
        }}
        variant="transparent"
        onClick={() => {
          setShow((s) => !s);
        }}
      >
        {show ? 'hide' : 'show'}
      </Button>
    </Box>
  );
};
const Form = styled.form``;
interface FormGroupProps {
  mb?: string;
  mt?: string;
  mr?: string;
  ml?: string;
}
const FormGroup = styled(Box)<FormGroupProps>`
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

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  full?: boolean;
};
const TextArea = styled.textarea<TextAreaProps>`
  border: 1px solid #ced0d5;
  border-radius: 8px;
  width: ${(props) => '100%'};
  padding: 16px 12px;
  &::placeholder {
    color: ${(props) => props.theme.colors.black[200]};
  }
  &:hover {
    box-shadow: 0 0 0 4px ${(props) => props.theme.colors.blue[100]};
  }
  &:focus {
    border-radius: 8px;
    outline: none;
    border-color: ${(props) => props.theme.colors.blue[400]};
    box-shadow: 0 0 0 4px ${(props) => props.theme.colors.blue[100]};
    /* box-shadow: 0 0 0 2px ${(props) => props.theme.colors.blue[600]}; */
  }
`;

export default {
  Label: FormLabel,
  FormGroup,
  Form,
  Select,
  Input,
  SelectAdd,
  Date,
  TextArea,
};
