import { useState } from 'react';
import { ScrollView, View } from 'react-native';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { WelcomePlanCard } from '../../components/quiz/WelcomePlanCard';
import { ProgressBarComponent } from '../../components/ui/ProgressBar';
import { BackButton } from '../../components/ui/buttons/BackButton';

import { styles } from './style';

export const WelcomeBeautyPlan = ({ navigation }) => {
  const stylesSchema = styles();

  const [progress, setProgress] = useState(0.25);

  return (
    <BackgroundWrapper isBgGradient={true}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={stylesSchema.scrollContainer}
      >
        <View style={stylesSchema.container}>
          <BackButton navigation={navigation} />

          <View style={stylesSchema.loader}>
            <ProgressBarComponent progress={progress} />
          </View>

          <View>
            <WelcomePlanCard navigation={navigation} />
          </View>
        </View>
      </ScrollView>
    </BackgroundWrapper>
  );
};
