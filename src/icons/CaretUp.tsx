import * as React from 'react';

const CaretUp: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill, ...rest }) => (
  <svg width={6} height={4} viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path
      d="M2.46.416a.667.667 0 011.08 0L5.125 2.61a.667.667 0 01-.54 1.057H1.417A.667.667 0 01.876 2.61L2.46.416z"
      fill={fill || '#CED0D5'}
    />
  </svg>
);

export default CaretUp;
