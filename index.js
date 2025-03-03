/**
 * @format
 */

import { AppRegistry } from 'react-native';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Settings } from 'react-native-fbsdk-next';

import App from './App';
import { name as appName } from './app.json';
import { Text, TextInput } from 'react-native';
import firebase from '@react-native-firebase/app';

// Facebook SDK initialization
Settings.initializeSDK();

// Google SDK initialization
GoogleSignin.configure({
  webClientId:
    '329760040588-crhiia0qn264fs40p869tfdte70h1gep.apps.googleusercontent.com',
  offlineAccess: true,
  forceCodeForRefreshToken: true,
});

AppRegistry.registerComponent(appName, () => App);

if (Text.defaultProps == null) {
  Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;
}

if (TextInput.defaultProps == null) {
  TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScaling = false;
}
