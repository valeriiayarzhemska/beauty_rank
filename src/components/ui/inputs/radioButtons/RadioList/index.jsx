import { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';

import { CustomRadioButton } from '../CustomRadioButton';

import { styles } from './style';

export const RadioList = ({
  formProps,
  name,
  radioList = [],
  radioListStyle = {},
  isSmall = false,
}) => {
  const stylesSchema = styles(isSmall);

  const [selectedValue, setSelectedValue] = useState(null);

  const inputRef = useRef();

  const handleClick = radio => {
    if (selectedValue !== radio.value) {
      setSelectedValue(radio.value);
      formProps.setFieldValue(name, radio.value);
    }
  };

  useEffect(() => {
    setSelectedValue(formProps.values[name]);
  }, [formProps.values[name]]);

  return (
    <>
      <View style={stylesSchema.container}>
        {radioList?.map(radio => {
          return (
            <CustomRadioButton
              key={radio.id}
              radio={radio}
              selectedValue={selectedValue}
              formProps={formProps}
              handleClick={handleClick}
              radioListStyle={radioListStyle}
              name={name}
            />
          );
        })}
      </View>
    </>
  );
};
