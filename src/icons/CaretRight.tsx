import * as React from 'react';

const CaretRight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width={6} height={10} viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1 1l4 4-4 4" stroke="#ADB0B9" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default CaretRight;
