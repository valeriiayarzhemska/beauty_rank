import { ScrollView, View } from 'react-native';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { QuestionnaireForm } from '../../components/ui/forms/QuestionnaireForm';

import { styles } from './style';
import { BackButton } from '../../components/ui/buttons/BackButton';

export const EditQuestionnaire = ({ navigation }) => {
  const stylesSchema = styles();

  return (
    <BackgroundWrapper isBgGradient={true}>
      <View style={stylesSchema.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={stylesSchema.contentContainer}
        >
          <BackButton navigation={navigation} />

          <QuestionnaireForm navigation={navigation} />
        </ScrollView>
      </View>
    </BackgroundWrapper>
  );
};
