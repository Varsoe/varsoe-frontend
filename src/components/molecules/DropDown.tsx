import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';
import TableDropDownIcon from '../../icons/TableDropDown';
import Button from '../atoms/Form/Button';

export interface DropDownProps {}
const DropDownBody = styled(motion(Box))`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 2px 2px 4px rgba(8, 19, 45, 0.04), -2px -2px 8px rgba(8, 19, 45, 0.04);
  border-radius: 8px;
  min-width: 230px;
  padding: 30px 15px;
  min-height: 100px;
  position: absolute;
  right: 0;
  text-align: left;
  z-index: 3;
`;
const DropDownContainer = styled(Box)`
  position: relative;
`;
const DropDown: React.FC<DropDownProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
  return (
    <DropDownContainer ref={dropDownRef}>
      <Button variant="transparent" onClick={() => setIsOpen(true)}>
        <TableDropDownIcon />
        <AnimatePresence>
          {isOpen && (
            <DropDownBody
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
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
