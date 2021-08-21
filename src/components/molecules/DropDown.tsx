import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';
import useOnClickOutside from '../../hooks/ClickOutsideClose';
import DropDownIcon from '../../icons/DropDownIcon';
import TableDropDownIcon from '../../icons/TableDropDown';
import Button from '../atoms/Form/Button';

export interface DropDownProps {
  iconColor?: string;
  width?: string;
  hideIconCircle?: boolean;
  hideIcon?: boolean;
  header?: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  right?: boolean;
  svgSize?: string;
}

interface DropDownBody {
  right: boolean;
}

const DropDownBody = styled(motion(Box))`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 2px 2px 4px rgba(8, 19, 45, 0.04), -2px -2px 8px rgba(8, 19, 45, 0.04);
  border-radius: 8px;
  min-width: ${(props) => (props.width ? props.width : '230px')};
  padding: 5px 0px;
  min-height: 100px;
  position: absolute;
  text-align: left;
  z-index: 20;
  margin-top: 5px;
`;
const DropDownContainer = styled(Box)`
  position: relative;
`;

export const DropDownItem = styled(Box)`
  padding: 12px 16px;
  margin: 10px 0;
  &:hover {
    /* hideIconCircle */
    background-color: ${(props) => props.theme.colors.black[20]};
  }
`;

const DropDown: React.FC<DropDownProps> = ({
  children,
  iconColor,
  width,
  hideIconCircle,
  header,
  isOpen,
  setIsOpen,
  right = true,
  svgSize,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const handleClickOutside = () => {
    setIsOpen(false);
  };
  useOnClickOutside(ref, handleClickOutside);
  const key = right ? 'right' : 'left';
  console.log({ isOpen });
  return (
    <DropDownContainer ref={ref}>
      <Button variant="transparent" onClick={() => setIsOpen(true)} svgSize={svgSize}>
        {header ? (
          <>{header}</>
        ) : (
          <>{hideIconCircle ? <DropDownIcon fill={iconColor} /> : <TableDropDownIcon fill={iconColor} />}</>
        )}
        <AnimatePresence>
          {isOpen && (
            <DropDownBody
              style={{ [key]: 0 }}
              width={width}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                display: 'block',
              }}
              // exit={{ opacity: 0 }}
              transition={{
                duration: 0.2,
                easings: 'easeInOut',
              }}
            >
              {children}
            </DropDownBody>
          )}
        </AnimatePresence>
      </Button>
    </DropDownContainer>
  );
};
export default DropDown;
