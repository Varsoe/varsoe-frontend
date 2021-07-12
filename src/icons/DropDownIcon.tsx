import * as React from 'react';

const DropDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill, ...rest }) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <circle cx={12} cy={7.333} stroke={fill || '#ADB0B9'} strokeWidth={1.5} r={0.667} />
    <circle cx={12} cy={12} r={0.667} stroke={fill || '#ADB0B9'} strokeWidth={1.5} />
    <circle cx={12} cy={16.667} stroke={fill || '#ADB0B9'} strokeWidth={1.5} r={0.667} />
  </svg>
);

export default DropDownIcon;
