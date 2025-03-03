import React from 'react';
import { Svg, G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

import { colors } from '../../constants/constants';

export const Eye = ({ size = 24, color = colors.blackColor }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <G clipPath="url(#clip0_4_1887)">
        <Path
          d="M12 19.5C4.14881 19.5 0.256312 12.6555 0.0945 12.3643C-0.0315 12.1376 -0.0315 11.8622 0.0945 11.6355C0.256312 11.3445 4.14881 4.5 12 4.5C19.8512 4.5 23.7437 11.3445 23.9055 11.6357C24.0315 11.8624 24.0315 12.1378 23.9055 12.3645C23.7437 12.6555 19.8512 19.5 12 19.5ZM1.63256 11.9989C2.52469 13.3509 6.02738 18 12 18C17.9916 18 21.4787 13.3547 22.3674 12.0011C21.4753 10.6491 17.9726 6 12 6C6.00844 6 2.52131 10.6453 1.63256 11.9989ZM12 16.5C9.51863 16.5 7.5 14.4814 7.5 12C7.5 9.51862 9.51863 7.5 12 7.5C14.4814 7.5 16.5 9.51862 16.5 12C16.5 14.4814 14.4814 16.5 12 16.5ZM12 9C10.3459 9 9 10.3459 9 12C9 13.6541 10.3459 15 12 15C13.6541 15 15 13.6541 15 12C15 10.3459 13.6541 9 12 9Z"
          fill="black"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4_1887">
          <Rect
            width={size}
            height={size}
            fill="white"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
