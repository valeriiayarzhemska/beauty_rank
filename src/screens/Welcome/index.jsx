import { View } from 'react-native';
import { Stars } from '../../assets/icons/Stars';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { TextComponent } from '../../components/ui/TextComponent';
import { ButtonComponent } from '../../components/ui/buttons/ButtonComponent';
import { ButtonTextComponent } from '../../components/ui/buttons/ButtonTextComponent';
import { WelcomeCards } from '../../components/welcomeCardsComponents/WelcomeCards';

import { textStyles } from '../../constants/constantsStyle';
import { colors } from '../../constants/constants';

import { styles } from './style';

export const Welcome = ({ navigation }) => {
  const stylesSchema = styles();

  return (
    <BackgroundWrapper
      isWelcome={true}
      isBgGradient={true}
    >
      <View style={stylesSchema.container}>
        <WelcomeCards />

        <View style={stylesSchema.buttonContainer}>
          <ButtonComponent
            icon={Stars}
            text={'Join now'}
            handleClick={() => navigation.navigate('WelcomeScreens')}
          />

          <View style={stylesSchema.textRow}>
            <TextComponent
              styles={{
                ...textStyles.regular,
                marginRight: 4,
                fontSize: 18,
                color: colors.whiteColor,
              }}
            >
              Have an account?
            </TextComponent>

            <ButtonTextComponent
              text={'Sign in'}
              stylesButton={{
                textStyle: {
                  ...textStyles.semiBold,
                  fontSize: 18,
                  color: colors.violetColor,
                  textDecorationLine: 'underline',
                },
              }}
              handleClick={() => navigation.navigate('Login')}
            />
          </View>
        </View>
      </View>
    </BackgroundWrapper>
  );
};
