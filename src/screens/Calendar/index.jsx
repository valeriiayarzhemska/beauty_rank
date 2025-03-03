import { ScrollView, View } from 'react-native';
import { BackgroundWrapper } from '../../components/BackgroundWrapper';

import { TextComponent } from '../../components/ui/TextComponent';
import { StarsGradient } from '../../assets/icons/StarsGradient';

import { textStyles } from '../../constants/constantsStyle';

import { styles } from './style';

export const Calendar = ({ navigation }) => {
  const stylesSchema = styles();

  return (
    <BackgroundWrapper isBgGradient={true}>
      <View style={stylesSchema.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={stylesSchema.contentContainer}
        >
          <View style={stylesSchema.content}>
            <StarsGradient />

            <View style={stylesSchema.titles}>
              <TextComponent
                styles={{
                  ...textStyles.bold,
                  fontSize: 24,
                  textAlign: 'center',
                }}
              >
                Beauty calendar
              </TextComponent>

              <TextComponent
                styles={{
                  ...textStyles.medium,
                  textAlign: 'center',
                }}
              >
                is coming
              </TextComponent>
            </View>
          </View>
        </ScrollView>
      </View>
    </BackgroundWrapper>
  );
};
