import { ScrollView } from 'react-native';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { WelcomeQuizForm } from '../../components/ui/forms/WelcomeQuizForm';

import { styles } from './style';

export const WelcomeQuiz = ({ navigation }) => {
  const stylesSchema = styles();

  return (
    <BackgroundWrapper isBgGradient={true}>
      <WelcomeQuizForm navigation={navigation} />
    </BackgroundWrapper>
  );
};
