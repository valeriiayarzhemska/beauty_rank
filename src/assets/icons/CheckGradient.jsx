import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

export const CheckGradient = ({ width = 110, height = 78 }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 110 78"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M108.439 1.33961C110.434 3.20569 110.529 6.3264 108.653 8.3099L44.1844 76.4478C43.2473 77.4383 41.9403 78 40.5726 78C39.2049 78 37.8979 77.4383 36.9608 76.4478L1.34721 38.8071C-0.529469 36.8236 -0.43375 33.7029 1.561 31.8368C3.55576 29.9707 6.69417 30.0659 8.57085 32.0494L40.5726 65.8727L101.429 1.5522C103.306 -0.431302 106.444 -0.526482 108.439 1.33961Z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="112.997"
          y1="18.3857"
          x2="-22.5431"
          y2="18.5305"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#8A6EDA" />
          <Stop
            offset="0.381042"
            stopColor="#B76EDA"
          />
          <Stop
            offset="0.745969"
            stopColor="#DB75E0"
          />
          <Stop
            offset="1"
            stopColor="#EBB1EB"
          />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
