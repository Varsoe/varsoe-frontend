import * as React from 'react';

export interface AddIconProps {}

const AddIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 6v12M18 12H6" stroke="#2860E1" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default AddIcon;
