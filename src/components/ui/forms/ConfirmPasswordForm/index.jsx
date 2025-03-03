import { useState } from 'react';
import * as Yup from 'yup';

import { FormTemplate } from '../FormTemplate';
import { InputsTemplate } from '../../inputs/InputsTemplate';
import { ErrorMessage } from '../../../ErrorMessage';

import {
  validationSchemaPassword,
  initialValuesPassword,
  mockPassword,
} from '../../../../store/mocks/forgot-password-mock';
import { useResetPasswordMutation } from '../../../../store/redux/services/user/userApi';
import { errorMessages } from '../../../../constants/constantsUI';

export const ConfirmPasswordForm = ({ navigation }) => {
  const [error, setError] = useState(null);

  const [resetPassword, { isFetching, error: resetPasswordError }] =
    useResetPasswordMutation();

  const handleSubmit = async values => {
    setError(null);

    const data = {
      Code: values.Code.toString(),
      NewPassword: values.NewPassword,
    };
    const response = await resetPassword({ data });

    if (response?.error || !response?.data?.error) {
      setError(errorMessages.wentWrong);
    } else {
      await navigation.navigate('Login');
    }
  };

  return (
    <FormTemplate
      initialValues={initialValuesPassword}
      validationSchema={Yup.object(validationSchemaPassword)}
      handleSubmitForm={handleSubmit}
      buttonText={'Save new password'}
    >
      {formProps => (
        <>
          <InputsTemplate
            formProps={formProps}
            inputsList={mockPassword}
          />

          {error && !isFetching && <ErrorMessage error={error} />}
        </>
      )}
    </FormTemplate>
  );
};
