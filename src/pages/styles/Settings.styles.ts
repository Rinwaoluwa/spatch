import styled from 'styled-components';
import { Box, Typography, Paper, TextField, Switch, FormControlLabel, Button } from '@mui/material';
import { Theme } from '@mui/material/styles';

import { DefaultTheme } from 'styled-components';

interface StyledProps {
  theme: DefaultTheme;
}

export const SettingsContainer = styled(Box)<StyledProps>`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(4)};
`;

export const SettingsTitle = styled(Typography)<StyledProps>`
  && {
    margin-bottom: 20px;
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const SettingsCard = styled(Paper)<StyledProps>`
  && {
    padding: ${({ theme }) => theme.spacing(5)};
    background: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  }
`;

export const SettingsSection = styled(Box)<StyledProps>`
  && {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(6)};
  }
`;

export const SectionTitle = styled(Typography)<StyledProps>`
  && {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
    font-size: 1.125rem;
    font-weight: 500;
    color: #111827;
  }
`;

export const FormRow = styled(Box)<StyledProps>`
  && {
    display: flex;
    gap: ${({ theme }) => theme.spacing(4)};
    margin-bottom: 16px;
    margin-top: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
      flex-direction: column;
    }
  }
`;

export const FormField = styled(Box)<StyledProps>`
  && {
    flex: 1;
  }
`;

export const StyledTextField = styled(TextField)<StyledProps>`
  && {
    width: 100%;

    .MuiOutlinedInput-root {
      background: #FFFFFF;
      
      fieldset {
        border-color: #D1D5DB;
      }

      &:hover fieldset {
        border-color: #9CA3AF;
      }

      &.Mui-focused fieldset {
        border-color: #923DF8;
      }
    }

    .MuiInputLabel-root {
      color: #6B7280;
      font-size: 0.875rem;

      &.Mui-focused {
        color: #923DF8;
      }
    }
  }
`;

export const SwitchContainer = styled(Box)<StyledProps>`
  && {
    margin-bottom: ${({ theme }) => theme.spacing(3)}px;

    .MuiSwitch-root {
      .MuiSwitch-switchBase {
        &.Mui-checked {
          color: #923DF8;
          
          & + .MuiSwitch-track {
            background-color: #923DF8;
            opacity: 0.5;
          }
        }
      }

      .MuiSwitch-track {
        background-color: #D1D5DB;
        opacity: 1;
      }
    }
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)<StyledProps>`
  && {
    margin: 0;
    
    .MuiFormControlLabel-label {
      font-size: 0.875rem;
      font-weight: 400;
      color: #111827;
    }
  }
`;

export const ButtonContainer = styled(Box)<StyledProps>`
  && {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
`;

export const SaveButton = styled(Button)<StyledProps>`
  && {
    min-width: 120px;
    height: 38px;
    background-color: #923DF8;
    text-transform: none;
    font-size: 0.875rem;
    font-weight: 500;
    padding: ${({ theme }) => theme.spacing(0, 2)};
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

    &:hover {
      background-color: #7B33D1;
    }
  }
`;

export const LogoutButton = styled(Button)<StyledProps>`
  && {
    min-width: 120px;
    height: 38px;
    color: #374151;
    border-color: #D1D5DB;
    text-transform: none;
    font-size: 0.875rem;
    font-weight: 500;
    padding: ${({ theme }) => theme.spacing(0, 2)};
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

    &:hover {
      border-color: #9CA3AF;
      background-color: #F9FAFB;
    }
  }
`;
