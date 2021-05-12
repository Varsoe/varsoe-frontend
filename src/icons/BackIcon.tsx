import * as React from 'react';

const BackIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width={6} height={10} viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5 1L1 5l4 4" stroke="#5A6273" />
  </svg>
);

export default BackIcon;
