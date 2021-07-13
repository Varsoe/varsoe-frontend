import { Box } from 'rebass';
import styled, { css } from 'styled-components';
import Select from './Select';
import SelectAdd from './SelectAdd';
import Date from './Date';

const FormLabel = styled.label`
  margin-bottom: 10px;
  display: inline-block;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.black[600]};
`;

interface InputProps {
  width?: string;
}
const Input = styled.input<InputProps>`
  border: 1px solid #ced0d5;
  border-radius: 8px;
  height: 48px;
  width: ${(props) => (props.width ? props.width : '100%')};
  padding: 16px 12px;
  &::placeholder {
    color: ${(props) => props.theme.colors.black[200]};
  }
  &::focus {
    border: ${(props) => `1px solid ${props.theme.colors.blue[600]}`};
  }
`;
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

export default {
  Label: FormLabel,
  FormGroup,
  Form,
  Select,
  Input,
  SelectAdd,
  Date,
};
