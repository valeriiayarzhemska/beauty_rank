import { View, Linking } from 'react-native';

import { TextComponent } from '../../ui/TextComponent';
import { SettingsItem } from '../SettingsItem';
import { ButtonComponent } from '../../ui/buttons/ButtonComponent';
import { Stars } from '../../../assets/icons/Stars';

import { profileSettings } from '../../../constants/constantsUI';
import { textStyles } from '../../../constants/constantsStyle';

import { styles } from './style';

export const SettingsList = ({ navigation }) => {
  const stylesSchema = styles();

  const handleClick = (link, isBrowserLink) => {
    if (isBrowserLink) {
      Linking.openURL(link);
    } else {
      navigation.navigate(link, { isProfile: true });
    }
  };

  const handleContactClick = () => {
    Linking.openURL('mailto:info@beauty-mirror.com');
  };

  return (
    <View style={stylesSchema.container}>
      <TextComponent
        styles={{
          ...textStyles.bold,
          fontSize: 24,
          textAlign: 'center',
        }}
      >
        Profile
      </TextComponent>

      <View style={stylesSchema.settings}>
        {profileSettings.map((item, index) => {
          return (
            <SettingsItem
              key={item.id}
              item={item}
              handleClick={handleClick}
              isLast={index === profileSettings.length - 1}
            />
          );
        })}
      </View>

      <View style={stylesSchema.buttonContainer}>
        <ButtonComponent
          text={'Get in touch'}
          icon={Stars}
          handleClick={handleContactClick}
        />
      </View>
    </View>
  );
};
