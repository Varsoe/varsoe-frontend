import * as React from 'react';

export interface ProfileImageProps {}

const ProfileImage: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="33" cy="33" r="32.5" fill="#D4DFF9" stroke="#B7CAF5" />
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="64" height="64">
      <circle cx="33" cy="33" r="31.5" fill="#D4DFF9" stroke="#B7CAF5" />
    </mask>
    <g mask="url(#mask0)">
      <rect y="-36" width="65" height="138" fill="url(#pattern0)" />
    </g>
    <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0" transform="scale(0.000888889 0.000410509)" />
      </pattern>
      <image
        id="image0"
        width="1125"
        height="2436"
      />
    </defs>
  </svg>
);

export default ProfileImage;