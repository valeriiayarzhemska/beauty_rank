import { Fragment, useCallback } from 'react';

import { Input } from '../Input';
import { InputLabel } from '../InputLabel';

import { View } from 'react-native';
import { TextComponent } from '../../TextComponent';
import { fieldTypes } from '../../../../constants/constants';

import { styles } from './style';
import { InputCheckbox } from '../InputCheckbox';
import { RadioList } from '../radioButtons/RadioList';
import { InputSelect } from '../InputSelect';
import { MultiRadioList } from '../radioButtons/MultiRadioList';
import { Range } from '../InputRange/Range';
import { InputDate } from '../InputDate';
import { textStyles } from '../../../../constants/constantsStyle';

export const InputsTemplate = ({
  formProps,
  isRow = false,
  children,
  inputsList = [],
  isWithoutButton = false,
  isDataLoading = false,
  setMultiSelectRefs = () => {},
  setInputsRefs = () => {},
  setSearchValues = () => {},
  setDatePickerRefs = () => {},
  setCheckboxesRefs = () => {},
  setStatesInputsFromTo = () => {},
  isResetClicked = false,
  setIsResetClicked = () => {},
}) => {
  const stylesSchema = styles();

  const InputType = useCallback(
    (item, formProps) => {
      switch (item?.fieldType) {
        case fieldTypes.text:
          return (
            <Input
              key={item?.id}
              formProps={formProps?.formProps}
              label={InputLabel}
              setInputsRefs={setInputsRefs}
              setIsResetClicked={setIsResetClicked}
              {...Object.keys(item).reduce((acc, key) => {
                if (key !== 'fieldType') {
                  acc[key] = item[key];
                }
                return acc;
              }, {})}
            />
          );
        case fieldTypes.select:
          return (
            <InputSelect
              key={item?.id}
              formProps={formProps?.formProps}
              label={InputLabel}
              {...Object.keys(item).reduce((acc, key) => {
                if (key !== 'fieldType') {
                  acc[key] = item[key];
                }
                return acc;
              }, {})}
            />
          );
        case fieldTypes.checkbox:
          return (
            <InputCheckbox
              key={item?.id}
              formProps={formProps?.formProps}
              setCheckboxesRefs={setCheckboxesRefs}
              {...Object.keys(item).reduce((acc, key) => {
                if (key !== 'fieldType') {
                  acc[key] = item[key];
                }
                return acc;
              }, {})}
            />
          );
        case fieldTypes.radioList:
          return (
            <RadioList
              key={item?.id}
              formProps={formProps?.formProps}
              {...Object.keys(item).reduce((acc, key) => {
                if (key !== 'fieldType') {
                  acc[key] = item[key];
                }
                return acc;
              }, {})}
            />
          );
        case fieldTypes.radioListMulti:
          return (
            <MultiRadioList
              key={item?.id}
              formProps={formProps?.formProps}
              {...Object.keys(item).reduce((acc, key) => {
                if (key !== 'fieldType') {
                  acc[key] = item[key];
                }
                return acc;
              }, {})}
            />
          );
        case fieldTypes.range:
          return (
            <Range
              key={item?.id}
              formProps={formProps?.formProps}
              {...Object.keys(item).reduce((acc, key) => {
                if (key !== 'fieldType') {
                  acc[key] = item[key];
                }
                return acc;
              }, {})}
            />
          );
        case fieldTypes.date:
          return (
            <InputDate
              key={item?.id}
              formProps={formProps?.formProps}
              label={InputLabel}
              {...Object.keys(item).reduce((acc, key) => {
                if (key !== 'fieldType') {
                  acc[key] = item[key];
                }
                return acc;
              }, {})}
            />
          );
        /* case fieldTypes.defaultSearch:
        return (
          <InputDefaultSearch
            key={item?.id}
            formProps={formProps?.formProps}
            label={InputLabel}
            setSearchValues={setSearchValues}
            {...Object.keys(item).reduce((acc, key) => {
              if (key !== 'fieldType') {
                acc[key] = item[key];
              }
              return acc;
            }, {})}
          />
        );
      case fieldTypes.select:
      case fieldTypes.multiselect:
        return (
          <InputSelect
            key={item?.id}
            formProps={formProps?.formProps}
            label={InputLabel}
            isWithoutButton={isWithoutButton}
            setIsResetClicked={setIsResetClicked}
            setMultiSelectRefs={setMultiSelectRefs}
            {...Object.keys(item).reduce((acc, key) => {
              acc[key] = item[key];

              return acc;
            }, {})}
          />
        );
      case fieldTypes.selectDepedent:
      case fieldTypes.multiselectDepedent:
        return (
          <InputSelectDepedent
            key={item?.id}
            formProps={formProps?.formProps}
            label={InputLabel}
            isWithoutButton={isWithoutButton}
            setIsResetClicked={setIsResetClicked}
            setMultiSelectRefs={setMultiSelectRefs}
            {...Object.keys(item).reduce((acc, key) => {
              acc[key] = item[key];

              return acc;
            }, {})}
          />
        );
      case fieldTypes.fromTo:
        return (
          <InputFromTo
            key={item?.id}
            formProps={formProps?.formProps}
            label={InputLabel}
            setIsResetClicked={setIsResetClicked}
            setStatesInputsFromTo={setStatesInputsFromTo}
            {...Object.keys(item).reduce((acc, key) => {
              if (key !== 'fieldType') {
                acc[key] = item[key];
              }
              return acc;
            }, {})}
          />
        );
      case fieldTypes.calendar:
        return (
          <InputCalendar
            key={item?.id}
            formProps={formProps?.formProps}
            label={InputLabel}
            setIsResetClicked={setIsResetClicked}
            setDatePickerRefs={setDatePickerRefs}
            {...Object.keys(item).reduce((acc, key) => {
              if (key !== 'fieldType') {
                acc[key] = item[key];
              }
              return acc;
            }, {})}
          />
        );
      case fieldTypes.keywords:
        return (
          <InputKeywords
            key={item?.id}
            formProps={formProps?.formProps}
            label={InputLabel}
            setIsResetClicked={setIsResetClicked}
            {...Object.keys(item).reduce((acc, key) => {
              if (key !== 'fieldType') {
                acc[key] = item[key];
              }
              return acc;
            }, {})}
          />
        );
      case fieldTypes.toggle:
        return (
          <ToggleGroupTemplate
            key={item?.id}
            formProps={formProps?.formProps}
            {...Object.keys(item).reduce((acc, key) => {
              if (key !== 'fieldType') {
                acc[key] = item[key];
              }
              return acc;
            }, {})}
          />
        );
      case fieldTypes.checkboxList:
        return (
          <CheckboxList
            key={item?.id}
            formProps={formProps?.formProps}
            setCheckboxesRefs={setCheckboxesRefs}
            {...Object.keys(item).reduce((acc, key) => {
              if (key !== 'fieldType') {
                acc[key] = item[key];
              }
              return acc;
            }, {})}
          />
        );
      case fieldTypes.radio:
        return (
          <RadioGroupTemplate
            key={item?.id}
            formProps={formProps?.formProps}
            {...Object.keys(item).reduce((acc, key) => {
              if (key !== 'fieldType') {
                acc[key] = item[key];
              }
              return acc;
            }, {})}
          />
        );
      case fieldTypes.textarea:
      case fieldTypes.textareaDefaultValue:
        return (
          <InputTextarea
            key={item?.id}
            formProps={formProps?.formProps}
            label={InputLabel}
            isWithoutButton={isWithoutButton}
            {...Object.keys(item).reduce((acc, key) => {
              acc[key] = item[key];

              return acc;
            }, {})}
          />
        );
      case fieldTypes.minMax:
        return (
          <InputMinMax
            key={item?.id}
            formProps={formProps?.formProps}
            {...Object.keys(item).reduce((acc, key) => {
              if (key !== 'fieldType') {
                acc[key] = item[key];
              }
              return acc;
            }, {})}
          />
        ); */
        default:
          return (
            <Input
              key={item?.id}
              formProps={formProps?.formProps}
              label={InputLabel}
              setInputsRefs={setInputsRefs}
              setIsResetClicked={setIsResetClicked}
              {...Object.keys(item).reduce((acc, key) => {
                if (key !== 'fieldType') {
                  acc[key] = item[key];
                }
                return acc;
              }, {})}
            />
          );
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [inputsList]
  );

  return (
    <>
      {inputsList.length > 0 &&
        inputsList?.map((item, index) => (
          <Fragment key={index}>
            {item?.subtitle && (
              <View
                style={
                  item?.subtitleStyles
                    ? { ...item.subtitleStyles }
                    : stylesSchema.subtitleContainer
                }
              >
                <TextComponent
                  styles={[
                    { ...textStyles.bold, fontSize: 20 },
                    item?.subtitleStylesText ? item.subtitleStylesText : {},
                  ]}
                >
                  {item.subtitle}
                </TextComponent>
              </View>
            )}

            <View
              style={[
                stylesSchema.inputContainer,
                isRow ? stylesSchema.halfWidth : stylesSchema.fullWidth,
              ]}
            >
              <InputType
                formProps={formProps}
                isResetClicked={isResetClicked}
                isDataLoading={isDataLoading}
                {...item}
              />
            </View>
          </Fragment>
        ))}
    </>
  );
};
