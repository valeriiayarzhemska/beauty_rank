import { Email } from '../../assets/icons/Email';
import { Lock } from '../../assets/icons/Lock';

import { fieldTypes } from '../../constants/constants';
import { validationSchema } from '../validationSchema';

export const valuesNamesEmail = {
  email: 'email',
  newEmail: 'newEmail',
};

export const valuesNamesPassword = {
  password: 'password',
  newPassword: 'newPassword',
};

export const initialValuesEmail = {
  [valuesNamesEmail.email]: '',
  [valuesNamesEmail.newEmail]: '',
};

export const initialValuesPassword = {
  [valuesNamesPassword.password]: '',
  [valuesNamesPassword.newPassword]: '',
};

export const validationSchemaEmail = {
  [valuesNamesEmail.email]: validationSchema.email,
  [valuesNamesEmail.newEmail]: validationSchema.email,
};

export const validationSchemaPassword = {
  [valuesNamesPassword.password]: validationSchema.password,
  [valuesNamesPassword.newPassword]: validationSchema.password,
};

export const mockEmail = [
  {
    id: 1,
    placeholder: 'Email',
    name: valuesNamesEmail.email,
    fieldType: fieldTypes.text,
    icon: Email,
  },
  {
    id: 2,
    placeholder: 'New Email',
    name: valuesNamesEmail.newEmail,
    fieldType: fieldTypes.text,
    icon: Email,
  },
];

export const mockPassword = [
  {
    id: 2,
    placeholder: 'Password',
    name: valuesNamesPassword.password,
    type: 'password',
    fieldType: fieldTypes.text,
    icon: Lock,
  },
  {
    id: 3,
    placeholder: 'Password',
    name: valuesNamesPassword.newPassword,
    type: 'password',
    fieldType: fieldTypes.text,
    icon: Lock,
  },
];
