import { ScrollView, View } from 'react-native';

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
import { selectUser } from '../../store/redux/features/auth/authSelectors';

import { BackButton } from '../../components/ui/buttons/BackButton';
import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { AcceptComponent } from '../../components/ui/AcceptComponent';
import Phone from '../../assets/images/people-phone.png';

import { authProviders } from '../../constants/constants';

import { styles } from './style';

export const LogOut = ({ navigation }) => {
  const stylesSchema = styles();

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const handleYesClick = async () => {
    await dispatch(setIsSplashLoading(true));

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

    dispatch(setUser(null));
    dispatch(setToken(null));
    dispatch(setIsFullyRegistred(false));
    dispatch(setPhotoToAnalize(null));
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
            title={'Do you want to log out?'}
            subtitle={'Are you sure?'}
            image={Phone}
            handleYesClick={handleYesClick}
            handleNoClick={handleNoClick}
          />
        </ScrollView>
      </View>
    </BackgroundWrapper>
  );
};
