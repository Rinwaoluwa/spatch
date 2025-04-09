import styled from 'styled-components';
import {
  Box,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';

export const NavContainer = styled(Box)`
  width: 100%;
`;

export const NavListButton = styled(ListItemButton)<{ $isActive?: boolean }>`
  border-radius: ${props => props.theme.shape.borderRadius * 2}px;
  margin: ${props => props.theme.spacing(0, 1)};
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

export const LogoutWrapper = styled(Box)`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-bottom: 16px;
`;

export const LogoutListButton = styled(ListItemButton)`
  border-radius: ${props => props.theme.shape.borderRadius * 2}px;
  margin: ${props => props.theme.spacing(0, 1)};
  
  && {
    color: ${props => props.theme.palette.error.main};
  }
  
  &:hover {
    background-color: ${props => props.theme.palette.error.light};
    color: ${props => props.theme.palette.error.main};
  }

  .MuiListItemIcon-root {
    color: inherit;
  }
`;
