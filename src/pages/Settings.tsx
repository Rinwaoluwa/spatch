import React from 'react';
import { Switch } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  SettingsContainer,
  SettingsTitle,
  SettingsCard,
  SettingsSection,
  SectionTitle,
  FormRow,
  FormField,
  StyledTextField,
  SwitchContainer,
  StyledFormControlLabel,
  ButtonContainer,
  SaveButton,
  LogoutButton,
} from './styles/Settings.styles';
import { settingsValidationSchema, SettingsFormData } from './validation/settings.validation';

const Settings: React.FC = () => {
  const navigate = useNavigate();
  
  const { control, handleSubmit, formState: { errors } } = useForm<SettingsFormData>({
    resolver: yupResolver(settingsValidationSchema),
    defaultValues: {
      displayName: 'John Doe',
      email: 'john.doe@example.com',
      emailNotifications: true,
      pushNotifications: true,
      makeProfilePublic: false,
      showEmailAddress: true,
    },
  });

  const onSubmit = (data: SettingsFormData) => {
    console.log('Form submitted:', data);
    // Here you would typically make an API call to save the settings
  };

  return (
    <SettingsContainer>
      <SettingsTitle variant="h4">
        Settings
      </SettingsTitle>
      
      <SettingsCard>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SettingsSection>
            <div>
              <SectionTitle variant="h6">
                Profile Settings
              </SectionTitle>
              
              <FormRow>
                <FormField>
                  <Controller
                    name="displayName"
                    control={control}
                    render={({ field }) => (
                      <StyledTextField
                        {...field}
                        label="Display Name"
                        variant="outlined"
                        error={!!errors.displayName}
                        helperText={errors.displayName?.message}
                      />
                    )}
                  />
                </FormField>
                <FormField>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <StyledTextField
                        {...field}
                        label="Email"
                        variant="outlined"
                        error={!!errors.email}
                        helperText={errors.email?.message}
                      />
                    )}
                  />
                </FormField>
              </FormRow>
            </div>

            <div>
              <SectionTitle variant="h6">
                Notification Settings
              </SectionTitle>
              
              <SwitchContainer>
                <Controller
                  name="emailNotifications"
                  control={control}
                  render={({ field: { value, onChange, ...field } }) => (
                    <StyledFormControlLabel
                      control={
                        <Switch
                          {...field}
                          checked={value}
                          onChange={(e) => onChange(e.target.checked)}
                        />
                      }
                      label="Email Notifications"
                    />
                  )}
                />
              </SwitchContainer>
              
              <SwitchContainer>
                <Controller
                  name="pushNotifications"
                  control={control}
                  render={({ field: { value, onChange, ...field } }) => (
                    <StyledFormControlLabel
                      control={
                        <Switch
                          {...field}
                          checked={value}
                          onChange={(e) => onChange(e.target.checked)}
                        />
                      }
                      label="Push Notifications"
                    />
                  )}
                />
              </SwitchContainer>
            </div>

            <div>
              <SectionTitle variant="h6">
                Privacy Settings
              </SectionTitle>
              
              <SwitchContainer>
                <Controller
                  name="makeProfilePublic"
                  control={control}
                  render={({ field: { value, onChange, ...field } }) => (
                    <StyledFormControlLabel
                      control={
                        <Switch
                          {...field}
                          checked={value}
                          onChange={(e) => onChange(e.target.checked)}
                        />
                      }
                      label="Make Profile Public"
                    />
                  )}
                />
              </SwitchContainer>
              
              <SwitchContainer>
                <Controller
                  name="showEmailAddress"
                  control={control}
                  render={({ field: { value, onChange, ...field } }) => (
                    <StyledFormControlLabel
                      control={
                        <Switch
                          {...field}
                          checked={value}
                          onChange={(e) => onChange(e.target.checked)}
                        />
                      }
                      label="Show Email Address"
                    />
                  )}
                />
              </SwitchContainer>
            </div>

            <ButtonContainer>
              <SaveButton type="submit" variant="contained">
                Save Changes
              </SaveButton>
              <LogoutButton
                type="button"
                variant="outlined"
                onClick={() => navigate("/SignIn")}
              >
                Logout
              </LogoutButton>
            </ButtonContainer>
          </SettingsSection>
        </form>
      </SettingsCard>
    </SettingsContainer>
  );
};

export default Settings;