import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  NavContainer,
  NavListButton,
  NavListIcon,
  LogoutWrapper,
  LogoutListButton
} from './styles/NavigationMenu.styles';

const menuItems = [
  {
    text: 'Dashboard',
    icon: <DashboardIcon />,
    path: '/dashboard',
  },
  {
    text: 'Posts',
    icon: <ArticleIcon />,
    path: '/posts',
  },
  {
    text: 'Settings',
    icon: <SettingsIcon />,
    path: '/settings',
  },
];

const NavigationMenu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <NavContainer>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <NavListButton
              onClick={() => navigate(item.path)}
              $isActive={location.pathname === item.path}
            >
              <NavListIcon>
                {item.icon}
              </NavListIcon>
              <ListItemText primary={item.text} />
            </NavListButton>
          </ListItem>
        ))}
      </List>

      <LogoutWrapper>
        <List>
          <ListItem disablePadding>
            <LogoutListButton>
              <NavListIcon>
                <LogoutIcon />
              </NavListIcon>
              <ListItemText primary="Logout" />
            </LogoutListButton>
          </ListItem>
        </List>
      </LogoutWrapper>
    </NavContainer>
  );
};

export default NavigationMenu; 