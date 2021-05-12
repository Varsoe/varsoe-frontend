import * as React from 'react';

const TableDropDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill, ...rest }) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <circle cx={8} cy={3.333} stroke={fill || '#ADB0B9'} strokeWidth={1.5} r={0.667} />
    <circle cx={8} cy={8} r={0.667} stroke={fill || '#ADB0B9'} strokeWidth={1.5} />
    <circle cx={8} cy={12.667} stroke={fill || '#ADB0B9'} strokeWidth={1.5} r={0.667} />
  </svg>
);

export default TableDropDownIcon;
