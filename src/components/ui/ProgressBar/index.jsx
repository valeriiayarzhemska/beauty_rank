import ProgressBar from 'react-native-progress/Bar';

import { colors } from '../../../constants/constants';

export const ProgressBarComponent = ({
  progress = 0,
  color = colors.secondLightPurpleColor,
}) => {
  return (
    <ProgressBar
      progress={progress}
      width={null}
      height={10}
      animated={true}
      color={color}
      unfilledColor={'rgba(255, 255, 255, 0.1)'}
      borderColor={'rgba(255, 255, 255, 0.1)'}
      borderWidth={0}
      borderRadius={100}
    />
  );
};
