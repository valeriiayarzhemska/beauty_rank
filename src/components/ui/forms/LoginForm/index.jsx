import { useState } from 'react';
import { Alert, View } from 'react-native';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import {
  setHasSubscription,
  setIsFullyRegistred,
  setIsSplashLoading,
  setToken,
  setUser,
} from '../../../../store/redux/features/auth/authSlice';
import { useLoginMutation } from '../../../../store/redux/services/user/userApi';

import { FormTemplate } from '../FormTemplate';
import { InputsTemplate } from '../../inputs/InputsTemplate';
import { ButtonTextComponent } from '../../buttons/ButtonTextComponent';
import { ErrorMessage } from '../../../ErrorMessage';
import { Loader } from '../../Loader';

import {
  initialValues,
  mock,
  validationSchemaLogin,
} from '../../../../store/mocks/login-mock';
import { errorMessages } from '../../../../constants/constantsUI';
import { colors } from '../../../../constants/constants';

import { styles } from './style';

export const LoginForm = ({
  navigatio,
  isLoading,
  setIsSuccess = () => {},
  setIsLoading = () => {},
  handleLoginisation = () => {},
}) => {
  const stylesSchema = styles();

  const [login, { isFetching, error: loginError }] = useLoginMutation();
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = async values => {
    setError(null);
    setIsLoading(true);

    const response = await login(values);

    if ((loginError || response?.error) && !response?.data?.access_token) {
      setError(errorMessages.login);
    } else {
      await handleLoginisation(response?.data);
    }

    setIsLoading(false);
  };

  return (
    <>
      <FormTemplate
        initialValues={initialValues}
        validationSchema={Yup.object(validationSchemaLogin)}
        handleSubmitForm={handleSubmit}
        buttonText={'Log In'}
      >
        {formProps => (
          <>
            <InputsTemplate
              formProps={formProps}
              inputsList={mock}
            />

            <View style={stylesSchema.forgotPasswordContainer}>
              <ButtonTextComponent
                text="Forgot password?"
                isDisabled={isFetching}
                handleClick={() => navigation.navigate('ResetPassword')}
              />
            </View>

            {error && !isFetching && (
              <ErrorMessage error={errorMessages.login} />
            )}
          </>
        )}
      </FormTemplate>

      {isLoading && (
        <Loader
          height={50}
          color={colors.purpleColor}
          containerStyles={stylesSchema.loader}
        />
      )}
    </>
  );
};
