import { useState } from 'react';
import { ScrollView, View } from 'react-native';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { ProgressBarComponent } from '../../components/ui/ProgressBar';
import { BackButton } from '../../components/ui/buttons/BackButton';
import { SelfCareCard } from '../../components/quiz/SelfCareCard';

import { styles } from './style';

export const WelcomeSelfCare = ({ navigation }) => {
  const stylesSchema = styles();

  const [progress, setProgress] = useState(1);

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
            <SelfCareCard navigation={navigation} />
          </View>
        </View>
      </ScrollView>
    </BackgroundWrapper>
  );
};
