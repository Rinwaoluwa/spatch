import styled from 'styled-components';
import { Box, Typography, TextField, Button } from '@mui/material';

import { DefaultTheme } from 'styled-components';

interface StyledProps {
  theme: DefaultTheme;
}

export const PageContainer = styled(Box)<StyledProps>`
  min-height: 100vh;
  display: flex;
  background-color: white;
`;

export const LeftSection = styled(Box)`
  flex: 1;
  background-color: #F8F2DC;
  display: none;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: ${({ theme }) => theme.spacing(4)};
  max-width: 50%;

  ${({ theme }) => theme.breakpoints.up('md')} {
    display: flex;
  }
`;

export const LogoWrapper = styled(Box)`
  position: absolute;
  top: ${({ theme }) => theme.spacing(4)};
  left: ${({ theme }) => theme.spacing(4)};
`;

export const Logo = styled('img')`
  height: 32px;
`;

export const SignupImage = styled('img')`
  height: auto;
  max-height: 80vh;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const RightSection = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(4)};
  max-width: 100%;

  ${({ theme }) => theme.breakpoints.up('md')} {
    max-width: 500px;
  }
`;

export const MobileLogoWrapper = styled(Box)`
  display: block;
  margin-bottom: ${props => props.theme.spacing(4)};

  ${({ theme }) => theme.breakpoints.up('md')} {
    display: none;
  }
`;

export const FormContainer = styled(Box)`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`;

export const PageTitle = styled(Typography)`
  && {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
    font-weight: 600;
  }
`;

export const FormGroup = styled(Box)`
  margin-bottom: ${({ theme }) => theme.spacing(3)};

  &:last-of-type {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
`;

export const FieldLabel = styled(Typography)`
  && {
    margin-bottom: ${({ theme }) => theme.spacing(1)};
    font-weight: 500;
  }
`;

export const RequiredMark = styled('span')`
  color: #FF0000;
`;

export const StyledTextField = styled(TextField)`
  && {
    .MuiOutlinedInput-root {
      background-color: white;
    }
  }
`;

export const SubmitButton = styled(Button)`
  && {
    background-color: #7000F6;
    padding: ${props => props.theme.spacing(1.5)} 0;
    text-transform: none;
    font-size: 1rem;

    &:hover {
      background-color: #6000D6;
    }
  }
`;
