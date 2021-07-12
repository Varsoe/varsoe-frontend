import React, { PropsWithChildren, useState } from 'react';
import Select, {
  components,
  GroupTypeBase,
  MenuListComponentProps,
  OptionProps,
  OptionTypeBase,
  Props as SelectProps,
} from 'react-select';
import { Flex } from 'rebass';
import { CSSObject } from 'styled-components';
import AddIcon from '../../../icons/AddIcon';
import CaretDown from '../../../icons/CaretDown';
import { theme } from '../../../theme/theme';
import Button from './Button';

const DropdownIndicator = (props: any) => (
  <components.DropdownIndicator {...props}>
    <CaretDown width={12} height={8} fill="#ADB0B9" />
  </components.DropdownIndicator>
);

interface MenuListProps extends MenuListComponentProps<OptionTypeBase, false, GroupTypeBase<OptionTypeBase>> {
  addItemText?: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const MenuList = ({ children, addItemText, setOpen, ...rest }: MenuListProps) => (
  <components.MenuList {...rest}>
    <Flex alignItems="center" py="12px" px="16px">
      <Button
        variant="transparent"
        Icon={<AddIcon />}
        onClick={() => {
          setOpen(false);
        }}
      >
        {addItemText}
      </Button>
    </Flex>
    {children}
  </components.MenuList>
);

export interface SelectAddProps extends SelectProps<OptionTypeBase> {
  addItemText?: string;
}

const styles = {
  control: (base: CSSObject) => ({
    ...base,
    height: '45px',
    borderRadius: '8px',
    fontFamily: 'Wigrum',
    fontSize: '15px',
    color: theme.colors.black[600],
  }),
  menu: (base: CSSObject) => ({
    ...base,
    fontFamily: 'Wigrum',
    fontSize: '15px',
    color: theme.colors.black[400],
  }),
  option: (
    provided: CSSObject,
    { isFocused, isSelected }: OptionProps<OptionTypeBase, false, GroupTypeBase<OptionTypeBase>>
  ) => ({
    // ...provided,
    background: isFocused || isSelected ? theme.colors.black[50] : theme.colors.white,
    padding: '12px 16px',
    color: theme.colors.black[400],
    cursor: 'pointer',
    fontWeight: 400,
  }),
};
const SelectAdd: React.FC<PropsWithChildren<SelectAddProps>> = ({ children, addItemText, onInputChange, ...rest }) => {
  const [open, setOpen] = useState(false);
  return (
    <Select
      {...rest}
      styles={styles}
      onMenuOpen={() => {
        setOpen(true);
      }}
      onMenuClose={() => {
        setOpen(false);
      }}
      menuIsOpen={open}
      components={{
        DropdownIndicator,
        IndicatorSeparator: () => null,
        // eslint-disable-next-line react/display-name
        MenuList: (props) => <MenuList addItemText={addItemText} setOpen={setOpen} {...props} />,
      }}
    >
      {children}
    </Select>
  );
};

export default SelectAdd;
