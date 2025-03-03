import React from 'react';
import Svg, { G, Path, ClipPath, Rect, Defs } from 'react-native-svg';

import { colors } from '../../constants/constants';

export const Stars = ({ size = 23, color = colors.whiteColor }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_1_2260)">
        <Path
          d="M14 0.5L14.9591 4.38501C15.4042 6.18804 16.812 7.59581 18.615 8.04092L22.5 9L18.615 9.95908C16.812 10.4042 15.4042 11.812 14.9591 13.615L14 17.5L13.0409 13.615C12.5958 11.812 11.188 10.4042 9.38501 9.95908L5.5 9L9.38501 8.04092C11.188 7.59581 12.5958 6.18804 13.0409 4.38501L14 0.5Z"
          fill={color}
        />
        <Path
          d="M5.5 13L6.05565 15.2508C6.32271 16.3326 7.16738 17.1773 8.2492 17.4444L10.5 18L8.24919 18.5556C7.16738 18.8227 6.32271 19.6674 6.05565 20.7492L5.5 23L4.94435 20.7492C4.67729 19.6674 3.83262 18.8227 2.7508 18.5556L0.5 18L2.75081 17.4444C3.83262 17.1773 4.67729 16.3326 4.94435 15.2508L5.5 13Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_2260">
          <Rect
            width="22"
            height="23"
            fill={color}
            transform="translate(0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
