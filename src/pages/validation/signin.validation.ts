import * as yup from 'yup';

export const signInValidationSchema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  rememberMe: yup.boolean(),
});

export type SignInFormData = yup.InferType<typeof signInValidationSchema>;
