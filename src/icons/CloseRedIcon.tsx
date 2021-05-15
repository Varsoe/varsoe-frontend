import * as React from 'react';

const CloseRedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={12} cy={12} r={12} fill="#FED9D9" />
    <path d="M15 9l-6 6M15 15L9 9" stroke="#F84141" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default CloseRedIcon;
