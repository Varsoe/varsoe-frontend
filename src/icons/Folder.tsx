import * as React from 'react';

const Folder: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3 7v10a3 3 0 003 3h12a3 3 0 003-3v-7a3 3 0 00-3-3h-3.394a3 3 0 01-2.497-1.336l-.218-.328A3 3 0 009.394 4H6a3 3 0 00-3 3z"
      stroke="#2860E1"
      strokeWidth={1.5}
    />
    <path d="M7 16h10" stroke="#2860E1" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default Folder;
