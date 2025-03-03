import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../store/redux/features/auth/authSelectors';
import {
  setIsFullyRegistred,
  setIsSplashLoading,
  setToken,
  setUser,
} from '../../store/redux/features/auth/authSlice';
import { setPhotoToAnalize } from '../../store/redux/features/dashboard/dashboardSlice';

import { ButtonTextComponent } from '../ui/buttons/ButtonTextComponent';

import { authProviders, colors } from '../../constants/constants';
import { textStyles } from '../../constants/constantsStyle';

import { styles } from './style';

export const LogOutComponent = ({ navigation }) => {
  const stylesSchema = styles();

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = async () => {
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

  return (
    <ButtonTextComponent
      text="Log out"
      handleClick={handleLogOut}
      stylesButton={{
        textStyle: {
          marginTop: 10,
          ...textStyles.semiBold,
          fontSize: 14,
          color: colors.whiteColor,
          textDecorationLine: 'underline',
        },
      }}
    />
  );
};
