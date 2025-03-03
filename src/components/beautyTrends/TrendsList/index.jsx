import { FlatList, Linking, View } from 'react-native';

import { TrendsItem } from '../TrendsItem';

import { trends } from '../../../constants/constantsUI';

import { styles } from './style';

export const TrendsList = ({ navigation }) => {
  const stylesSchema = styles();

  const handleClick = link => {
    Linking.openURL(link);
  };

  /* const renderItem = ({ item }) => (
    <TrendsItem
      item={item}
      handleClick={handleClick}
    />
  ); */

  return (
    <View style={stylesSchema.container}>
      {/* <FlatList
        data={trends}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ gap: 10 }}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={stylesSchema.flatListContainer}
      /> */}

      {trends.map(trend => {
        return (
          <TrendsItem
            key={trend.id}
            item={trend}
            handleClick={handleClick}
          />
        );
      })}
    </View>
  );
};
