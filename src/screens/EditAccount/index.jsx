import { ScrollView, View } from 'react-native';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { EditAccountForm } from '../../components/ui/forms/EditAccountForm';

import { styles } from './style';
import { BackButton } from '../../components/ui/buttons/BackButton';

export const EditAccount = ({ navigation }) => {
  const stylesSchema = styles();

  return (
    <BackgroundWrapper isBgGradient={true}>
      <View style={stylesSchema.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={stylesSchema.contentContainer}
        >
          <BackButton navigation={navigation} />

          <EditAccountForm navigation={navigation} />
        </ScrollView>
      </View>
    </BackgroundWrapper>
  );
};
