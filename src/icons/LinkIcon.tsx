import * as React from 'react';

const LinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M11.5 7.5L13 6a3.536 3.536 0 015 0v0a3.536 3.536 0 010 5l-1.672 1.672a4 4 0 01-5.656 0L10.5 12.5"
      stroke="#2860E1"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <path
      d="M12.5 16.5L11 18a3.536 3.536 0 01-5 0v0a3.536 3.536 0 010-5l1.672-1.672a4 4 0 015.656 0l.172.172"
      stroke="#2860E1"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);

export default LinkIcon;
