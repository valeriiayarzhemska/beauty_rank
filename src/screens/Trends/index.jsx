import { ScrollView, View } from 'react-native';
import { BackgroundWrapper } from '../../components/BackgroundWrapper';

import { TrendsList } from '../../components/beautyTrends/TrendsList';
import { TextComponent } from '../../components/ui/TextComponent';

import { textStyles } from '../../constants/constantsStyle';
import { colors } from '../../constants/constants';

import { styles } from './style';

export const Trends = ({ navigation }) => {
  const stylesSchema = styles();

  return (
    <BackgroundWrapper isBgGradient={true}>
      <View style={stylesSchema.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={stylesSchema.contentContainer}
        >
          <View style={stylesSchema.title}>
            <TextComponent
              styles={{
                ...textStyles.bold,
                fontSize: 24,
                textAlign: 'center',
                color: colors.whiteColor,
              }}
            >
              Current Beauty Trends
            </TextComponent>
          </View>

          <TrendsList navigation={navigation} />
        </ScrollView>
      </View>
    </BackgroundWrapper>
  );
};
