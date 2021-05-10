import * as React from 'react';

const InvoiceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x={4} y={2} width={16} height={20} rx={4} stroke="#fff" strokeWidth={1.5} />
    <path d="M8 8h8M8 12h6" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default InvoiceIcon;
