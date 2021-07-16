import * as React from 'react';

const CloseModalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={16} cy={16} r={15.5} fill="#fff" stroke="#CED0D5" />
    <path d="M20 12l-8 8M12 12l8 8" stroke="#848996" strokeWidth={1.5} strokeLinecap="round" />
  </svg>
);

export default CloseModalIcon;
