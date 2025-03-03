import { Email } from '../../assets/icons/Email';
import { Lock } from '../../assets/icons/Lock';

import { fieldTypes } from '../../constants/constants';
import { validationSchema } from '../validationSchema';

export const valuesNamesRegistration = {
  email: 'email',
  password: 'password',
  confirmPassword: 'confirmPassword',
  terms: 'terms',
};

export const initialValues = {
  [valuesNamesRegistration.email]: '',
  [valuesNamesRegistration.password]: '',
  [valuesNamesRegistration.confirmPassword]: '',
  [valuesNamesRegistration.terms]: '',
};

export const validationSchemaRegistration = {
  [valuesNamesRegistration.email]: validationSchema.email,
  [valuesNamesRegistration.password]: validationSchema.password,
  [valuesNamesRegistration.confirmPassword]: validationSchema.repeatPassword,
  [valuesNamesRegistration.terms]: validationSchema.checkbox,
};

export const mock = [
  {
    id: 1,
    placeholder: 'Email',
    name: valuesNamesRegistration.email,
    fieldType: fieldTypes.text,
    icon: Email,
  },
  {
    id: 2,
    placeholder: 'Password',
    name: valuesNamesRegistration.password,
    type: 'password',
    fieldType: fieldTypes.text,
    icon: Lock,
  },
  {
    id: 3,
    placeholder: 'Password',
    name: valuesNamesRegistration.confirmPassword,
    type: 'password',
    fieldType: fieldTypes.text,
    icon: Lock,
  },
  {
    id: 4,
    placeholder: '',
    name: valuesNamesRegistration.terms,
    fieldType: fieldTypes.checkbox,
    icon: Lock,
    isTerms: true,
  },
];
