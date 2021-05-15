import * as React from 'react';

const DragIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={13} cy={13} r={12} fill="#fff" stroke="#E6E7EA" />
    <path d="M9 10h8M9 13h8M9 16h8" stroke="#848996" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default DragIcon;
