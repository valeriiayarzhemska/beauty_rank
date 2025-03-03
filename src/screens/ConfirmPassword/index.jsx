import { ScrollView } from 'react-native';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { LogoTitle } from '../../components/LogoTitle';
import { ConfirmPasswordForm } from '../../components/ui/forms/ConfirmPasswordForm';

import { colors } from '../../constants/constants';

import { styles } from './style';

export const ConfirmPassword = ({ navigation }) => {
  const stylesSchema = styles();

  const handleSubmit = () => {
    navigation.navigate();
  };

  return (
    <BackgroundWrapper
      isBackButton={true}
      color={colors.purpleBgColor}
      colorBackButton={colors.lightVioletColor}
      navigation={navigation}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={stylesSchema.scrollView}
      >
        <LogoTitle title={'Password Reset'} />

        <ConfirmPasswordForm navigation={navigation} />
      </ScrollView>
    </BackgroundWrapper>
  );
};
