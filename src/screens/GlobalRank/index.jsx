import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { AllTimeRank } from '../../components/allTimeRanking/AllTimeRank';

import { styles } from './style';

export const GlobalRank = ({ navigation }) => {
  const stylesSchema = styles();

  return (
    <BackgroundWrapper
      additionalStyles={{ paddingBottom: 126 }}
      isBgGradient={true}
    >
      <AllTimeRank />
    </BackgroundWrapper>
  );
};
