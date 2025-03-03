import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

export const InstagramGradient = ({ size = 22 }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Defs>
        <LinearGradient
          id="paint0_linear_4010_5084"
          x1="21.109"
          y1="5.36283"
          x2="-4.18551"
          y2="5.38199"
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.9928 2.52441C4.20517 2.52441 3.44979 2.8373 2.89285 3.39424C2.33591 3.95118 2.02303 4.70655 2.02303 5.49419C2.02303 5.51283 2.02251 5.5314 2.02148 5.54986V16.0813C2.02148 16.8689 2.33437 17.6243 2.89131 18.1812C3.44825 18.7382 4.20362 19.051 4.99126 19.051H15.5799C16.3675 19.051 17.1229 18.7382 17.6798 18.1812C18.2368 17.6243 18.5497 16.8689 18.5497 16.0813V5.49419C18.5497 5.10419 18.4728 4.71801 18.3236 4.3577C18.1744 3.99739 17.9556 3.67001 17.6798 3.39424C17.4041 3.11847 17.0767 2.89972 16.7164 2.75047C16.3561 2.60123 15.9699 2.52441 15.5799 2.52441H4.9928ZM0.023442 5.42994C0.0401613 4.1351 0.56178 2.89689 1.47864 1.98003C2.41065 1.04801 3.67473 0.524414 4.9928 0.524414H15.5799C16.2325 0.524414 16.8788 0.652961 17.4817 0.902715C18.0847 1.15247 18.6326 1.51854 19.094 1.98003C19.5555 2.44151 19.9216 2.98938 20.1714 3.59234C20.4211 4.1953 20.5497 4.84155 20.5497 5.49419V16.0813C20.5497 17.3993 20.0261 18.6634 19.094 19.5954C18.162 20.5274 16.8979 21.051 15.5799 21.051H4.99126C3.67319 21.051 2.40911 20.5274 1.4771 19.5954C0.545084 18.6634 0.0214844 17.3993 0.0214844 16.0813V5.49264C0.0214844 5.47163 0.0221422 5.45072 0.023442 5.42994ZM6.79678 7.29776C7.72214 6.3724 8.97719 5.85254 10.2858 5.85254C11.5945 5.85254 12.8496 6.3724 13.7749 7.29776C14.7003 8.22312 15.2201 9.47817 15.2201 10.7868C15.2201 11.4348 15.0925 12.0764 14.8445 12.6751C14.5966 13.2738 14.2331 13.8177 13.7749 14.2759C13.3167 14.7341 12.7728 15.0975 12.1741 15.3455C11.5755 15.5935 10.9338 15.7211 10.2858 15.7211C9.63787 15.7211 8.99623 15.5935 8.39758 15.3455C7.79892 15.0975 7.25497 14.7341 6.79678 14.2759C6.33859 13.8177 5.97513 13.2737 5.72716 12.6751C5.47919 12.0764 5.35156 11.4348 5.35156 10.7868C5.35156 9.47817 5.87142 8.22312 6.79678 7.29776ZM10.2858 7.85254C9.50763 7.85254 8.76128 8.16169 8.211 8.71197C7.66071 9.26226 7.35156 10.0086 7.35156 10.7868C7.35156 11.1722 7.42746 11.5537 7.57492 11.9097C7.72238 12.2657 7.93852 12.5892 8.21099 12.8617C8.48347 13.1342 8.80694 13.3503 9.16295 13.4978C9.51895 13.6452 9.90051 13.7211 10.2858 13.7211C10.6712 13.7211 11.0527 13.6452 11.4088 13.4978C11.7648 13.3503 12.0882 13.1342 12.3607 12.8617C12.6332 12.5892 12.8493 12.2657 12.9968 11.9097C13.1442 11.5537 13.2201 11.1722 13.2201 10.7868C13.2201 10.0086 12.911 9.26226 12.3607 8.71197C11.8104 8.16169 11.0641 7.85254 10.2858 7.85254ZM15.2996 6.80039C15.9624 6.80039 16.4996 6.26313 16.4996 5.60039C16.4996 4.93765 15.9624 4.40039 15.2996 4.40039C14.6369 4.40039 14.0996 4.93765 14.0996 5.60039C14.0996 6.26313 14.6369 6.80039 15.2996 6.80039Z"
        fill="url(#paint0_linear_4010_5084)"
      />
    </Svg>
  );
};
