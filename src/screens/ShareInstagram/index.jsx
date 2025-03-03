import { ScrollView, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { selectIsSkipVisible } from '../../store/redux/features/dashboard/dashboardSelectors';
import { setIsSkipVisible } from '../../store/redux/features/dashboard/dashboardSlice';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { ShareInstagramForm } from '../../components/ui/forms/ShareInstagramForm';

import { useEffect, useState } from 'react';

import { ButtonTextComponent } from '../../components/ui/buttons/ButtonTextComponent';

import { colors } from '../../constants/constants';
import { textStyles } from '../../constants/constantsStyle';

import { mock } from '../../store/mocks/share-instagram-mock';

import { styles } from './style';

export const ShareInstagram = ({ navigation }) => {
  const stylesSchema = styles();

  const [isSkipButtonVisible, setIsSkipButtonVisible] = useState(true);
  const [isSkipClicked, setIsSkipClicked] = useState(false);

  const dispatch = useDispatch();
  const isSkip = useSelector(selectIsSkipVisible);

  const handleButtonClick = () => {
    dispatch(setIsSkipVisible(false));
    setIsSkipClicked(true);
  };

  useEffect(() => {
    setIsSkipButtonVisible(isSkip);
  }, [isSkip]);

  return (
    <BackgroundWrapper isBgGradient={true}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={stylesSchema.container}
      >
        <ShareInstagramForm
          navigation={navigation}
          setIsSkipButtonVisible={setIsSkipButtonVisible}
          isSkipClicked={isSkipClicked}
          setIsSkipClicked={setIsSkipClicked}
          mock={mock}
        />

        {isSkipButtonVisible && (
          <View style={stylesSchema.buttonContainer}>
            <ButtonTextComponent
              text="Skip"
              handleClick={handleButtonClick}
              stylesButton={{
                textStyle: {
                  ...textStyles.bold,
                  fontSize: 18,
                  color: colors.whiteColor,
                  textAlign: 'center',
                  textDecorationLine: 'underline',
                },
              }}
            />
          </View>
        )}
      </ScrollView>
    </BackgroundWrapper>
  );
};
