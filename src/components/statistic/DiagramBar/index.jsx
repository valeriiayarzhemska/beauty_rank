import { View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { TextComponent } from '../../ui/TextComponent';

import { textStyles } from '../../../constants/constantsStyle';
import { colors } from '../../../constants/constants';

import { styles } from './style';

export const DiagramBar = ({ date = '', progress = 0 }) => {
  const stylesSchema = styles();

  return (
    <View style={[stylesSchema.container]}>
      <LinearGradient
        colors={[
          'rgba(235, 177, 235, 1)',
          'rgba(219, 117, 224, 1)',
          'rgba(183, 110, 218, 1)',
          'rgba(138, 110, 218, 1)',
        ]}
        locations={[0, 0.4, 0.8, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          height: `${progress * 10}%`,
          maxWidth: 23,
        }}
      />

      <View style={stylesSchema.diagramDate}>
        <TextComponent
          styles={{
            ...textStyles.bold,
            fontSize: 12,
            textAlign: 'center',
            width: '100%',
            color: colors.grayCounters,
            zIndex: 1,
          }}
        >
          {date}
        </TextComponent>
      </View>
    </View>
  );
};
