import { useCallback, useEffect, useRef, useState } from 'react';
import { TextInput, View } from 'react-native';
import Slider from 'rn-range-slider';

import Thumb from '../Thumb';
import Rail from '../Rail';
import RailSelected from '../RailSelected';
import Label from '../Label';
import Notch from '../Notch';
import { TextComponent } from '../../../TextComponent';
import { HalfCircle } from '../../../../../assets/icons/HalfCircle';

import { colors } from '../../../../../constants/constants';
import { textStyles } from '../../../../../constants/constantsStyle';

import { styles } from './style';

export const Range = ({
  formProps,
  item = {},
  color = colors.secondPurpleColor,
  isClicked,
}) => {
  const stylesSchema = styles();

  const {
    step,
    minValue,
    maxValue,
    name,
    type,
    recommended,
    defaultValue = false,
  } = item;

  const inputRef = useRef();

  const purpleWidth = Math.trunc((recommended[0] / maxValue) * 100);
  const orangeYellowWidth = Math.trunc(
    ((recommended[1] / purpleWidth) * 100) / 2
  );
  const general = purpleWidth + orangeYellowWidth * 2;

  const sections = [
    {
      color: color,
      width: purpleWidth,
    },
    {
      color: colors.orangeColor,
      width: orangeYellowWidth,
    },
    {
      color: colors.yellowColor,
      width:
        general > 100
          ? 100 - (purpleWidth + orangeYellowWidth)
          : orangeYellowWidth,
    },
  ];

  const [rangeDisabled, setRangeDisabled] = useState(false);
  const [low, setLow] = useState(formProps?.values?.[name] || minValue);
  const [high, setHigh] = useState(100);
  const [min, setMin] = useState(minValue);
  const [max, setMax] = useState(maxValue);

  const renderThumb = useCallback(
    name => (
      <Thumb
        color={color}
        name={name}
      />
    ),
    []
  );
  const renderRail = useCallback(() => <Rail sections={sections} />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);

  const setFieldValue = async () => {
    await formProps?.setFieldValue(name, low);
  };

  const handleValueChange = useCallback((lowValue, highValue) => {
    setLow(lowValue);
    setHigh(highValue);
  }, []);

  useEffect(() => {
    if (isClicked) {
      setFieldValue();
    }
  }, [isClicked]);

  useEffect(() => {
    if (defaultValue) {
      setLow(defaultValue);
    }
  }, [defaultValue]);

  return (
    <>
      <View style={stylesSchema.container}>
        <View style={stylesSchema.textContainer}>
          <TextComponent
            styles={{
              ...textStyles.semiBold,
              fontSize: 15,
              color: colors.darkGrayColor,
            }}
          >
            Every:
          </TextComponent>

          <TextComponent
            styles={{
              ...textStyles.bold,
              fontSize: 15,
              color: colors.blackColor,
            }}
          >
            {`${low} ${low === 1 ? type.slice(0, -1) : type}`}
          </TextComponent>
        </View>

        <TextInput
          name={name}
          style={stylesSchema.none}
          value={low}
          onChangeText={formProps?.handleChange(name)}
        />

        <Slider
          style={stylesSchema.slider}
          min={min}
          max={max}
          step={step}
          low={low}
          disableRange={true}
          renderThumb={renderThumb}
          renderRail={renderRail}
          renderRailSelected={renderRailSelected}
          renderLabel={renderLabel}
          renderNotch={renderNotch}
          onValueChanged={handleValueChange}
        />

        <View style={stylesSchema.recommended}>
          <HalfCircle />

          <TextComponent
            styles={{
              ...textStyles.semiBold,
              fontSize: 13,
              color: colors.darkOrangeColor,
            }}
          >
            Recommended
          </TextComponent>
        </View>
      </View>
    </>
  );
};
