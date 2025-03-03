import { useRef, useState } from 'react';
import { View } from 'react-native';

import { CustomRadioButton } from '../CustomRadioButton';

import { styles } from './style';

export const MultiRadioList = ({
  formProps,
  name,
  radioList = [],
  radioListStyle = {},
  isFull = false,
}) => {
  const stylesSchema = styles(isFull);

  const [selectedValues, setSelectedValues] = useState(
    formProps?.values?.[name]?.length > 0 ? formProps.values[name] : []
  );

  const inputRef = useRef();

  const handleClick = async radio => {
    const value = radio.value;
    let newSelectedValues = [];

    setSelectedValues(prevSelectedValues => {
      if (prevSelectedValues.includes(value)) {
        newSelectedValues = prevSelectedValues.filter(item => item !== value);
      } else {
        newSelectedValues = [...prevSelectedValues, value];
      }

      return newSelectedValues;
    });

    await formProps.setFieldValue(name, newSelectedValues);
  };

  return (
    <View style={[stylesSchema.container, {}]}>
      {radioList.map(radio => (
        <View
          key={radio.id}
          style={stylesSchema.itemContainer}
        >
          <CustomRadioButton
            radio={radio}
            selectedValue={selectedValues}
            isMultiSelect={true}
            formProps={formProps}
            handleClick={handleClick}
            radioListStyle={radioListStyle}
            name={name}
          />
        </View>
      ))}
    </View>
  );
};
