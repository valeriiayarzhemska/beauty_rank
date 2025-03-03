import { useEffect, useState } from 'react';
import * as Yup from 'yup';

import { useForgotPasswordQuery } from '../../../../store/redux/services/user/userApi';

import { FormTemplate } from '../FormTemplate';
import { InputsTemplate } from '../../inputs/InputsTemplate';
import { ErrorMessage } from '../../../ErrorMessage';

import {
  initialValuesEmail,
  validationSchemaEmail,
  mockEmail,
} from '../../../../store/mocks/forgot-password-mock';
import { errorMessages } from '../../../../constants/constantsUI';

export const ResetPasswordForm = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);

  const { data, isFetching, isError, error: emailError, isSuccess } = useForgotPasswordQuery(
    { email },
    { skip: !email, refetchOnMountOrArgChange: true }
  );

  const handleSubmit = async values => {
    setError(null);

    if (values?.email) {
      setEmail(values.email);
    }
  };

  useEffect(() => {
    if (!isFetching && data && !isError && isSuccess) {
      navigation.navigate('ConfirmPassword');
    }

    if (!isFetching && isError) {
      setError(errorMessages.wentWrong);
    }
  }, [isFetching, data, isError, isSuccess]);

  return (
    <FormTemplate
      initialValues={initialValuesEmail}
      validationSchema={Yup.object(validationSchemaEmail)}
      handleSubmitForm={handleSubmit}
      buttonText={'Submit'}
    >
      {formProps => (
        <>
          <InputsTemplate
            formProps={formProps}
            inputsList={mockEmail}
          />

          {error && <ErrorMessage error={error} />}
        </>
      )}
    </FormTemplate>
  );
};
