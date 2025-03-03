import { useCallback } from 'react';
import { FlatList, View } from 'react-native';

import { TextComponent } from '../../ui/TextComponent';
import { TipsItem } from '../TipsItem';

import { textStyles } from '../../../constants/constantsStyle';
import { colors } from '../../../constants/constants';

import { styles } from './style';

const tips = [
  {
    name: 'Jennifer Aniston:',
    tip: '"Drink lots of water. Hydration is key for healthy, glowing skin."',
  },
  {
    name: 'Charlotte Tilbury:',
    tip: '"Never skip sunscreen. It’s the best anti-aging product you can use daily."',
  },
];

export const TipsList = ({ navigation }) => {
  const stylesSchema = styles();

  const renderHeader = useCallback(
    () => (
      <View style={stylesSchema.header}>
        <TextComponent
          styles={{
            ...textStyles.bold,
            fontSize: 24,
            textAlign: 'center',
            color: colors.whiteColor,
          }}
        >
          Tips
        </TextComponent>
      </View>
    ),
    [stylesSchema.header]
  );

  return (
    <View style={stylesSchema.container}>
      <FlatList
        data={tips}
        initialNumToRender={10}
        refreshing={true}
        ListHeaderComponent={renderHeader()}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TipsItem
            item={item}
            index={index}
          />
        )}
        contentContainerStyle={stylesSchema.flatListContainer}
        removeClippedSubviews={true}
        maxToRenderPerBatch={5}
        windowSize={10}
      />
    </View>
  );
};
