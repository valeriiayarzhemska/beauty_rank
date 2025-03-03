import {
  Keyboard,
  Linking,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { styles } from './style';
import { termsLinks } from '../../../../constants/constants';

export const InputCheckboxTerms = ({
  formProps,
  name,
  handleCheck = () => {},
}) => {
  const stylesSchema = styles();

  const handleLinkPress = link => {
    Keyboard.dismiss();
    Linking.openURL(link);
  };

  return (
    <View style={stylesSchema.info}>
      <TouchableWithoutFeedback onPress={handleCheck}>
        <Text
          style={[
            stylesSchema.inputDefault,
            formProps?.errors?.[name] &&
            Object.keys(formProps.errors[name]).length > 0
              ? stylesSchema.errorInput
              : stylesSchema.inputText,
          ]}
        >
          {'I agree to the '}

          <Text
            maxFontSizeMultiplier={1}
            style={[
              stylesSchema.inputDefault,
              formProps?.errors?.[name] &&
              Object.keys(formProps.errors[name]).length > 0
                ? stylesSchema.errorInputLink
                : stylesSchema.inputTextLink,
            ]}
            onPress={() => handleLinkPress(termsLinks.terms)}
          >
            terms of service
          </Text>

          {' and '}

          <Text
            maxFontSizeMultiplier={1}
            style={[
              stylesSchema.inputDefault,
              formProps?.errors?.[name] &&
              Object.keys(formProps.errors[name]).length > 0
                ? stylesSchema.errorInputLink
                : stylesSchema.inputTextLink,
            ]}
            onPress={() => handleLinkPress(termsLinks.privacy)}
          >
            privacy policy.
          </Text>
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};
