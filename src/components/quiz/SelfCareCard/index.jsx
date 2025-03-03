import { useEffect, useState } from 'react';

import { Image, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { selectIsUserWoman } from '../../../store/redux/features/dashboard/dashboardSelectors';

import { TextComponent } from '../../ui/TextComponent';
import { ButtonNext } from '../ButtonNext';

import Woman from '../../../assets/images/woman-pictures.png';
import Man from '../../../assets/images/man-on-scooter.png';

import { textStyles } from '../../../constants/constantsStyle';
import { windowHeight } from '../../../constants/constants';

import { styles } from './style';

export const SelfCareCard = ({ navigation }) => {
  const stylesSchema = styles();

  const dispatch = useDispatch();
  const isWoman = useSelector(selectIsUserWoman);

  const [isUserWoman, setIsUserWoman] = useState(isWoman);

  const handleClick = () => {
    navigation.navigate('WelcomeBeautyPlan');
  };

  useEffect(() => {
    setIsUserWoman(isWoman);
  }, [isWoman]);

  return (
    <View style={stylesSchema.container}>
      <View style={stylesSchema.titleContainer}>
        <TextComponent
          styles={{
            ...textStyles.bold,
            fontSize: windowHeight < 760 ? 23 : 24,
            textAlign: 'center',
          }}
        >
          Every person is unique and beautiful all it takes is a little
          self-care.
        </TextComponent>
      </View>

      <View style={stylesSchema.imageContainer}>
        <Image
          source={isUserWoman ? Woman : Man}
          style={stylesSchema.image}
        />
      </View>

      <View style={stylesSchema.titleContainer}>
        <TextComponent
          styles={{
            ...textStyles.bold,
            fontSize: windowHeight < 760 ? 23 : 24,
            textAlign: 'center',
          }}
        >
          Let us help you unveil your natural beauty
        </TextComponent>
      </View>

      <ButtonNext handleClick={handleClick} />
    </View>
  );
};
