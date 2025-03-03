import { Image, View } from 'react-native';

import BgElement from '../../../assets/images/element.png';

import { RoutinePlanItem } from '../RoutinePlanItem';

import { beautyPlanFinishData } from '../../../constants/constantsUI';

import { styles } from './style';

export const RoutinePlanList = ({ navigation }) => {
  const stylesSchema = styles();

  return (
    <View style={stylesSchema.listContainer}>
      <View style={stylesSchema.listImageContainer}>
        <Image
          style={stylesSchema.image}
          source={BgElement}
        />
      </View>

      {beautyPlanFinishData.map((item, index) => (
        <RoutinePlanItem
          key={index}
          item={item}
          index={index}
          navigation={navigation}
        />
      ))}
    </View>
  );
};
