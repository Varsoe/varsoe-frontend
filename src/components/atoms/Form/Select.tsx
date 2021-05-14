import styled, { css } from 'styled-components';
import Caret from '../../../assets/caret.svg';

interface SelectProps {
  bg?: string;
  disabled?: boolean;
}
const Select = styled.select<SelectProps>`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: ${(props) => (props.bg ? props.color : props.theme.colors.white)};
  background-image: url(${Caret});
  background-position: calc(100% - 1rem) 50%;
  background-size: 10px;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
  border: 1px solid rgba(226, 224, 224, 0.86);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.04);
  font-size: 1.4rem;
  outline: none;
  padding: 10px 35px 10px 20px;
  position: relative;
  width: 100%;
  ${({ disabled }) =>
    disabled &&
    css`
      /* background-color: rgba(128, 128, 128, 0.12); */
      cursor: not-allowed;
    `}
`;

export default Select;
