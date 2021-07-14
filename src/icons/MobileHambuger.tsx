import * as React from 'react';

const MobileHambuger: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle opacity={0.4} cx={16} cy={16} r={15.5} fill="#fff" stroke="#CED0D5" />
    <path
      d="M10 12h12M10 16h12M10 20h12"
      stroke="#848996"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MobileHambuger;
