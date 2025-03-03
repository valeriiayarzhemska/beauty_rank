import { Keyboard, Linking, Text, View } from 'react-native';

import { styles } from './style';

export const TermsLinks = ({ navigation }) => {
  const stylesSchema = styles();

  const handleLinkPress = link => {
    Keyboard.dismiss();
    Linking.openURL(link);
  };

  return (
    <View style={stylesSchema.termsContainer}>
      <Text style={stylesSchema.terms}>
        <Text
          maxFontSizeMultiplier={1}
          style={[stylesSchema.terms, stylesSchema.termLinks]}
          onPress={() =>
            handleLinkPress('https://beauty-mirror.com/terms-of-service.html')
          }
        >
          Terms of service
        </Text>

        {' and '}

        <Text
          maxFontSizeMultiplier={1}
          style={[stylesSchema.terms, stylesSchema.termLinks]}
          onPress={() =>
            handleLinkPress('https://beauty-mirror.com/privacy-policy.html')
          }
        >
          privacy policy
        </Text>
      </Text>
    </View>
  );
};
