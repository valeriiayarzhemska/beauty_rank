import { useEffect, useRef } from 'react';

import { Formik } from 'formik';
import { ButtonComponent } from '../../buttons/ButtonComponent';
import { View } from 'react-native';

import { styles } from './style';

export const FormTemplate = ({
  initialValues,
  validationSchema,
  handleSubmitForm,
  buttonText = '',
  isLoadingData = false,
  isWithoutButton = false,
  buttonIcon = false,
  isButtonLeft = false,
  validateOnBlur = true,
  validateOnChange = true,
  children,
  setFormRef = () => {},
}) => {
  const stylesSchema = styles(isButtonLeft);

  const formRef = useRef({});

  useEffect(() => {
    if (setFormRef && formRef) {
      setFormRef(formRef);
    }
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmitForm}
      validationSchema={validationSchema}
      innerRef={formRef}
      validateOnBlur={validateOnBlur} 
      validateOnChange={validateOnChange}
    >
      {formProps => (
        <>
          {/* {formProps.isSubmitting && <LoaderProgress />} */}

          <View style={stylesSchema.container}>
            {children(formProps)}

            {!isWithoutButton && (
              <View style={stylesSchema.containerButton}>
                <ButtonComponent
                  text={buttonText}
                  isLoadingData={formProps.isSubmitting}
                  icon={buttonIcon}
                  /* isDisabled={
                  Object.keys(formProps.errors).length > 0 ||
                  formProps.isSubmitting
                } */
                  handleClick={formProps.handleSubmit}
                />
              </View>
            )}
          </View>
        </>
      )}
    </Formik>
  );
};
