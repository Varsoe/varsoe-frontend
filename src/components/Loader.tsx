import * as React from 'react';
import { Flex } from 'rebass';
import Loading from '../icons/Loading';

export interface LoaderProps {
  height?: string;
  stroke?: string;
}

const Loader: React.FC<LoaderProps> = ({ height = 'auto', stroke = '#000' }) => (
  <Flex justifyContent="center" alignItems="center" height={height}>
    <Loading stroke={stroke} />
  </Flex>
);

export default Loader;
