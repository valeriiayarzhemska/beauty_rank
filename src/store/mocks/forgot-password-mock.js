import { Email } from '../../assets/icons/Email';
import { Lock } from '../../assets/icons/Lock';

import { validationSchema } from '../validationSchema';

export const initialValuesEmail = {
  email: '',
};

export const valuesPassword = {
  NewPassword: 'NewPassword',
  ConfirmPassword: 'ConfirmPassword',
  Code: 'Code',
};

export const initialValuesPassword = {
  [valuesPassword.NewPassword]: '',
  [valuesPassword.ConfirmPassword]: '',
  [valuesPassword.Code]: '',
};

export const validationSchemaEmail = {
  email: validationSchema.email,
};

export const validationSchemaPassword = {
  [valuesPassword.NewPassword]: validationSchema.password,
  [valuesPassword.ConfirmPassword]: validationSchema.confirmPassword,
  [valuesPassword.Code]: validationSchema.default,
};

export const mockEmail = [
  {
    id: 1,
    placeholder: 'Email',
    name: 'email',
    fieldType: 'text',
    icon: Email,
  },
];

export const mockPassword = [
  {
    id: 1,
    placeholder: 'Enter New Password',
    name: valuesPassword.NewPassword,
    type: 'password',
    fieldType: 'text',
    icon: Lock,
  },
  {
    id: 2,
    placeholder: 'Confirm New Password',
    name: valuesPassword.ConfirmPassword,
    type: 'password',
    fieldType: 'text',
    icon: Lock,
  },
  {
    id: 3,
    placeholder: 'Email code',
    name: valuesPassword.Code,
    fieldType: 'text',
    icon: Email,
  },
];
