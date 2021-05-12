import * as React from 'react';

const CopyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M17 7v0a3 3 0 00-3-3H7a3 3 0 00-3 3v7a3 3 0 003 3v0"
      stroke="#2860E1"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M10 7h7a3 3 0 013 3v7a3 3 0 01-3 3h-7a3 3 0 01-3-3v-7a3 3 0 013-3z" stroke="#2860E1" strokeWidth={1.5} />
  </svg>
);

export default CopyIcon;
