import { View } from 'react-native';

import { TextComponent } from '../../ui/TextComponent';
import { TextGradient } from '../../ui/TextGradient';
import { ButtonComponent } from '../../ui/buttons/ButtonComponent';

import { StarsGradient } from '../../../assets/icons/StarsGradient';

import { textStyles } from '../../../constants/constantsStyle';
import { colors } from '../../../constants/constants';

import { styles } from './style';

export const RatingScore = ({ textes = {}, handleNextClick = () => {} }) => {
  const stylesSchema = styles();

  const {
    subtitle = `You're among the top 5% of the most beautiful people worldwide!`,
    rank = 25,
    emotion = 'Passion',
    age = 27,
  } = textes;

  const handleButtonClick = () => {
    handleNextClick();
  };

  return (
    <View style={stylesSchema.container}>
      <View style={stylesSchema.titlesContainer}>
        <TextComponent
          styles={{
            ...textStyles.bold,
            fontSize: 32,
            color: colors.purpleColor,
          }}
        >
          Congratulations
        </TextComponent>

        <TextComponent
          styles={{
            ...textStyles.bold,
            fontSize: 20,
            textAlign: 'center',
          }}
        >
          {subtitle}
        </TextComponent>

        <StarsGradient />
      </View>

      <View style={stylesSchema.footer}>
        <View style={stylesSchema.scoreContainer}>
          <View style={stylesSchema.scoreText}>
            <TextComponent
              styles={{
                ...textStyles.bold,
                fontSize: 24,
              }}
            >
              Your global ranking position:
            </TextComponent>
          </View>

          <View style={stylesSchema.score}>
            <TextGradient
              style={{
                ...textStyles.black,
                fontSize: rank.toString().length > 3 ? 24 : 32,
              }}
            >
              {rank}
            </TextGradient>
          </View>
        </View>

        <View style={stylesSchema.descriptionContainer}>
          <View style={stylesSchema.description}>
            <TextComponent
              styles={{
                ...textStyles.semiBold,
                fontSize: 15,
                color: colors.darkGrayColor,
              }}
            >
              Emotion:
            </TextComponent>

            <TextComponent
              styles={{
                ...textStyles.bold,
                fontSize: 15,
              }}
            >
              {emotion}
            </TextComponent>
          </View>

          <View style={stylesSchema.description}>
            <TextComponent
              styles={{
                ...textStyles.semiBold,
                fontSize: 15,
                color: colors.darkGrayColor,
              }}
            >
              Age:
            </TextComponent>

            <TextComponent
              styles={{
                ...textStyles.bold,
                fontSize: 15,
              }}
            >
              {age}
            </TextComponent>
          </View>
        </View>
      </View>

      <View style={stylesSchema.buttonContainer}>
        <ButtonComponent
          text="Next"
          handleClick={handleButtonClick}
          stylesButton={{
            bgColor: colors.purpleColor,
            bColor: colors.purpleColor,
            textStyle: {
              ...textStyles.bold,
              color: colors.whiteColor,
              textTransform: 'uppercase',
            },
          }}
        />
      </View>
    </View>
  );
};
