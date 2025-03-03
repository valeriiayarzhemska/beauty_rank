import { useEffect } from 'react';
import { BackHandler, TouchableOpacity, View } from 'react-native';

import { TextComponent } from '../../TextComponent';
import { BackArrow } from '../../../../assets/icons/BackArrow';

import { textStyles } from '../../../../constants/constantsStyle';
import { colors } from '../../../../constants/constants';

import { styles } from './style';

export const BackButton = ({
  navigation,
  handleBackClick = false,
  color = colors.whiteColor,
}) => {
  const stylesSchema = styles();

  function handleBackButtonClick() {
    if (handleBackClick) {
      handleBackClick();

      return true;
    } else {
      navigation.goBack();

      return true;
    }
  }

  useEffect(() => {
    const backHandlerListener = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButtonClick
    );

    return () => {
      backHandlerListener.remove();
    };
  }, [handleBackClick, navigation]);

  return (
    <TouchableOpacity onPress={handleBackButtonClick}>
      <View style={stylesSchema.container}>
        <BackArrow color={color} />

        <TextComponent
          styles={{
            ...textStyles.regular,
            color,
            display: 'block',
            marginLeft: 6,
          }}
        >
          Back
        </TextComponent>
      </View>
    </TouchableOpacity>
  );
};
