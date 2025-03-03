import { ScrollView } from 'react-native';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { LogoTitle } from '../../components/LogoTitle';
import { ResetPasswordForm } from '../../components/ui/forms/ResetPasswordForm';

import { colors } from '../../constants/constants';

import { styles } from './style';

export const ResetPassword = ({ navigation }) => {
  const stylesSchema = styles();

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

        <ResetPasswordForm navigation={navigation} />
      </ScrollView>
    </BackgroundWrapper>
  );
};
