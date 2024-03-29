import { PropsWithChildren } from 'react';
import { Box, Flex } from 'rebass';
import styled from 'styled-components';
import * as React from 'react';
import CaretUp from '../../icons/CaretUp';
import CaretDown from '../../icons/CaretDown';

export interface TableProps {
  layout?: string;
}
const TableWrapper = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
`;
const TableContainer = styled.table<{ layout?: string }>`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 16px;
  table-layout: ${(props) => (props.layout ? props.layout : 'initial')};
`;

const Td = styled.td<{ noBorder?: boolean; textTransform?: 'uppercase' | 'lowercase' | 'capitalize' }>`
  background-color: #fff;
  padding: 16px 20px;
  font-size: ${(props) => props.theme.fontSizes[1]};
  color: ${(props) => props.theme.colors.black[400]};
  border: ${(props) => (props.noBorder ? 'none' : `1px solid ${props.theme.colors.black[20]}`)};
  border-right: ${(props) => `0px solid ${props.theme.colors.black[20]}`};
  text-transform: ${(props) => (props.textTransform ? props.textTransform : 'lowercase')};
  &:last-child {
    border-right: ${(props) => (props.noBorder ? 'none' : `1px solid ${props.theme.colors.black[20]}`)};
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;
const Tr = styled.tr<{ isDragging?: boolean }>`
  margin: 16px 0px;
  display: ${({ isDragging }) => (isDragging ? 'table' : '')};
  &:last-child {
    td {
      border: none;
      margin-bottom: 0;
    }
  }
`;
const TBody = styled.tbody``;
const ThStyle = styled.th`
  background-color: ${(props) => props.theme.colors.black[20]};
  color: ${(props) => props.theme.colors.black[400]};
  padding: 14px 20px;
  min-width: 100px;
  font-size: 1.2rem;
  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;

const Table: React.FC<PropsWithChildren<TableProps>> = ({ children, layout }) => (
  <TableWrapper>
    <TableContainer layout={layout}>{children}</TableContainer>
  </TableWrapper>
);

export interface ThProps {
  sortIcr?: boolean;
  sortDesc?: boolean;
}
const Th: React.FC<PropsWithChildren<ThProps>> = ({ sortIcr, sortDesc, children }) => (
  <ThStyle>
    <Flex alignItems="center">
      <Box mr="10px">{children}</Box>
      {(sortIcr || sortDesc) && (
        <Flex flexDirection="column">
          <CaretUp style={{ marginBottom: '1px', cursor: 'pointer' }} fill={sortIcr ? '#08132D' : '#a6a8af'} />
          <CaretDown style={{ cursor: 'pointer' }} fill={sortDesc ? '#08132D' : '#a6a8af'} />
        </Flex>
      )}
    </Flex>
  </ThStyle>
);

Th.defaultProps = {
  sortIcr: true,
  sortDesc: false,
};

export default {
  Table,
  TBody,
  Td,
  Tr,
  Th,
};
