import * as React from 'react';

const SaveIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3 19V5a2 2 0 012-2h9.172a2 2 0 011.414.586l4.828 4.828A2 2 0 0121 9.828V19a2 2 0 01-2 2H5a2 2 0 01-2-2z"
      stroke="#2860E1"
      strokeWidth={1.5}
    />
    <path d="M7 3v3a1 1 0 001 1h4a1 1 0 001-1V3" stroke="#2860E1" strokeWidth={1.5} strokeLinecap="round" />
    <path d="M7 21v-6a1 1 0 011-1h8a1 1 0 011 1v6" stroke="#2860E1" strokeWidth={1.5} />
  </svg>
);

export default SaveIcon;
