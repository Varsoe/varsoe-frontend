import * as React from 'react';

const PDFIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x={4} y={2} width={16} height={20} rx={4} stroke="#fff" strokeWidth={1.5} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.88 14.2V9.8H8.4c.438 0 .806.14 1.065.39.26.248.398.592.398.97 0 .393-.152.741-.419.99-.266.248-.637.387-1.061.387h-.389V14.2H6.88zm3.304 0V9.8h1.394c.71 0 1.285.228 1.684.628.398.4.602.954.602 1.572 0 .63-.22 1.184-.623 1.58-.404.396-.979.62-1.663.62h-1.394zm4.079 0V9.8h2.845v1.04h-1.73v.577h1.61v1.04h-1.61V14.2h-1.115zm-6.469-3.56h.583c.366 0 .572.252.572.537 0 .274-.206.537-.572.537h-.583V10.64zm3.304 0h.503c.8 0 1.337.486 1.337 1.36 0 .874-.537 1.36-1.337 1.36h-.503v-2.72z"
      fill="#fff"
    />
  </svg>
);

export default PDFIcon;
