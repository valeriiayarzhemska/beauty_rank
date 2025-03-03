import { useState } from 'react';
import { ScrollView, View } from 'react-native';

import { useDispatch } from 'react-redux';
import { setIsSkipVisible } from '../../store/redux/features/dashboard/dashboardSlice';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { ProgressBarComponent } from '../../components/ui/ProgressBar';
import { BackButton } from '../../components/ui/buttons/BackButton';
import { WelcomeResultCard } from '../../components/quiz/welcomeResult/WelcomeResultCard';

import { styles } from './style';

export const WelcomeResult = ({ navigation }) => {
  const stylesSchema = styles();

  const [progress, setProgress] = useState(1);

  const dispatch = useDispatch();

  const handleBackClick = () => {
    dispatch(setIsSkipVisible(false));

    navigation.navigate('ShareInstagram');
  };

  return (
    <BackgroundWrapper isBgGradient={true}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={stylesSchema.scrollContainer}
      >
        <View style={stylesSchema.container}>
          <BackButton
            handleBackClick={handleBackClick}
            navigation={navigation}
          />

          <View style={stylesSchema.loader}>
            <ProgressBarComponent progress={progress} />
          </View>

          <View>
            <WelcomeResultCard navigation={navigation} />
          </View>
        </View>
      </ScrollView>
    </BackgroundWrapper>
  );
};
