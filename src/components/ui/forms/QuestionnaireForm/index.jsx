import { useEffect, useState } from 'react';
import { View } from 'react-native';
import * as Yup from 'yup';

import { useSelector } from 'react-redux';
import { selectToken } from '../../../../store/redux/features/auth/authSelectors';
import {
  useEditAnalysisMutation,
  useGetUserQuery,
} from '../../../../store/redux/services/user/userApi';

import { FormTemplate } from '../FormTemplate';
import { InputsTemplate } from '../../inputs/InputsTemplate';
import { ErrorMessage } from '../../../ErrorMessage';
import { RadioList } from '../../inputs/radioButtons/RadioList';
import { TextComponent } from '../../TextComponent';
import { Stars } from '../../../../assets/icons/Stars';

import { errorMessages } from '../../../../constants/constantsUI';

import { textStyles } from '../../../../constants/constantsStyle';
import {
  registerInputs,
  valuesNames,
} from '../../../../store/mocks/registration-quiz-mock';
import {
  shareInstagramInputs,
  validationSchemaInstagram,
  valuesNamesInstagram,
} from '../../../../store/mocks/share-instagram-mock';
import { validationSchema } from '../../../../store/validationSchema';

import { styles } from './style';

export const QuestionnaireForm = ({ navigation }) => {
  const stylesSchema = styles();

  const [inputs, setInputs] = useState([]);
  const [newInitialValues, setnewInitialValues] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const userToken = useSelector(selectToken);
  const {
    data: user,
    isFetching: isUserFetching,
    error: userError,
    refetch,
  } = useGetUserQuery(
    { token: userToken, IncludeImages: true },
    { skip: !userToken, refetchOnMountOrArgChange: true }
  );
  const [editUser, { isFetching, error: editError }] =
    useEditAnalysisMutation();

  const consentInput = shareInstagramInputs[valuesNamesInstagram.Consent];

  const handleSubmit = async values => {
    setError(null);

    const response = await editUser({
      data: { ...values, [valuesNames.Age]: Number(values[valuesNames.Age]) },
      token: userToken,
    });

    if (editError || response?.error) {
      setError(errorMessages.wentWrong);
    } else {
      await refetch();
      navigation.navigate('Profile');
    }
  };

  const loadData = () => {
    setIsLoading(true);

    const userValues = user?.analysis?.user;
    const initialValues = {
      [valuesNames.Name]: userValues?.name || '',
      [valuesNames.Country]: userValues?.country || '',
      [valuesNames.Age]: userValues?.age || '',
      [valuesNames.Profession]: userValues?.profession || '',
      [valuesNamesInstagram.Instagram]: userValues?.instagram || '',
      [valuesNamesInstagram.Consent]: userValues?.consent
        ? userValues.consent
        : false,
    };
    let newMock = [
      ...Object.values(registerInputs),
      shareInstagramInputs[valuesNamesInstagram.Instagram],
    ];

    newMock = newMock.map((input, index) => {
      return { ...input, id: index + 1 };
    });

    setInputs(newMock);
    setnewInitialValues(prevValues => ({ ...prevValues, ...initialValues }));
    setIsLoading(false);
  };

  useEffect(() => {
    if (!isUserFetching && user) {
      loadData();
    }
  }, [isUserFetching, user]);

  return (
    <View style={stylesSchema.container}>
      <TextComponent
        styles={{
          ...textStyles.bold,
          fontSize: 24,
          textAlign: 'center',
        }}
      >
        Edit Questionnaire
      </TextComponent>

      {!isLoading && (
        <FormTemplate
          initialValues={newInitialValues}
          validationSchema={Yup.object({
            [valuesNames.Name]: validationSchema.default,
            [valuesNames.Country]: validationSchema.default,
            [valuesNames.Age]: validationSchema.default,
            [valuesNames.Profession]: validationSchema.default,
            ...validationSchemaInstagram,
          })}
          handleSubmitForm={handleSubmit}
          isButtonLeft={true}
          buttonIcon={Stars}
          buttonText={'Update'}
        >
          {formProps => (
            <>
              <InputsTemplate
                formProps={formProps}
                inputsList={inputs}
              />

              <View style={stylesSchema.consent}>
                <View style={stylesSchema.consentText}>
                  <TextComponent
                    styles={{
                      ...textStyles.bold,
                      width: '100%',
                    }}
                  >
                    Do you agree to have your photo posted on our website?
                  </TextComponent>
                </View>

                <View style={stylesSchema.consentList}>
                  <RadioList
                    formProps={formProps}
                    name={consentInput.name}
                    radioList={consentInput.radioList}
                    radioListStyle={consentInput.radioListStyle}
                    isSmall
                  />
                </View>
              </View>

              {error && !isFetching && <ErrorMessage error={error} />}
            </>
          )}
        </FormTemplate>
      )}
    </View>
  );
};
