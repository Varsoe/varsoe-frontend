import * as React from 'react';

export interface DeleteProps {}

const Delete: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M7.757 7.757l8.486 8.486M16.243 7.757l-8.486 8.486"
      stroke="#F84141"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Delete;
