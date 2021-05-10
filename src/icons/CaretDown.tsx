import * as React from 'react';

const CaretDown: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill, ...rest }) => (
  <svg width={6} height={4} viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path
      d="M2.46 3.584a.667.667 0 001.08 0L5.125 1.39a.667.667 0 00-.54-1.057H1.417A.667.667 0 00.876 1.39L2.46 3.584z"
      fill={fill || '#a6a8af'}
    />
  </svg>
);

export default CaretDown;
