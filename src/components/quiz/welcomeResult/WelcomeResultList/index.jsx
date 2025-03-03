import { View } from 'react-native';

import { WelcomeResultItem } from '../WelcomeResultItem';

import { welcomeResultCard } from '../../../../constants/constantsUI';

import { styles } from './style';

export const WelcomeResultList = ({ navigation, isUserWoman }) => {
  const stylesSchema = styles();

  return (
    <View style={stylesSchema.listContainer}>
      {welcomeResultCard.map(item => {
        return (
          <WelcomeResultItem
            key={item.id}
            item={item}
            isUserWoman={isUserWoman}
          />
        );
      })}
    </View>
  );
};
