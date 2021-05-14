import * as React from 'react';

const SendIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5.256 8.248l13.847-4.616a1 1 0 011.265 1.265l-4.61 13.83c-.28.843-1.439.928-1.84.136l-2.77-5.465a1 1 0 00-.436-.438l-5.596-2.874c-.788-.404-.7-1.558.14-1.838z"
      stroke="#fff"
      strokeWidth={1.5}
    />
    <path d="M16 8l-3 3" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default SendIcon;
