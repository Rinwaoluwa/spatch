import * as yup from 'yup';

export const settingsValidationSchema = yup.object({
  displayName: yup
    .string()
    .required('Display name is required')
    .min(2, 'Display name must be at least 2 characters')
    .max(50, 'Display name must not exceed 50 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  emailNotifications: yup.boolean(),
  pushNotifications: yup.boolean(),
  makeProfilePublic: yup.boolean(),
  showEmailAddress: yup.boolean(),
});

export type SettingsFormData = yup.InferType<typeof settingsValidationSchema>;
