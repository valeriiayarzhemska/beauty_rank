import { useState } from 'react';
import { ScrollView, View } from 'react-native';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { ButtonTextComponent } from '../../components/ui/buttons/ButtonTextComponent';
import { SubscriptionFeatures } from '../../components/SubscriptionFeatures';
import { TextComponent } from '../../components/ui/TextComponent';
import { SubscriptionButton } from '../../components/ui/SubscriptionButton';
import { TermsLinks } from '../../components/TermsLinks';
import { LogOutComponent } from '../../components/LogOutComponent';

import { colors } from '../../constants/constants';
import { textStyles } from '../../constants/constantsStyle';

import { styles } from './style';

export const Subscription = ({ navigation }) => {
  const stylesSchema = styles();

  const [price, setPrice] = useState(null);

  const handleRestorePurchases = async () => {
    navigation.navigate('Login', { isSignUpInvisible: true });
  };

  return (
    <BackgroundWrapper
      additionalStyles={stylesSchema.additionalStyles}
      isBgGradient={true}
    >
      <View style={stylesSchema.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={stylesSchema.contentContainer}
        >
          <View style={stylesSchema.wrapper}>
            <TextComponent
              styles={{
                ...textStyles.bold,
                fontSize: 24,
                color: colors.purpleColor,
                textAlign: 'center',
              }}
            >
              Here’s what you’ll receive with your beauty analysis:
            </TextComponent>

            <View style={stylesSchema.content}>
              <SubscriptionFeatures />

              <TextComponent
                styles={{
                  ...textStyles.bold,
                  color: colors.secondOrangeColor,
                }}
              >
                Special offer
              </TextComponent>

              <View style={stylesSchema.buttonContainer}>
                <SubscriptionButton
                  text={'Try for free'}
                  navigation={navigation}
                  setPrice={setPrice}
                />

                <TermsLinks />

                <TextComponent
                  styles={{
                    ...textStyles.regular,
                    color: colors.secondLightGrayColor,
                    textAlign: 'center',
                  }}
                >
                  Enjoy one week free, then{' '}
                  {price ? `${price}/month after` : 'subscription plan price'}!
                </TextComponent>
              </View>
            </View>
          </View>

          <ButtonTextComponent
            text="Restore purchase"
            handleClick={handleRestorePurchases}
            stylesButton={{
              textStyle: {
                ...textStyles.semiBold,
                fontSize: 14,
                color: colors.whiteColor,
                textDecorationLine: 'underline',
              },
            }}
          />

          <LogOutComponent />
        </ScrollView>
      </View>
    </BackgroundWrapper>
  );
};
