import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { WelcomeScreensForm } from '../../components/ui/forms/WelcomeScreensForm';

import { styles } from './style';

export const WelcomeScreens = ({ navigation, route }) => {
  const stylesSchema = styles();

  return (
    <BackgroundWrapper isBgGradient={true}>
      <WelcomeScreensForm navigation={navigation} />
    </BackgroundWrapper>
  );
};
