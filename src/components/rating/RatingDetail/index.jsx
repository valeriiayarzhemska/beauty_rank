import { useState } from 'react';
import { View } from 'react-native';

import { TextGradient } from '../../ui/TextGradient';
import { TextComponent } from '../../ui/TextComponent';
import { ProgressBarGradient } from '../../ui/ProgressBarGradient';

import { textStyles } from '../../../constants/constantsStyle';

import { styles } from './style';

export const RatingDetail = ({ item = {} }) => {
  const stylesSchema = styles();

  const [progress, setProgress] = useState(
    Number(item?.score) !== 1 ? item?.score : 1
  );

  return (
    <View style={stylesSchema.container}>
      <View style={stylesSchema.titles}>
        <TextComponent
          styles={{
            ...textStyles.bold,
          }}
        >
          {item.feature}
        </TextComponent>

        <View
          style={[
            stylesSchema.gradientContainer,
            {
              minWidth: progress === 1 ? 50 : 40,
            },
          ]}
        >
          <TextGradient
            style={{
              ...textStyles.bold,
              fontSize: 17,
            }}
          >
            {item?.score * 100}%
          </TextGradient>
        </View>
      </View>

      <ProgressBarGradient progress={progress} />
    </View>
  );
};
