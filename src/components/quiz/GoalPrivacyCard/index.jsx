import {
  Linking,
  Image,
  ScrollView,
  useWindowDimensions,
  View,
} from 'react-native';

import { TextComponent } from '../../ui/TextComponent';
import { ButtonNext } from '../ButtonNext';
import { ButtonTextComponent } from '../../ui/buttons/ButtonTextComponent';
import Puzzles from '../../../assets/images/puzzles.png';

import { colors } from '../../../constants/constants';
import { textStyles } from '../../../constants/constantsStyle';

import { styles } from './style';

export const GoalPrivacyCard = ({ navigation, item, isButtonVisible }) => {
  const { scale } = useWindowDimensions();

  const stylesSchema = styles(scale);

  const handleClickNext = () => {
    navigation.navigate('WelcomeQuiz');
  };

  const handlePolicyClick = () => {
    Linking.openURL('https://beauty-mirror.com/privacy-policy.html');
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={stylesSchema.scrollContainer}
        style={stylesSchema.container}
      >
        <View style={stylesSchema.imageContainer}>
          <Image
            source={Puzzles}
            style={stylesSchema.image}
          />
        </View>

        <View style={stylesSchema.titlesContainer}>
          <TextComponent
            styles={{ ...textStyles.bold, fontSize: 24, textAlign: 'center' }}
          >
            We care about your privacy
          </TextComponent>

          <View style={stylesSchema.subtitlesContainer}>
            <TextComponent
              styles={{
                ...textStyles.regular,
                fontSize: 20,
                textAlign: 'center',
              }}
            >
              All the data you provide is anonymous and used only for
              statistical purposes. Your responses help us tailor the app to
              better suit your needs.
            </TextComponent>

            <ButtonTextComponent
              text={'Privacy Policy'}
              stylesButton={{
                textStyle: {
                  ...textStyles.regular,
                  fontSize: 20,
                  color: colors.secondPurpleColor,
                  textDecorationLine: 'underline',
                },
              }}
              handleClick={handlePolicyClick}
            />
          </View>
        </View>
      </ScrollView>

      {isButtonVisible && <ButtonNext handleClick={handleClickNext} />}
    </>
  );
};
