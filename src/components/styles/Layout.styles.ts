import styled from 'styled-components';
import {
  Box,
  Typography,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  Avatar as MuiAvatar
} from '@mui/material';

export const LayoutContainer = styled(Box)`
  background-color: white;
`;

export const Header = styled(Box)`
  padding: ${props => props.theme.spacing(2, 4)};
  display: none;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.palette.divider};

  @media (min-width: ${props => props.theme.breakpoints.values.md}px) {
    display: flex;
  }
`;

export const LogoContainer = styled(Box)`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 32px;
`;

export const HeaderContent = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;

export const PageTitle = styled(Typography)`
  font-weight: 600;
`;

export const HeaderActions = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(2)};
`;

export const UserInfo = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(1)};
`;

export const UserName = styled(Typography)`
  font-weight: 500;
`;

export const MainContainer = styled(Box)`
  display: flex;
  min-height: 100vh;
`;

export const Sidebar = styled(Box)`
  width: 280px;
  background-color: #7000F6;
  color: white;
  display: none;
  flex-direction: column;
  padding: ${props => props.theme.spacing(3)};

  @media (min-width: ${props => props.theme.breakpoints.values.md}px) {
    display: flex;
  }
`;

export const UserProfile = styled(Box)`
  margin-bottom: ${props => props.theme.spacing(4)};
  display: flex;
  gap: ${props => props.theme.spacing(2)};
`;

export const UserAvatar = styled(Box)`
  width: 48px;
  height: 48px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing(1)};
`;

export const UserInitials = styled(Typography)`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const UserProfileInfo = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const UserFullName = styled(Typography)`
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing(0.5)};
`;

export const UserEmail = styled(Typography)`
  font-size: 0.875rem;
  opacity: 0.8;
`;

export const StyledAvatar = styled(MuiAvatar)`
  width: 32px !important;
  height: 32px !important;
`;

export const NavigationList = styled(List)`
  flex: 1;
`;

export const NavListButton = styled(ListItemButton)<{ $isActive?: boolean }>`
  border-radius: ${props => props.theme.shape.borderRadius * 2}px;
  margin-bottom: ${props => props.theme.spacing(1)};
  background-color: ${props => props.$isActive ? '#923DF8' : 'transparent'};
  
  &:hover {
    background-color: ${props => props.$isActive ? '#923DF8' : 'rgba(255, 255, 255, 0.1)'};
  }

  .MuiListItemText-primary {
    color: white;
  }
`;

export const NavListIcon = styled(ListItemIcon)`
  && {
    color: white;
    min-width: 40px;
  }

  svg {
    color: white;
  }
`;

export const ContentWrapper = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled(Box)`
  && {
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: white;
    padding: ${props => props.theme.spacing(4)};
  }
`;
