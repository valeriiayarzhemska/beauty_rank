import { View } from 'react-native';

import { TextComponent } from '../../ui/TextComponent';

import { textStyles } from '../../../constants/constantsStyle';
import { colors } from '../../../constants/constants';

import { styles } from './style';

export const DiagramCounters = () => {
  const stylesSchema = styles();

  return (
    <View style={stylesSchema.counters}>
      {[...Array(11).keys()].reverse().map((item, index) => {
        return (
          <View
            style={stylesSchema.counter}
            key={item}
          >
            <TextComponent
              styles={{
                ...textStyles.bold,
                fontSize: 15,
                color: colors.grayCounters,
                textAlign: 'center',
              }}
            >
              {10 - index}
            </TextComponent>
          </View>
        );
      })}
    </View>
  );
};
