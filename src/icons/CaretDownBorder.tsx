import * as React from 'react';

const CaretDownBorder: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1 1l4 4 4-4" stroke="#848996" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default CaretDownBorder;
