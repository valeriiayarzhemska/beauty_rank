import { View } from 'react-native';

import { TextComponent } from '../TextComponent';

import { textStyles } from '../../../constants/constantsStyle';

import { styles } from './style';

export const TitleSeparator = ({ title }) => {
  const stylesSchema = styles();

  return (
    <>
      <View style={stylesSchema.signInSeparator}>
        <View style={stylesSchema.separatorLine}></View>

        <View>
          <TextComponent
            styles={{
              ...textStyles.medium,
            }}
          >
            {title}
          </TextComponent>
        </View>

        <View style={stylesSchema.separatorLine}></View>
      </View>
    </>
  );
};
