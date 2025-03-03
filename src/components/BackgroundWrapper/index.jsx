import { SafeAreaView } from 'react-native-safe-area-context';

import LinearGradient from 'react-native-linear-gradient';

import { BackButton } from '../ui/buttons/BackButton';

import { colors } from '../../constants/constants';

import { styles } from './style';
import { useSelector } from 'react-redux';
import { selectIsUserWoman } from '../../store/redux/features/dashboard/dashboardSelectors';
import { useEffect, useState } from 'react';

export const BackgroundWrapper = ({
  children,
  isBgGradient = false,
  isBackButton = false,
  colorBackButton = colors.whiteColor,
  color = colors.whiteColor,
  navigation,
  additionalStyles,
  isWelcome = false,
  isPadding = true,
}) => {
  const stylesSchema = styles(color, isPadding);

  const [bgGradient, setBgGradient] = useState(colors.womanBgGradient);

  const isWoman = useSelector(selectIsUserWoman);

  useEffect(() => {
    if (isWoman) {
      setBgGradient(colors.womanBgGradient);
    } else {
      setBgGradient(colors.manBgGradient);
    }
  }, [isWoman]);

  return (
    <>
      {isBgGradient ? (
        <LinearGradient
          colors={isWelcome ? colors.manBgGradient : bgGradient}
          style={stylesSchema.gradient}
        >
          <SafeAreaView
            style={[
              stylesSchema.droidSafeArea,
              stylesSchema.gradientSafeArea,
              additionalStyles ? additionalStyles : {},
            ]}
            edges={{ top: 'maximum', bottom: 'maximum' }}
          >
            {isBackButton && (
              <BackButton
                color={colorBackButton}
                navigation={navigation}
              />
            )}

            {children}
          </SafeAreaView>
        </LinearGradient>
      ) : (
        <SafeAreaView
          style={[
            stylesSchema.colorBg,
            stylesSchema.droidSafeArea,
            stylesSchema.safeArea,
            additionalStyles ? additionalStyles : {},
          ]}
          edges={{ top: 'maximum', bottom: 'maximum' }}
        >
          {isBackButton && (
            <BackButton
              color={colorBackButton}
              navigation={navigation}
            />
          )}

          {children}
        </SafeAreaView>
      )}
    </>
  );
};
