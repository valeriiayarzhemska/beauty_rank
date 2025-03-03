import { useEffect, useState } from 'react';
import { Image, View } from 'react-native';

import { useSelector } from 'react-redux';
import { selectIsUserWoman } from '../../../../store/redux/features/dashboard/dashboardSelectors';

import { ButtonComponent } from '../../../ui/buttons/ButtonComponent';
import { TextComponent } from '../../../ui/TextComponent';

import People from '../../../../assets/images/people.png';
import { Stars } from '../../../../assets/icons/Stars';
import { TitleSeparator } from '../../../ui/TitleSeparator';
import { WelcomeResultList } from '../WelcomeResultList';

import { textStyles } from '../../../../constants/constantsStyle';
import { colors } from '../../../../constants/constants';

import { styles } from './style';

export const WelcomeResultCard = ({ navigation }) => {
  const isWoman = useSelector(selectIsUserWoman);

  const [isUserWoman, setIsUserWoman] = useState(isWoman);

  const stylesSchema = styles();

  const handleClick = () => {
    navigation.navigate('Registration', { isNoBackButton: true });
  };

  useEffect(() => {
    setIsUserWoman(isWoman);
  }, [isWoman]);

  return (
    <View style={stylesSchema.container}>
      <View style={stylesSchema.titlesContainer}>
        <TextComponent
          styles={{ ...textStyles.bold, fontSize: 24, textAlign: 'center' }}
        >
          Here’s what you’ll get with your result:
        </TextComponent>
      </View>

      <WelcomeResultList isUserWoman={isUserWoman} />

      <TitleSeparator title={'and more'} />

      <View style={stylesSchema.subtitlesContainer}>
        <TextComponent
          styles={{
            ...textStyles.bold,
            fontSize: 20,
            textAlign: 'center',
          }}
        >
          We think you'll love it!
        </TextComponent>
      </View>

      <View style={stylesSchema.imageContainer}>
        <Image
          source={People}
          style={stylesSchema.image}
        />
      </View>

      <View style={stylesSchema.buttonContainer}>
        <ButtonComponent
          text="Move on to the fun"
          handleClick={handleClick}
          stylesButton={{
            bgColor: isUserWoman
              ? colors.secondPurpleColor
              : colors.purpleColor,
            bColor: isUserWoman ? colors.secondPurpleColor : colors.purpleColor,
            textStyle: {
              ...textStyles.semiBold,
              color: colors.whiteColor,
              textTransform: 'uppercase',
            },
          }}
          icon={Stars}
        />
      </View>
    </View>
  );
};
