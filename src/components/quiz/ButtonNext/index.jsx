import { useEffect, useState } from 'react';
import { View } from 'react-native';

import { useSelector } from 'react-redux';
import { selectIsUserWoman } from '../../../store/redux/features/dashboard/dashboardSelectors';

import { ButtonComponent } from '../../ui/buttons/ButtonComponent';
import { Stars } from '../../../assets/icons/Stars';

import { colors } from '../../../constants/constants';
import { textStyles } from '../../../constants/constantsStyle';

import { styles } from './style';

export const ButtonNext = ({
  checkValidation = true,
  handleClick = () => {},
}) => {
  const stylesSchema = styles();

  const isWoman = useSelector(selectIsUserWoman);

  const [isUserWoman, setIsUserWoman] = useState(isWoman);

  const handleButtonClick = () => {
    if (handleClick) {
      handleClick();
    }
  };

  useEffect(() => {
    setIsUserWoman(isWoman);
  }, [isWoman]);

  return (
    <View style={stylesSchema.buttonContainer}>
      <ButtonComponent
        text="Next"
        handleClick={handleButtonClick}
        stylesButton={{
          bgColor: isUserWoman ? colors.secondPurpleColor : colors.purpleColor,
          bColor: isUserWoman ? colors.secondPurpleColor : colors.purpleColor,
          textStyle: {
            ...textStyles.semiBold,
            color: colors.whiteColor,
            textTransform: 'uppercase',
          },
        }}
        icon={Stars}
        isSquare={true}
        // isDisabled={checkValidation}
      />
    </View>
  );
};
