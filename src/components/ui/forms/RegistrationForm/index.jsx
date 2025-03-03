import { Platform } from 'react-native';
import * as Yup from 'yup';
import DeviceInfo from 'react-native-device-info';

import { useUpdateEventsMutation } from '../../../../store/redux/services/events/eventsApi';

import { FormTemplate } from '../FormTemplate';
import { InputsTemplate } from '../../inputs/InputsTemplate';
import { ErrorMessage } from '../../../ErrorMessage';

import {
  validationSchemaRegistration,
  initialValues,
  mock,
} from '../../../../store/mocks/registration-mock';

import { Loader } from '../../Loader';
import { colors } from '../../../../constants/constants';

import { styles } from './style';

export const RegistrationForm = ({
  navigation,
  generateFormValues = () => {},
  registerUser = () => {},
  isLoading = false,
  setIsLoading = () => {},
  error = null,
  setError = () => {},
}) => {
  const stylesSchema = styles();

  const [
    updateEvents,
    { isFetching: isUpdatingEventsFetching, error: updatingEventsError },
  ] = useUpdateEventsMutation();

  const handleSubmit = async values => {
    setError(null);
    setIsLoading(true);

    const formValues = generateFormValues();

    const registerValues = {
      User: { email: values.email, password: values.password },
      ...formValues.questionnaireValues,
      ...formValues.beautyPlanValues,
    };

    const uniqueId = await DeviceInfo.getUniqueId();
    const responseEvent = await updateEvents({
      EventType: 2,
      UserId: uniqueId,
      RegistrationType: 'Email',
      Platform: Platform.OS,
    });

    if (responseEvent?.error || !responseEvent?.data?.token) {
      console.log('Error updating registration event:', responseEvent);
    }

    await registerUser({ registerValues, email: values?.email });
  };

  return (
    <>
      <FormTemplate
        initialValues={initialValues}
        validationSchema={Yup.object(validationSchemaRegistration)}
        handleSubmitForm={handleSubmit}
        buttonText={'Sign up'}
      >
        {formProps => (
          <>
            <InputsTemplate
              formProps={formProps}
              inputsList={mock}
            />

            {error && <ErrorMessage error={error} />}
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
