import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from 'react-native-device-info';

import { useDispatch, useSelector } from 'react-redux';
import { useGetUserQuery } from '../store/redux/services/user/userApi';
import {
  setIsSplashLoading,
  setIsFullyRegistred,
} from '../store/redux/features/auth/authSlice';
import {
  selectIsFullyRegistred,
  selectIsSplashLoading,
  selectToken,
} from '../store/redux/features/auth/authSelectors';
import { useUpdateEventsMutation } from '../store/redux/services/events/eventsApi';

import { stackScreenData, verticalAnimation } from './navList';

import { WelcomeLoader } from '../screens/WelcomeLoader';
import { MainTabNavigator } from '../components/ui/tabsNav/MainTabNavigator';

const Stack = createStackNavigator();

export const AppNavigator = ({ initialRoute }) => {
  const navigation = useNavigation();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const isFullyRegistred = useSelector(selectIsFullyRegistred);
  const isSplashLoading = useSelector(selectIsSplashLoading);
  const userToken = useSelector(selectToken);

  const {
    data: user,
    isFetching: isUserFetching,
    error: userError,
  } = useGetUserQuery(
    { token: userToken, IncludeImages: true },
    {
      skip: !userToken,
    }
  );
  const [
    updateEvents,
    { isFetching: isUpdatingEventsFetching, error: updatingEventsError },
  ] = useUpdateEventsMutation();

  const trackInstallation = async uniqueId => {
    try {
      const isInstalled = await AsyncStorage.getItem('installation-tracked');

      if (!isInstalled) {
        const response = await updateEvents({
          EventType: 1,
          UserId: uniqueId,
        });

        if (!response?.error || !response?.errors) {
          await AsyncStorage.setItem('installation-tracked', 'true');
        } else {
          console.log('Error updating events (installation):', error);
        }
      }
    } catch (error) {
      console.log('Error tracking installation:', error);
    }
  };

  const trackRetention = async () => {
    const uniqueId = await DeviceInfo.getUniqueId();
    const appVersion = DeviceInfo.getVersion();

    await trackInstallation(uniqueId);

    const response = await updateEvents({
      EventType: 5,
      UserId: uniqueId,
      Platform: Platform.OS,
      AppVersion: appVersion,
    });

    if (response?.error || response?.errors) {
      console.log('Error updating user retention:', error);
    }
  };

  const hideSplash = () => {
    setTimeout(function () {
      setIsLoading(false);
      dispatch(setIsSplashLoading(false));
    }, 3000);
  };

  useEffect(() => {
    if (isSplashLoading) {
      setIsLoading(true);

      hideSplash();
    }
  }, [isSplashLoading]);

  useEffect(() => {
    hideSplash();
  }, []);

  useEffect(() => {
    if (user?.hasSubscription && !isUserFetching && !isFullyRegistred) {
      dispatch(setIsFullyRegistred(true));
    }
  }, [user, isUserFetching]);

  useEffect(() => {
    // AsyncStorage.removeItem('installation-tracked');

    trackRetention();
  }, []);

  useLayoutEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      setIsNavigating(true);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={initialRoute}
    >
      {isLoading && (
        <Stack.Screen
          name="WelcomeLoader"
          component={WelcomeLoader}
        />
      )}

      {!isLoading && (
        <>
          {!isFullyRegistred ? (
            <>
              {stackScreenData.map(screen => {
                if (
                  (userToken && screen.isAuthorized) ||
                  (!userToken && !screen.isAuthorized)
                ) {
                  return (
                    <Stack.Screen
                      key={screen.name}
                      name={screen.name}
                      component={screen.component}
                      options={screen.options}
                    />
                  );
                }
                return null;
              })}
            </>
          ) : (
            <>
              <Stack.Screen
                name="MainTabNavigator"
                component={MainTabNavigator}
                options={verticalAnimation}
              />
            </>
          )}
        </>
      )}
    </Stack.Navigator>
  );
};
