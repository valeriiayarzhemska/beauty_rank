import { useState } from 'react';
import { View } from 'react-native';

import { ToggleItem } from '../ToggleItem';

import { styles } from './style';

export const ToggleList = ({
  toggleList = [],
  defaultValue = null,
  handleSelect = () => {},
}) => {
  const stylesSchema = styles();

  const [selectedValue, setSelectedValue] = useState(
    defaultValue ? defaultValue.value : null
  );

  const handleClick = toggle => {
    if (selectedValue !== toggle.value) {
      setSelectedValue(toggle.value);

      handleSelect(toggle.value);
    }
  };

  return (
    <>
      <View style={stylesSchema.container}>
        {toggleList.map((item, index) => {
          return (
            <ToggleItem
              key={item.id}
              item={item}
              selectedValue={selectedValue}
              handleClick={handleClick}
            />
          );
        })}
      </View>
    </>
  );
};
