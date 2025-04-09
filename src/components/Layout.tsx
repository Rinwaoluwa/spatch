import React from 'react';
import { Divider, IconButton, ListItem, ListItemText } from '@mui/material';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import HelpIcon from '@mui/icons-material/Help';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { menuItems } from '../lib/constants';
import {
  LayoutContainer,
  Header,
  LogoContainer,
  Logo,
  HeaderContent,
  PageTitle,
  HeaderActions,
  UserInfo,
  UserName,
  MainContainer,
  Sidebar,
  UserProfile,
  UserAvatar,
  UserInitials,
  UserProfileInfo,
  UserFullName,
  UserEmail,
  NavigationList,
  NavListButton,
  NavListIcon,
  ContentWrapper,
  MainContent,
  StyledAvatar
} from './styles/Layout.styles';

const Layout: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Function to get current page title
    const getCurrentPageTitle = () => {
        const currentItem = menuItems.find(item => item.path === location.pathname);
        return currentItem ? currentItem.text : '';
    };

    return (
        <LayoutContainer>
            <Header>
                <LogoContainer>
                    <Logo src="/spatch-logo.svg" alt="Spatch" />
                </LogoContainer>
                <HeaderContent>
                    <PageTitle variant="h6">
                        {getCurrentPageTitle()}
                    </PageTitle>
                    <HeaderActions>
                        <IconButton>
                            <HelpIcon />
                        </IconButton>
                        <Divider orientation="vertical" flexItem />
                        <UserInfo>
                            <StyledAvatar src='/avatar.png'>T</StyledAvatar>
                            <UserName>Tee</UserName>
                            <IconButton size="small">
                                <KeyboardArrowDownIcon />
                            </IconButton>
                        </UserInfo>
                    </HeaderActions>
                </HeaderContent>
            </Header>

            <MainContainer>
                <Sidebar>
                    <UserProfile>
                        <UserAvatar>
                            <UserInitials>TU</UserInitials>
                        </UserAvatar>
                        <UserProfileInfo>
                            <UserFullName>Test User</UserFullName>
                            <UserEmail>test@user.com</UserEmail>
                        </UserProfileInfo>
                    </UserProfile>

                    {/* Navigation Menu */}
                    <NavigationList>
                        {menuItems.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <NavListButton
                                    onClick={() => navigate(item.path)}
selected={location.pathname === item.path}
                                    $isActive={location.pathname === item.path}
                                >
                                    <NavListIcon>{item.icon}</NavListIcon>
                                    <ListItemText primary={item.text} />
                                </NavListButton>
                            </ListItem>
                        ))}
                    </NavigationList>
                </Sidebar>

                {/* Main Content Wrapper */}
                <ContentWrapper>
                    {/* Main Content */}
                    <MainContent>
                        <Outlet />
                    </MainContent>
                </ContentWrapper>
            </MainContainer>
        </LayoutContainer>
    );
};

export default Layout; 