import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Purchases from 'react-native-purchases';
import DeviceInfo from 'react-native-device-info';

import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from '../../../store/redux/features/auth/authSelectors';
import { useActivateSubscriptionMutation } from '../../../store/redux/services/payment/paymentApi';
import {
  setHasSubscription,
  setUser,
} from '../../../store/redux/features/auth/authSlice';
import { useUpdateEventsMutation } from '../../../store/redux/services/events/eventsApi';

import { Loader } from '../Loader';
import { ButtonComponent } from '../buttons/ButtonComponent';

import { textStyles } from '../../../constants/constantsStyle';
import { colors, keyNameSubscription } from '../../../constants/constants';
import { errorMessages } from '../../../constants/constantsUI';

import { styles } from './style';

export const SubscriptionButton = ({
  showSubscriptionPage = false,
  navigation,
  text = '',
  setPrice = () => {},
}) => {
  const stylesSchema = styles();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [offerings, setOfferings] = useState(null);

  const dispatch = useDispatch();
  const userToken = useSelector(selectToken);

  const [
    activateSubscription,
    { data, isFetching, error: activateSubscriptionError },
  ] = useActivateSubscriptionMutation();
  const [
    updateEvents,
    { isFetching: isUpdatingEventsFetching, error: updatingEventsError },
  ] = useUpdateEventsMutation();

  const handlePurchase = async packageToPurchase => {
    // for dev in simulator
    /* await activateSubscription({
      credentials: {
        appUserId: 'test',
        isActive: true,
      },
      token: userToken,
    });

    await dispatch(setUser({ hasSubscription: true }));
    await dispatch(setHasSubscription(true));

    navigation.navigate('Rating'); */

    try {
      setIsLoading(true);

      const purchaserInfo = await Purchases.purchasePackage(packageToPurchase);
      const appUserId = purchaserInfo?.customerInfo?.originalAppUserId;
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

        const Currency = packageToPurchase?.product?.currencyCode;
        const SubscriptionAmount = packageToPurchase?.product?.pricePerMonth;
        const uniqueId = await DeviceInfo.getUniqueId();
        const responseSubscription = await updateEvents({
          EventType: 3,
          UserId: uniqueId,
          SubscriptionAmount,
          Currency,
          'Subscription Duration': '1 month',
        });
        const responsePrice = await updateEvents({
          EventType: 4,
          UserId: uniqueId,
          SubscriptionAmount,
          Currency,
        });

        if (responseSubscription?.error || responsePrice?.error) {
          console.log(
            'Error updating subscription event:',
            responseSubscription,
            responsePrice
          );
        }

        await dispatch(setUser({ hasSubscription: true }));
        await dispatch(setHasSubscription(true));

        if (showSubscriptionPage) {
          navigation.navigate('MainTabNavigator');
        } else {
          navigation.navigate('Rating');
        }
      } else {
        Alert.alert('Purchase unsuccessful. Please try again.');
      }
    } catch (error) {
      console.warn('Purchase error:', error);
      Alert.alert('Purchase error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchOfferings = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const offeringsPurchases = await Purchases.getOfferings();

        if (offeringsPurchases.current) {
          setOfferings(offeringsPurchases.current);

          const newPrice =
            offeringsPurchases?.current?.availablePackages?.[0]?.product
              ?.priceString;
          const currencyCode =
            offeringsPurchases?.current?.availablePackages?.[0]?.product
              ?.currencyCode;

          setPrice(newPrice);
        } else {
          console.log('No available offerings found');

          setError('No available offerings found');
        }
      } catch (error) {
        console.warn('Error fetching offerings:', error);

        setError(errorMessages.wentWrong);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOfferings();
  }, []);

  useEffect(() => {
    if (error) {
      Alert.alert(error);
    }
  }, [error]);

  return (
    <>
      {isLoading && !error && (
        <Loader
          color={colors.purpleColor}
          containerStyles={stylesSchema.loader}
        />
      )}

      <ButtonComponent
        text={text}
        handleClick={() => handlePurchase(offerings?.availablePackages?.[0])}
        stylesButton={{
          bgColor: colors.greenColor,
          bColor: colors.greenColor,
          textStyle: {
            ...textStyles.bold,
            color: colors.whiteColor,
            textTransform: 'uppercase',
          },
        }}
      />
    </>
  );
};
