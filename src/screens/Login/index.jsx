import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { ButtonTextComponent } from '../../components/ui/buttons/ButtonTextComponent';
import { LoginForm } from '../../components/ui/forms/LoginForm';
import { AuthButtons } from '../../components/ui/AuthButtons';
import { LogoImage } from '../../components/LogoImage';

import { colors } from '../../constants/constants';

import { styles } from './style';
import { useDispatch } from 'react-redux';
import {
  setHasSubscription,
  setIsFullyRegistred,
  setIsSplashLoading,
  setToken,
  setUser,
} from '../../store/redux/features/auth/authSlice';

export const Login = ({ navigation, route }) => {
  const stylesSchema = styles();

  const [isSignUp, setIsSignUp] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const isSignUpInvisible = route?.params?.isSignUpInvisible;

  const dispatch = useDispatch();

  const handleLoginisation = async data => {
    await dispatch(setIsSplashLoading(true));

    setTimeout(async function () {
      await dispatch(setToken(data?.token));
      await dispatch(setUser(data));
      await dispatch(setIsFullyRegistred(true));
      await dispatch(setHasSubscription(data?.hasSubscription ? true : false));
    }, 1000);

    setIsLoading(false);
  };

  useEffect(() => {
    setIsSignUp(isSignUpInvisible ? false : true);
  }, [isSignUpInvisible]);

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
        <LogoImage
          size={170}
          logoStyles={{ marginBottom: 14 }}
        />

        <LoginForm
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          navigation={navigation}
          handleLoginisation={handleLoginisation}
        />

        <AuthButtons
          title={'Or Sign In with'}
          setIsLoading={setIsLoading}
          handleLoginisation={handleLoginisation}
        />

        {isSignUp && (
          <View style={stylesSchema.signUpContainer}>
            <ButtonTextComponent
              text="Sign up"
              handleClick={() => navigation.navigate('WelcomeScreens')}
            />
          </View>
        )}
      </ScrollView>
    </BackgroundWrapper>
  );
};
