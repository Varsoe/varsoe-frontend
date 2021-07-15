import * as React from 'react';

const EllipseFull: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width={68} height={68} viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M34 2a32 32 0 110 64 32 32 0 010-64h0z"
      stroke="#313A50"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M34 2A32 32 0 112.433 39.248" stroke="#fff" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
    <rect x={26} y={24} width={16} height={20} rx={4} stroke="#fff" strokeWidth={1.5} />
    <path d="M30 30h8M30 34h6" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default EllipseFull;
