import { Image, View } from 'react-native';

import Logo from '../../assets/images/logo.png';

import { styles } from './style';

export const LogoImage = ({ logoStyles = {}, size = 230 }) => {
  const stylesSchema = styles(size, logoStyles);

  return (
    <View style={stylesSchema.container}>
      <Image
        style={stylesSchema.image}
        source={Logo}
      />
    </View>
  );
};
