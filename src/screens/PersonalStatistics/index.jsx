import { ScrollView, View } from 'react-native';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { DiagramStatistics } from '../../components/statistic/DiagramStatistics';

import { styles } from './style';

export const PersonalStatistics = ({ navigation }) => {
  const stylesSchema = styles();

  return (
    <BackgroundWrapper isBgGradient={true}>
      <View style={stylesSchema.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={stylesSchema.contentContainer}
        >
          <DiagramStatistics />
        </ScrollView>
      </View>
    </BackgroundWrapper>
  );
};
