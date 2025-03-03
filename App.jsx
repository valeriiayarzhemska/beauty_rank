import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Purchases from 'react-native-purchases';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigation';
import { store, persistor } from './src/store/redux/store';

const androidKey = process.env.ANDROID_REVENUECAT_PUBLIC_KEY;
const iosKey = process.env.IOS_REVENUECAT_PUBLIC_KEY;

function App() {
  const [initialRoute, setInitialRoute] = useState('WelcomeLoader');

  const handleRehydrationError = error => {
    console.error('Rehydration error:', error);
    persistor.purge();
  };

  const onBeforeLift = () => {
    const state = store.getState();
    const { token, user, hasSubscription, isFullyRegistred } = state.auth;
    const photoAnalysis = user?.analysis || user?.analysisId;

    if (!token && !hasSubscription && !photoAnalysis) {
      setInitialRoute('WelcomeLoader');
    } else if (token && !hasSubscription && !photoAnalysis) {
      setInitialRoute('UploadAnalizePhoto');
    } else if (token && !hasSubscription && photoAnalysis) {
      if (isFullyRegistred) {
        setInitialRoute('SubscriptionRenew');
      } else {
        setInitialRoute('Subscription');
      }
    } else {
      setInitialRoute('MainTabNavigator');
    }
  };

  useEffect(() => {
    Purchases.setLogLevel(Purchases.LOG_LEVEL.DEBUG);

    if (Platform.OS === 'ios') {
      Purchases.configure({
        apiKey: iosKey,
        appUserID: null,
        observerMode: false,
        useAmazon: false,
      });
    } else if (Platform.OS === 'android') {
      Purchases.configure({
        apiKey: androidKey,
        appUserID: null,
        observerMode: false,
        useAmazon: false,
      });
    }
  }, []);

  return (
    <SafeAreaProvider style={styles.container}>
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
          onBeforeLift={onBeforeLift}
          onError={handleRehydrationError}
        >
          <NavigationContainer>
            <AppNavigator initialRoute={initialRoute} />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, height: '100%', backgroundColor: '#fff' },
});

export default App;
