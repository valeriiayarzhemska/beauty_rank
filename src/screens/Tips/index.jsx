import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { TipsList } from '../../components/beautyTips/TipsList';

import { styles } from './style';

export const Tips = ({ navigation }) => {
  const stylesSchema = styles();

  return (
    <BackgroundWrapper
      additionalStyles={{ paddingBottom: 126 }}
      isBgGradient={true}
    >
      <TipsList />
    </BackgroundWrapper>
  );
};
