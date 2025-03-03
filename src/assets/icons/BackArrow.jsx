import Svg, { Path } from 'react-native-svg';

import { colors } from '../../constants/constants';

export const BackArrow = ({ width = 12, height = 5, color = colors.whiteColor }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 12 5"
      fill="none"
    >
      <Path
        d="M2.56 4.64C2.22933 4.24533 1.88267 3.904 1.52 3.616C1.168 3.31733 0.794667 3.072 0.4 2.88V2.192C1.18933 1.78667 1.90933 1.19467 2.56 0.415999H3.792C3.67467 0.725333 3.536 1.01867 3.376 1.296C3.22667 1.56267 3.06667 1.81867 2.896 2.064V3.008C3.06667 3.232 3.22667 3.48267 3.376 3.76C3.536 4.02667 3.67467 4.32 3.792 4.64H2.56ZM2.8 3.184L2.816 1.872H11.6V3.184H2.8Z"
        fill={color}
      />
    </Svg>
  );
};
