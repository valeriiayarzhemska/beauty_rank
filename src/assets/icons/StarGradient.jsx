import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

export const StarGradient = ({ size = 15 }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Defs>
        <LinearGradient
          id="paint0_linear_4096_14456"
          x1="14.6317"
          y1="3.42555"
          x2="-2.03466"
          y2="3.43817"
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
      <Path
        d="M7.50024 0.237305L8.1154 2.72917C8.56051 4.5322 9.96829 5.93998 11.7713 6.38508L14.2632 7.00024L11.7713 7.6154C9.96829 8.06051 8.56051 9.46829 8.1154 11.2713L7.50024 13.7632L6.88508 11.2713C6.43998 9.46829 5.0322 8.06051 3.22917 7.6154L0.737305 7.00024L3.22917 6.38508C5.0322 5.93998 6.43998 4.5322 6.88508 2.72917L7.50024 0.237305Z"
        fill="url(#paint0_linear_4096_14456)"
      />
    </Svg>
  );
};
