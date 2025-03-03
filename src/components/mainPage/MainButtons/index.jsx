import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { useSelector } from 'react-redux';
import { selectIsUserWoman } from '../../../store/redux/features/dashboard/dashboardSelectors';

import { TextComponent } from '../../ui/TextComponent';
import { Cosmetics } from '../../../assets/icons/Cosmetics';
import { Mirror } from '../../../assets/icons/Mirror';

import { textStyles } from '../../../constants/constantsStyle';
import { colors, windowWidth } from '../../../constants/constants';

import { styles } from './style';

export const MainButtons = ({ navigation }) => {
  const stylesSchema = styles();

  const isWoman = useSelector(selectIsUserWoman);

  const handleClick = screen => {
    navigation.navigate(screen);
  };

  return (
    <View style={stylesSchema.container}>
      <TouchableOpacity
        onPress={() => handleClick('Trends')}
        style={stylesSchema.itemContainer}
      >
        <View style={[stylesSchema.item]}>
          <Svg
            preserveAspectRatio="none"
            viewBox="0 0 178 63"
            fill="none"
            style={StyleSheet.absoluteFill}
          >
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 0C8.95431 0 0 8.9543 0 20V43C0 54.0457 8.9543 63 20 63H126.723C129.112 63 131.248 61.5682 132.351 59.4491C140.296 44.1869 155.003 33.0071 172.5 29.8822C175.582 29.3317 178 26.7617 178 23.6308V20C178 8.95431 169.046 0 158 0H20Z"
              fill={isWoman ? colors.purpleColor : colors.secondPurpleColor}
            />
          </Svg>

          <View style={stylesSchema.content}>
            <TextComponent
              styles={{
                ...textStyles.bold,
                fontSize: windowWidth < 380 ? 12 : 13,
                color: colors.whiteColor,
                textTransform: 'uppercase',
                maxWidth: 74,
              }}
            >
              Beauty Trends
            </TextComponent>

            <Cosmetics />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleClick('Calendar')}
        style={stylesSchema.itemContainer}
      >
        <View style={[stylesSchema.item]}>
          <Svg
            style={StyleSheet.absoluteFill}
            preserveAspectRatio="none"
            viewBox="0 0 178 63"
            fill="none"
          >
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M158 0C169.046 0 178 8.9543 178 20V43C178 54.0457 169.046 63 158 63H50.2768C47.8877 63 45.752 61.5682 44.6489 59.449C36.8397 44.4466 22.4958 33.3888 5.3905 30.0487C2.35755 29.4564 0 26.9062 0 23.816V20C0 8.95431 8.9543 0 20 0H158Z"
              fill={colors.secondPurpleColor}
            />
          </Svg>

          <View style={[stylesSchema.content, stylesSchema.contentRight]}>
            <Mirror />

            <TextComponent
              styles={{
                ...textStyles.bold,
                fontSize: windowWidth < 380 ? 12 : 13,
                color: colors.whiteColor,
                textTransform: 'uppercase',
                textAlign: 'right',
                maxWidth: 74,
              }}
            >
              Beauty Tips
            </TextComponent>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
