import { useEffect, useState } from 'react';
import { Alert, Platform, View } from 'react-native';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import auth from '@react-native-firebase/auth';

import {
  useGetUserQuery,
  useSignInSocialMutation,
} from '../../../store/redux/services/user/userApi';

import { TitleSeparator } from '../TitleSeparator';
import { ButtonComponent } from '../buttons/ButtonComponent';

import {
  authButtons,
  authButtonsText,
  errorMessages,
} from '../../../constants/constantsUI';
import { authProviders } from '../../../constants/constants';

import { styles } from './style';

export const AuthButtons = ({
  title,
  marginTop,
  marginBottom,
  isRegistration = false,
  setIsLoading = () => {},
  handleLoginisation = () => {},
  generateFormValues = () => {},
  registerUser = () => {},
}) => {
  const stylesSchema = styles(marginTop, marginBottom);

  const [token, setToken] = useState(null);
  const [provider, setProvider] = useState(null);

  const [loginWithSocial, { isFetching, error: loginError }] =
    useSignInSocialMutation();
  const {
    data: user,
    isFetching: isUserFetching,
    error: userError,
    refetch,
  } = useGetUserQuery(
    { token: token, IncludeImages: true },
    { skip: !token, refetchOnMountOrArgChange: true }
  );

  const handleAuth = async data => {
    const socialData = {
      token: data.token,
      provider: data.provider,
    };

    if (isRegistration) {
      const formValues = generateFormValues();

      await registerUser({
        registerValues: {
          ...formValues.questionnaireValues,
          ...formValues.beautyPlanValues,
          User: { ...socialData, provider: data.provider.replace('.com', '') },
        },
        provider: data.provider,
      });
    } else {
      setToken(null);
      setProvider(null);

      try {
        const response = await loginWithSocial(socialData);

        if ((!response?.error || !response?.errors) && response?.data?.token) {
          setToken(response?.data?.token);
          setProvider(data.provider);
        } else {
          Alert.alert(errorMessages.wentWrong);
          setIsLoading(false);
        }
      } catch (error) {
        setToken(null);
        setProvider(null);
        setIsLoading(false);
      }
    }
  };

  const signInWithGoogle = async () => {
    setIsLoading(true);

    try {
      await GoogleSignin.hasPlayServices();

      const userInfo = await GoogleSignin.signIn();

      if (!userInfo?.data?.idToken) {
        throw new Error('Google Sign-In failed - No idToken received');
      }

      const googleCredential = auth.GoogleAuthProvider.credential(
        userInfo.data.idToken
      );

      const response = await auth().signInWithCredential(googleCredential);

      await handleAuth({
        provider: authProviders.Google,
        token: googleCredential?.token,
      });
    } catch (error) {
      const isNotActionCanceled = error.message !== 'Sign in action cancelled';
      setIsLoading(false);

      Alert.alert(`Google Auth error: ${error.message}`);
      console.error(`Google Auth error: ${error.message}`, error);
    }
  };

  const signInWithFacebook = async () => {
    setIsLoading(true);

    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }

      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw 'Something went wrong obtaining access token';
      }

      const accessToken = data?.accessToken;

      const facebookCredential = await auth.FacebookAuthProvider.credential(
        accessToken
      );

      const response = await auth().signInWithCredential(facebookCredential);

      if (accessToken) {
        await handleAuth({
          provider: authProviders.Facebook,
          token: accessToken,
        });
      }
    } catch (error) {
      const errorMessage = error.message.includes(']')
        ? error.message.split(']')[1]
        : error.message;
      setIsLoading(false);

      Alert.alert(`Facebook Auth error: ${errorMessage}`);
      console.error(`Facebook Auth error: ${errorMessage}`, error);
    }
  };

  const handleApple = async () => {
    setIsLoading(true);

    try {
      const appleAuthResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      const { identityToken, nonce } = appleAuthResponse;

      if (identityToken) {
        const appleCredential = auth.AppleAuthProvider.credential(
          identityToken,
          nonce
        );

        const response = await auth().signInWithCredential(appleCredential);

        await handleAuth({
          provider: authProviders.Apple,
          token: appleCredential?.token,
        });
      }
    } catch (error) {
      Alert.alert(`Apple sign-in failed`);
      setIsLoading(false);

      console.error('Apple sign-in failed', error);
    }
  };

  const assignHandleClick = text => {
    switch (text) {
      case authButtonsText.Apple:
        return handleApple;
      case authButtonsText.Facebook:
        return signInWithFacebook;
      case authButtonsText.Google:
      default:
        return signInWithGoogle;
    }
  };

  useEffect(() => {
    if (user && !isUserFetching) {
      handleLoginisation({ ...user, token, provider });
    }
  }, [user, isUserFetching]);

  return (
    <View style={stylesSchema.buttonsWrapper}>
      <TitleSeparator title={title} />

      <View style={stylesSchema.buttonContainer}>
        {authButtons.map(button => {
          const { id, text, isSmall, icon: buttonIcon, stylesButton } = button;

          if (Platform.OS === 'android' && text === authButtonsText.Apple) {
            return;
          }

          const handleClick = assignHandleClick(text);

          return (
            <View
              key={id}
              style={stylesSchema.buttonWrapper}
            >
              <ButtonComponent
                text={text}
                isSmall={isSmall}
                icon={buttonIcon}
                stylesButton={stylesButton}
                handleClick={handleClick}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};
