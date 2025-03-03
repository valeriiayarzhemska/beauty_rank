import React from 'react';
import { ScrollView, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';
import { selectPhotoToAnalize } from '../../store/redux/features/dashboard/dashboardSelectors';
import { setPhotoToAnalize } from '../../store/redux/features/dashboard/dashboardSlice';
import { selectIsFullyRegistred } from '../../store/redux/features/auth/authSelectors';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { TextComponent } from '../../components/ui/TextComponent';
import { ChoosePhoto } from '../../components/analyzingPhoto/ChoosePhoto';
import { ButtonComponent } from '../../components/ui/buttons/ButtonComponent';
import { StarsGradient } from '../../assets/icons/StarsGradient';

import { textStyles } from '../../constants/constantsStyle';

import { styles } from './style';

export const UploadAnalizePhoto = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const userPhotoToAnalize = useSelector(selectPhotoToAnalize);
  const isFullyRegistred = useSelector(selectIsFullyRegistred);

  const stylesSchema = styles(isFullyRegistred);

  const handleApplyClick = async () => {
    if (userPhotoToAnalize) {
      navigation.navigate('AnalizePhoto');
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      if (isFullyRegistred) {
        dispatch(setPhotoToAnalize(null));
      }
    }, [])
  );

  return (
    <BackgroundWrapper isBgGradient={true}>
      <View style={stylesSchema.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={stylesSchema.contentContainer}
        >
          <View style={stylesSchema.wrapper}>
            <View style={stylesSchema.title}>
              <StarsGradient />

              <TextComponent
                styles={{
                  ...textStyles.bold,
                  fontSize: 24,
                  textAlign: 'center',
                }}
              >
                Upload your best photo for analysis!
              </TextComponent>
            </View>

            <View style={stylesSchema.uploadedContainer}>
              <ChoosePhoto />
            </View>

            <View style={stylesSchema.buttonContainer}>
              <ButtonComponent
                text={'Apply'}
                handleClick={handleApplyClick}
                isDisabled={!userPhotoToAnalize}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </BackgroundWrapper>
  );
};
