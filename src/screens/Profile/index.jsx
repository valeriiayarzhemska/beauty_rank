import { ScrollView, View } from 'react-native';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { SettingsList } from '../../components/profileComponents/SettingsList';

import { styles } from './style';

export const Profile = ({ navigation }) => {
  const stylesSchema = styles();

  return (
    <BackgroundWrapper isBgGradient={true}>
      <View style={stylesSchema.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={stylesSchema.contentContainer}
        >
          <SettingsList navigation={navigation} />
        </ScrollView>
      </View>
    </BackgroundWrapper>
  );
};
