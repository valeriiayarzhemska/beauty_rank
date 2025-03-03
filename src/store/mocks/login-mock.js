import { Email } from '../../assets/icons/Email';
import { Lock } from '../../assets/icons/Lock';
import { validationSchema } from '../validationSchema';

export const initialValues = {
  email: '',
  password: '',
};

export const validationSchemaLogin = {
  email: validationSchema.email,
  password: validationSchema.default,
};

export const mock = [
  {
    id: 1,
    placeholder: 'Email',
    name: 'email',
    fieldType: 'text',
    icon: Email,
  },
  {
    id: 2,
    placeholder: 'Password',
    name: 'password',
    type: 'password',
    fieldType: 'text',
    icon: Lock,
  },
];
