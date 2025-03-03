import { Platform, TouchableOpacity, View } from 'react-native';

import { BlurView } from '@react-native-community/blur';

import BlurMan from '../../../assets/images/blur-calendar-man.png';
import BlurWoman from '../../../assets/images/blur-calendar-woman.png';
import { TextComponent } from '../../ui/TextComponent';
import { StarGradient } from '../../../assets/icons/StarGradient';
import { Arrow } from '../../../assets/icons/Arrow';

import { textStyles } from '../../../constants/constantsStyle';
import { colors } from '../../../constants/constants';
import { createWeekArray } from '../../../utils/utils';

import { styles } from './style';
import { useState } from 'react';
import FastImage from 'react-native-fast-image';
import { useSelector } from 'react-redux';
import { selectIsUserWoman } from '../../../store/redux/features/dashboard/dashboardSelectors';

export const MainCalendar = ({ navigation }) => {
  const stylesSchema = styles();

  const isWoman = useSelector(selectIsUserWoman);

  const [isVisible, setIsVisible] = useState(false);

  const days = createWeekArray();

  const handleClick = () => {
    // to finish must be calendar
    // navigation.navigate('Calendar');
  };

  const handleVisible = () => {
    setTimeout(() => {
      setIsVisible(true);
    }, 800);
  };

  return (
    <View style={stylesSchema.container}>
      {days.map((day, index) => {
        const isToday = index === 3;

        if (index === days.length - 1) {
          handleVisible();
        }

        return (
          <TouchableOpacity
            key={index}
            onPress={handleClick}
            style={stylesSchema.itemContainer}
          >
            <>
              <View
                style={[
                  stylesSchema.item,
                  isToday ? stylesSchema.itemSelected : {},
                ]}
              >
                {/* <BlurView
                  style={stylesSchema.blurBackground}
                  blurType="light"
                  blurAmount={Platform.OS === 'android' ? 15 : 4}
                  reducedTransparencyFallbackColor="rgba(255, 255, 255, 0.2)"
                > */}

                {!isToday && (
                  <FastImage
                    style={stylesSchema.imageBg}
                    source={isWoman ? BlurWoman : BlurMan}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                )}
                
                {isVisible && (
                  <View style={stylesSchema.content}>
                    {isToday && (
                      <View>
                        <StarGradient size={10} />
                      </View>
                    )}

                    <TextComponent
                      styles={{
                        ...textStyles.bold,
                        fontSize: 13,
                        color: isToday ? colors.blackColor : colors.whiteColor,
                      }}
                    >
                      {day.date}
                    </TextComponent>

                    <TextComponent
                      styles={{
                        ...textStyles.medium,
                        fontSize: 11,
                        color: isToday
                          ? colors.grayCounters
                          : colors.whiteColor,
                      }}
                    >
                      {day.day}
                    </TextComponent>
                  </View>
                )}
                {/* </BlurView> */}
              </View>

              {isToday && <Arrow />}
            </>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
