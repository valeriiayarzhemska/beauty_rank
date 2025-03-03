import { BackgroundWrapper } from '../../components/BackgroundWrapper';

import { HistoryList } from '../../components/scoreHistory/HistoryList';

import { styles } from './style';

export const History = ({ navigation }) => {
  const stylesSchema = styles();

  return (
    <BackgroundWrapper
      additionalStyles={{ paddingBottom: 126 }}
      isBgGradient={true}
    >
      <HistoryList navigation={navigation} />
    </BackgroundWrapper>
  );
};
