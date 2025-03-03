import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

import { colors } from '../../constants/constants';

export const Cosmetics = ({ size = 20, color = colors.whiteColor }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_4142_4451)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.6875 4.6875C4.36388 4.6875 4.10156 4.94982 4.10156 5.27344V8.2031C4.10156 8.20312 4.10156 8.20312 3.51562 8.20312C2.92969 8.20312 2.92969 8.20312 2.92969 8.2031V5.27344C2.92969 4.30261 3.71667 3.51562 4.6875 3.51562C5.65833 3.51562 6.44531 4.30261 6.44531 5.27344V8.2031C6.44531 8.20312 6.44531 8.20312 5.85938 8.20312C5.27344 8.20312 5.27344 8.20312 5.27344 8.2031V5.27344C5.27344 4.94982 5.01112 4.6875 4.6875 4.6875Z"
          fill={color}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.75781 7.61719H7.61719V11.1328H6.44531V8.78906H2.92969V11.1328H1.75781V7.61719Z"
          fill={color}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.34375 11.7188C1.69653 11.7188 1.17188 12.2434 1.17188 12.8906V18.8281H8.20312V12.8906C8.20312 12.2434 7.67847 11.7188 7.03125 11.7188H2.34375ZM0 12.8906C0 11.5962 1.04933 10.5469 2.34375 10.5469H7.03125C8.32567 10.5469 9.375 11.5962 9.375 12.8906V20H0V12.8906Z"
          fill={color}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.4173 7.44619C16.3016 5.33044 12.8781 5.33044 10.7624 7.44619L9.93372 6.61754C12.5071 4.04415 16.6726 4.04415 19.2459 6.61754L18.4173 7.44619Z"
          fill={color}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.17969 0H20V2.97107L18.2422 15.3539V20H10.9375V15.3539L9.17969 2.97107V0ZM10.3516 1.17188V2.88831L12.1094 15.2711V18.8281H17.0703V15.2711L18.8281 2.88831V1.17188H10.3516Z"
          fill={color}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.6562 15.8984H11.5234V14.7266H17.6562V15.8984Z"
          fill={color}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.4141 3.42969H9.76562V2.42969H19.4141V3.42969Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4142_4451">
          <Rect
            width={20}
            height={20}
            fill={color}
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
