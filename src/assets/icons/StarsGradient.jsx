import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

export const StarsGradient = ({ width = 25, height = 22 }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 25 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M15.75 0L16.7091 3.88501C17.1542 5.68804 18.562 7.09581 20.365 7.54092L24.25 8.5L20.365 9.45908C18.562 9.90419 17.1542 11.312 16.7091 13.115L15.75 17L14.7909 13.115C14.3458 11.312 12.938 9.90419 11.135 9.45908L7.25 8.5L11.135 7.54092C12.938 7.09581 14.3458 5.68804 14.7909 3.88501L15.75 0Z"
        fill="url(#paint0_linear_4095_6162)"
      />
      <Path
        d="M5.75 12L6.30565 14.2508C6.57271 15.3326 7.41738 16.1773 8.4992 16.4444L10.75 17L8.49919 17.5556C7.41738 17.8227 6.57271 18.6674 6.30565 19.7492L5.75 22L5.19435 19.7492C4.92729 18.6674 4.08262 17.8227 3.0008 17.5556L0.75 17L3.00081 16.4444C4.08262 16.1773 4.92729 15.3326 5.19435 14.2508L5.75 12Z"
        fill="url(#paint1_linear_4095_6162)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_4095_6162"
          x1="24.7132"
          y1="4.00714"
          x2="3.76606"
          y2="4.02301"
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
        <LinearGradient
          id="paint1_linear_4095_6162"
          x1="11.0225"
          y1="14.3571"
          x2="-1.29938"
          y2="14.3665"
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
