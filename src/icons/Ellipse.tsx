import * as React from 'react';

const Ellipse: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width={68} height={68} viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={34} cy={34} r={32} stroke="#313A50" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default Ellipse;
