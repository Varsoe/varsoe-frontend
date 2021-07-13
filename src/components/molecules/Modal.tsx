import { AnimatePresence } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';
import * as React from 'react';
import useOnClickOutside from '../../hooks/ClickOutsideClose';

export interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalBg = styled(Box)`
  background: rgba(132, 137, 150, 0.16);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled(Box)`
  width: 480px;
  min-height: 300px;
  position: relative;
  z-index: 41;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 24px;
  /* position: relative; */
`;

const Bg1 = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  background: ${(props) => props.theme.colors.randomRed};
  background: #f9a000;
  opacity: 1;
  border: 1px solid #f9a000;
  filter: blur(800px);
  transform: rotate(-180deg);
  width: 50%;
  height: 30px;
  z-index: 42;
`;
const Bg2 = styled(Box)`
  position: absolute;
  top: 0;
  right: -20%;
  background: ${(props) => props.theme.colors.randomRed};
  opacity: 1;
  filter: blur(800px);
  width: 50%;
  height: 30px;
  z-index: 42;
`;
const Content = styled(Box)`
  z-index: 45;
`;

const Modal: React.FC<PropsWithChildren<ModalProps>> = ({ children, showModal, setShowModal }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const handleClickOutside = () => {
    setShowModal(false);
  };
  useOnClickOutside(ref, handleClickOutside);
  return (
    <>
      <AnimatePresence>
        {showModal && (
          <ModalBg>
            <ModalContent ref={ref}>
              <Bg1 />
              <Bg2 />
              <Content>{children}</Content>
            </ModalContent>
          </ModalBg>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
