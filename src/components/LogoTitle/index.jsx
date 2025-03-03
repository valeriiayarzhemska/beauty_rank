import { View } from 'react-native';
import { LogoImage } from '../LogoImage';
import { TextComponent } from '../ui/TextComponent';

import { textStyles } from '../../constants/constantsStyle';

export const LogoTitle = ({ title, size = 170 }) => {
  return (
    <>
      <LogoImage
        size={size}
        logoStyles={{ marginBottom: 14 }}
      />

      <View>
        <TextComponent
          styles={{
            ...textStyles.black,
            fontSize: 32,
            textTransform: 'uppercase',
          }}
        >
          {title}
        </TextComponent>
      </View>
    </>
  );
};
