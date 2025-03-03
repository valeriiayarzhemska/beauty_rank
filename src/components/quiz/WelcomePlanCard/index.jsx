import { useEffect, useState } from 'react';

import { Image, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { selectIsUserWoman } from '../../../store/redux/features/dashboard/dashboardSelectors';
import { setBeautyPlanValues } from '../../../store/redux/features/dashboard/dashboardSlice';

import { ButtonComponent } from '../../ui/buttons/ButtonComponent';
import { ButtonTextComponent } from '../../ui/buttons/ButtonTextComponent';
import { TextComponent } from '../../ui/TextComponent';

import WomanAnimals from '../../../assets/images/woman-animals.png';
import Man from '../../../assets/images/man-in-chair.png';
import { Stars } from '../../../assets/icons/Stars';
import { StarGradient } from '../../../assets/icons/StarGradient';

import { textStyles } from '../../../constants/constantsStyle';
import { colors, windowHeight } from '../../../constants/constants';

import { styles } from './style';

export const WelcomePlanCard = ({ navigation }) => {
  const stylesSchema = styles();

  const dispatch = useDispatch();
  const isWoman = useSelector(selectIsUserWoman);

  const [isUserWoman, setIsUserWoman] = useState(isWoman);

  const handleLetsGoClick = () => {
    navigation.navigate('BeautyPlan');
  };

  const handleSetupLaterClick = () => {
    dispatch(setBeautyPlanValues({}));
    navigation.navigate('ShareInstagram');
  };

  useEffect(() => {
    setIsUserWoman(isWoman);
  }, [isWoman]);

  return (
    <View style={stylesSchema.container}>
      <View style={stylesSchema.titlesContainer}>
        <TextComponent
          styles={{
            ...textStyles.bold,
            fontSize: windowHeight < 760 ? 23 : 24,
            textAlign: 'center',
          }}
        >
          Let’s Create Your Beauty Plan
        </TextComponent>

        <View style={stylesSchema.listContainer}>
          <View
            style={[
              stylesSchema.itemContainer,
              {
                paddingBottom: 8,
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(234, 234, 234, 0.92)',
              },
            ]}
          >
            <View>
              <StarGradient />
            </View>

            <TextComponent styles={{ ...textStyles.regular, width: '92%' }}>
              We’ll use your answers to plan treatments just for you
            </TextComponent>
          </View>

          <View style={stylesSchema.itemContainer}>
            <View>
              <StarGradient />
            </View>

            <TextComponent styles={{ ...textStyles.regular, width: '92%' }}>
              Get a customized calendar to stay on top of your beauty routine
            </TextComponent>
          </View>
        </View>
      </View>

      <View style={stylesSchema.subtitlesContainer}>
        <TextComponent
          styles={{
            ...textStyles.bold,
            fontSize: windowHeight < 760 ? 18 : 20,
            textAlign: 'center',
          }}
        >
          Our users save an average of 12 hours a year!
        </TextComponent>

        <TextComponent styles={{ ...textStyles.regular, textAlign: 'center' }}>
          Imagine what you could do with that time:
        </TextComponent>
      </View>

      <View style={stylesSchema.imageContainer}>
        <Image
          source={isUserWoman ? WomanAnimals : Man}
          style={stylesSchema.image}
        />
      </View>

      <View style={stylesSchema.buttonsContainer}>
        <View style={stylesSchema.buttonContainer}>
          <ButtonComponent
            text="Let’s Go!"
            handleClick={handleLetsGoClick}
            stylesButton={{
              bgColor: isUserWoman
                ? colors.secondPurpleColor
                : colors.purpleColor,
              bColor: isUserWoman
                ? colors.secondPurpleColor
                : colors.purpleColor,
              textStyle: {
                ...textStyles.semiBold,
                color: colors.whiteColor,
                textTransform: 'uppercase',
              },
            }}
            icon={Stars}
          />
        </View>

        <View style={stylesSchema.buttonContainer}>
          <ButtonTextComponent
            text="Set up later"
            handleClick={handleSetupLaterClick}
            stylesButton={{
              textStyle: {
                ...textStyles.semiBold,
                color: colors.purpleColor,
                textDecorationLine: 'underline',
              },
            }}
          />
        </View>
      </View>
    </View>
  );
};
