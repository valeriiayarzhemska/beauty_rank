import { useEffect, useState } from 'react';
import { Alert, BackHandler, Platform, ScrollView, View } from 'react-native';
import Purchases from 'react-native-purchases';

import { useDispatch, useSelector } from 'react-redux';
import { useActivateSubscriptionMutation } from '../../store/redux/services/payment/paymentApi';
import { selectToken } from '../../store/redux/features/auth/authSelectors';
import {
  setHasSubscription,
  setUser,
} from '../../store/redux/features/auth/authSlice';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { ButtonTextComponent } from '../../components/ui/buttons/ButtonTextComponent';
import { SubscriptionFeatures } from '../../components/SubscriptionFeatures';
import { TextComponent } from '../../components/ui/TextComponent';
import { SubscriptionButton } from '../../components/ui/SubscriptionButton';
import { Loader } from '../../components/ui/Loader';
import { TermsLinks } from '../../components/TermsLinks';
import { LogOutComponent } from '../../components/LogOutComponent';

import { colors, keyNameSubscription } from '../../constants/constants';
import { textStyles } from '../../constants/constantsStyle';

import { styles } from './style';

export const SubscriptionRenew = ({ navigation, route }) => {
  const stylesSchema = styles();

  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState(null);

  const dispatch = useDispatch();
  const userToken = useSelector(selectToken);

  const [
    activateSubscription,
    { data, isFetching, error: activateSubscriptionError },
  ] = useActivateSubscriptionMutation();

  const handleRestorePurchases = async () => {
    try {
      setIsLoading(true);

      const purchaserInfo =
        Platform.OS === 'android'
          ? await Purchases.restorePurchases()
          : Purchases.restorePurchases();

      const activeEntitlement =
        purchaserInfo?.customerInfo?.entitlements?.active?.[keyNameSubscription]
          ?.isActive;

      if (activeEntitlement) {
        const response = await activateSubscription({
          credentials: {
            appUserId,
            isActive: true,
          },
          token: userToken,
        });

        await dispatch(setUser({ hasSubscription: true }));
        await dispatch(setHasSubscription(true));

        navigation.navigate('MainTabNavigator');
      } else {
        Alert.alert('No active subscriptions found.');
      }
    } catch (error) {
      console.warn('Error restoring purchases:', error);

      Alert.alert('Failed to restore purchases. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        'Hold on!',
        'You cannot go back from this screen. Please renew your subscription.',
        [{ text: 'OK', onPress: () => null }]
      );

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <BackgroundWrapper
      additionalStyles={stylesSchema.additionalStyles}
      isBgGradient={true}
    >
      <View style={stylesSchema.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={stylesSchema.contentContainer}
        >
          <View style={stylesSchema.wrapper}>
            <View style={stylesSchema.titles}>
              <TextComponent
                styles={{
                  ...textStyles.bold,
                  fontSize: 24,
                  color: colors.purpleColor,
                  textAlign: 'center',
                }}
              >
                Oops...
              </TextComponent>

              <TextComponent
                styles={{
                  ...textStyles.bold,
                  fontSize: 24,
                  color: colors.purpleColor,
                  textAlign: 'center',
                }}
              >
                Your subscription has expired!
              </TextComponent>
            </View>

            <View style={stylesSchema.content}>
              <SubscriptionFeatures />

              <View style={stylesSchema.buttonContainer}>
                <SubscriptionButton
                  text="Renew subscription"
                  navigation={navigation}
                  setPrice={setPrice}
                />

                <TermsLinks />

                <TextComponent
                  styles={{
                    ...textStyles.regular,
                    color: colors.secondLightGrayColor,
                    textAlign: 'center',
                  }}
                >
                  {price ? price : '$'}/month
                </TextComponent>
              </View>
            </View>
          </View>

          {isLoading && (
            <Loader
              height={50}
              color={colors.purpleColor}
              containerStyles={stylesSchema.loader}
            />
          )}

          <ButtonTextComponent
            text="Restore purchase"
            handleClick={handleRestorePurchases}
            stylesButton={{
              textStyle: {
                ...textStyles.semiBold,
                fontSize: 14,
                color: colors.whiteColor,
                textDecorationLine: 'underline',
              },
            }}
          />

          <LogOutComponent />
        </ScrollView>
      </View>
    </BackgroundWrapper>
  );
};
