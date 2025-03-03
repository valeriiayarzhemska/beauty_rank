import { memo } from 'react';
import { View } from 'react-native';

import { colors } from '../../../../../constants/constants';

import { styles } from './style';

const Rail = ({ sections = [] }) => {
  const stylesSchema = styles();

  let emptySliceWidth = 100;

  return (
    <View style={stylesSchema.container}>
      {sections.map((section, index) => {
        emptySliceWidth = emptySliceWidth - section.width;

        return (
          <View
            key={index}
            style={[
              stylesSchema.slice,
              {
                backgroundColor: section.color,
                width: `${section.width}%`,
              },
            ]}
          />
        );
      })}

      <View
        style={[
          stylesSchema.slice,
          {
            backgroundColor: colors.whiteColor,
            width: `${emptySliceWidth}%`,
          },
        ]}
      />
    </View>
  );
};

export default memo(Rail);
