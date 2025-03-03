import { useEffect } from 'react';
import {
  Alert,
  ImageBackground,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Purchases from 'react-native-purchases';
import { requestTrackingPermission } from 'react-native-tracking-transparency';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectHasSubscription,
  selectToken,
} from '../../store/redux/features/auth/authSelectors';
import { useActivateSubscriptionMutation } from '../../store/redux/services/payment/paymentApi';
import {
  setHasSubscription,
  setUser,
} from '../../store/redux/features/auth/authSlice';
import {
  selectIsUserWoman,
  selectShowSubscriptionPage,
} from '../../store/redux/features/dashboard/dashboardSelectors';

import Sparkles from '../../assets/images/bg-sparkles.png';
import { MainPhoto } from '../../components/mainPage/MainPhoto';
import { MainCalendar } from '../../components/mainPage/MainCalendar';
import { MainWidgets } from '../../components/mainPage/MainWidgets';
import { MainButtons } from '../../components/mainPage/MainButtons';

import { colors, keyNameSubscription } from '../../constants/constants';

import { styles } from './style';

export const Main = ({ navigation }) => {
  const stylesSchema = styles();

  const dispatch = useDispatch();
  const isWoman = useSelector(selectIsUserWoman);
  const userToken = useSelector(selectToken);
  const hasSubscription = useSelector(selectHasSubscription);

  const [
    activateSubscription,
    { data, isFetching, error: activateSubscriptionError },
  ] = useActivateSubscriptionMutation();

  const handleRestorePurchases = async () => {
    try {
      const purchaserInfo =
        Platform.OS === 'android'
          ? await Purchases.restorePurchases()
          : Purchases.restorePurchases();

      const activeEntitlement =
        purchaserInfo?.customerInfo?.entitlements?.active?.[keyNameSubscription]
          ?.isActive;
      const appUserId = purchaserInfo?.customerInfo?.originalAppUserId;

      if (activeEntitlement) {
        if (!hasSubscription) {
          const response = await activateSubscription({
            credentials: {
              appUserId,
              isActive: true,
            },
            token: userToken,
          });

          await dispatch(setUser({ hasSubscription: true }));
          await dispatch(setHasSubscription(true));
        }
      } else {
        navigation.navigate('SubscriptionRenew');

        const response = await activateSubscription({
          credentials: {
            appUserId,
            isActive: false,
          },
          token: userToken,
        });
      }
    } catch (error) {
      console.warn('Error restoring purchases:', error);

      navigation.navigate('SubscriptionRenew');

      Alert.alert('Failed to restore purchases. Please try again later.');
    }
  };

  const requestATT = async () => {
    try {
      const status = await requestTrackingPermission();

      if (status === 'authorized') {
        console.log('User granted tracking permission');
      } else {
        console.log('User denied tracking permission');
      }
    } catch (error) {
      console.error('Error requesting tracking permission:', error);
    }
  };

  /* useEffect(() => {
    console.log('showSubscriptionPage', showSubscriptionPage);
    if (showSubscriptionPage) {
      navigation.navigate('SubscriptionRenew');
    }
  }, [showSubscriptionPage]); */

  useEffect(() => {
    if (!hasSubscription) {
      handleRestorePurchases();
    }
  }, [hasSubscription]);

  useEffect(() => {
    requestATT();
  }, []);

  return (
    <LinearGradient
      colors={isWoman ? colors.womanBgGradient : colors.manBgGradient}
      style={stylesSchema.gradient}
    >
      <View style={stylesSchema.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={stylesSchema.contentContainer}
        >
          <MainCalendar navigation={navigation} />

          <MainPhoto navigation={navigation} />

          <ImageBackground
            source={Sparkles}
            resizeMode="cover"
            style={stylesSchema.sparklesContainer}
          >
            <MainWidgets navigation={navigation} />

            <MainButtons navigation={navigation} />
          </ImageBackground>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};
