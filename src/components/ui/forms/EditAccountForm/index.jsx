import { useEffect, useState } from 'react';
import { View } from 'react-native';
import * as Yup from 'yup';

import { useSelector } from 'react-redux';
import { selectToken } from '../../../../store/redux/features/auth/authSelectors';
import {
  useChangeEmailMutation,
  useGetUserQuery,
  useChangePasswordMutation,
} from '../../../../store/redux/services/user/userApi';

import { FormTemplate } from '../FormTemplate';
import { InputsTemplate } from '../../inputs/InputsTemplate';
import { ErrorMessage } from '../../../ErrorMessage';
import { TextComponent } from '../../TextComponent';

import { errorMessages } from '../../../../constants/constantsUI';
import { textStyles } from '../../../../constants/constantsStyle';
import {
  initialValuesPassword,
  mockEmail,
  mockPassword,
  validationSchemaEmail,
  validationSchemaPassword,
  valuesNamesEmail,
} from '../../../../store/mocks/edit-account-mock';

import { styles } from './style';

export const EditAccountForm = ({ navigation }) => {
  const stylesSchema = styles();

  const [newInitialValuesEmail, setnewInitialValuesEmail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState({ email: null, password: null });

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
  const [changeEmail, { isFetching: isFetchingEmail, error: emailError }] =
    useChangeEmailMutation();
  const [
    changePassword,
    { isFetching: isFetchingPassword, error: passwordError },
  ] = useChangePasswordMutation();

  const handleSubmitEmail = async values => {
    setErrors(prev => ({ ...prev, email: null }));

    const response = await changeEmail({
      data: { [valuesNamesEmail.newEmail]: values[valuesNamesEmail.newEmail] },
      token: userToken,
    });

    if (emailError || response?.error) {
      setErrors(prev => ({ ...prev, email: errorMessages.wentWrong }));
    } else {
      await refetch();
      navigation.navigate('Profile');
    }
  };

  const handleSubmitPassword = async values => {
    setErrors(prev => ({ ...prev, password: null }));

    const response = await changePassword({
      data: {
        ...values,
        email: user?.email,
      },
    });

    if (passwordError || response?.error) {
      setErrors(prev => ({ ...prev, password: errorMessages.wentWrong }));
    } else {
      await refetch();
      navigation.navigate('Profile');
    }
  };

  const loadData = () => {
    setIsLoading(true);

    const userValues = user?.analysis?.user;
    const initialValuesEmail = {
      ...initialValuesEmail,
      [valuesNamesEmail.email]: userValues?.email || '',
    };

    setnewInitialValuesEmail(prevValues => ({
      ...prevValues,
      ...initialValuesEmail,
    }));
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
        <View style={stylesSchema.forms}>
          <FormTemplate
            initialValues={newInitialValuesEmail}
            validationSchema={Yup.object(validationSchemaEmail)}
            handleSubmitForm={handleSubmitEmail}
            buttonText={'Edit email'}
          >
            {formProps => (
              <>
                <InputsTemplate
                  formProps={formProps}
                  inputsList={mockEmail}
                />

                {errors.email && !isFetchingEmail && (
                  <ErrorMessage error={errors.email} />
                )}
              </>
            )}
          </FormTemplate>

          <FormTemplate
            initialValues={initialValuesPassword}
            validationSchema={Yup.object(validationSchemaPassword)}
            handleSubmitForm={handleSubmitPassword}
            buttonText={'Edit password'}
          >
            {formProps => (
              <>
                <InputsTemplate
                  formProps={formProps}
                  inputsList={mockPassword}
                />

                {errors.password && !isFetchingPassword && (
                  <ErrorMessage error={errors.password} />
                )}
              </>
            )}
          </FormTemplate>
        </View>
      )}
    </View>
  );
};
