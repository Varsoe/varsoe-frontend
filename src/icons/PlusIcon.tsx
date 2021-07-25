import * as React from 'react';

const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill, ...rest }) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path d="M12 6v12M18 12H6" stroke={fill || '#fff'} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default PlusIcon;
