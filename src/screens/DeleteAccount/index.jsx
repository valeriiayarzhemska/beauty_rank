import { useState } from 'react';
import { ScrollView, View, Linking } from 'react-native';

import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { useDispatch, useSelector } from 'react-redux';
import {
  setIsSplashLoading,
  setToken,
  setUser,
  setIsFullyRegistred,
} from '../../store/redux/features/auth/authSlice';
import { setPhotoToAnalize } from '../../store/redux/features/dashboard/dashboardSlice';
import { useDeleteAccountMutation } from '../../store/redux/services/user/userApi';
import {
  selectToken,
  selectUser,
} from '../../store/redux/features/auth/authSelectors';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { AcceptComponent } from '../../components/ui/AcceptComponent';
import { BackButton } from '../../components/ui/buttons/BackButton';

import { errorMessages } from '../../constants/constantsUI';

import { styles } from './style';
import { authProviders } from '../../constants/constants';

export const DeleteAccount = ({ navigation }) => {
  const stylesSchema = styles();

  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const userToken = useSelector(selectToken);

  const [deleteAccount, { data, isFetching, error: deletingError }] =
    useDeleteAccountMutation();

  const handleDeleting = async () => {
    await dispatch(setUser(null));
    await dispatch(setToken(null));
    await dispatch(setIsFullyRegistred(false));
    await dispatch(setPhotoToAnalize(null));

    Linking.openURL('https://forms.gle/YNKbFTRn7HRZcMMA6');
  };

  const handleYesClick = async () => {
    setError(null);

    const response = await deleteAccount(userToken);

    if (error || response?.error || response?.errors) {
      setError(errorMessages.wentWrong);
    } else {
      dispatch(setIsSplashLoading(true));

      const authProvider = user?.provider;

      if (authProvider) {
        switch (authProvider) {
          case authProviders.Facebook:
            await auth().signOut();
            break;
          case authProviders.Google:
            await auth().signOut();
            await GoogleSignin.revokeAccess();
            break;
          case authProviders.Apple:
            await auth().signOut();
            break;
        }
      }

      handleDeleting();
    }
  };

  const handleNoClick = () => {
    navigation.navigate('Profile');
  };

  return (
    <BackgroundWrapper isBgGradient={true}>
      <View style={stylesSchema.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={stylesSchema.contentContainer}
        >
          <BackButton navigation={navigation} />

          <AcceptComponent
            title={'Do you want to delete account?'}
            subtitle={'We will miss you 😔'}
            handleYesClick={handleYesClick}
            handleNoClick={handleNoClick}
            error={error}
          />
        </ScrollView>
      </View>
    </BackgroundWrapper>
  );
};
