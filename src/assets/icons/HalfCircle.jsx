import Svg, { Path } from 'react-native-svg';

import { colors } from '../../constants/constants';

export const HalfCircle = ({
  width = 14,
  height = 14,
  colorFirst = colors.orangeColor,
  colorSecond = colors.yellowColor,
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <Path
      style={{ fill: colorFirst }}
      d="M256,0C114.842,0,0,114.842,0,256s114.842,256,256,256s256-114.842,256-256S397.158,0,256,0z"
    />
    <Path
      style={{ fill: colorSecond }}
      d="M0,256c0,141.158,114.842,256,256,256V0C114.842,0,0,114.842,0,256z"
    />
  </Svg>
);
