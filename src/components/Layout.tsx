import React from 'react';
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    IconButton,
    Avatar,
    Button,
    ListItemButton,
    Divider,
} from '@mui/material';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Speed';
import GroupIcon from '@mui/icons-material/Group';
import ArticleIcon from '@mui/icons-material/Article';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SavingsIcon from '@mui/icons-material/Savings';
import PaymentIcon from '@mui/icons-material/Payment';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SecurityIcon from '@mui/icons-material/Security';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const menuItems = [
    { text: 'Overview', icon: <DashboardIcon />, path: '/overview' },
    { text: 'Users', icon: <GroupIcon />, path: '/users' },
    { text: 'Posts', icon: <ArticleIcon />, path: '/posts' },
    { text: 'Transfers', icon: <SwapHorizIcon />, path: '/transfers' },
    { text: 'Deposits', icon: <AccountBalanceWalletIcon />, path: '/deposits' },
    { text: 'Savings', icon: <SavingsIcon />, path: '/savings' },
    { text: 'Bill Payment', icon: <PaymentIcon />, path: '/bill-payment' },
    { text: 'Reports', icon: <AssessmentIcon />, path: '/reports' },
    { text: 'Compliance', icon: <SecurityIcon />, path: '/compliance' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
];

const Layout: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Function to get current page title
    const getCurrentPageTitle = () => {
        const currentItem = menuItems.find(item => item.path === location.pathname);
        return currentItem ? currentItem.text : '';
    };

    return (
        <Box sx={{ backgroundColor: "white" }}>
            {/* Header */}
            <Box sx={{
                px: 4,
                py: 2,
                display: { xs: 'none', md: 'flex' }, 
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: '1px solid',
                borderColor: 'divider',
            }}
            >
                <Box sx={{ display: 'flex', alignItems: "center", }}>
                    <img src="/spatch-logo.svg" alt="Spatch" style={{ height: '32px' }} />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: "white"
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {getCurrentPageTitle()}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <IconButton>
                            <HelpIcon />
                        </IconButton>
                        <Divider orientation="vertical" flexItem />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Avatar sx={{ width: 32, height: 32 }}>T</Avatar>
                            <Typography sx={{ fontWeight: 500 }}>Tee</Typography>
                            <IconButton size="small">
                                <KeyboardArrowDownIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', minHeight: '100vh' }}>
                {/* Sidebar */}
                <Box
                    sx={{
                        width: 280,
                        bgcolor: '#7000F6',
                        color: 'white',
                        display: { xs: 'none', md: 'flex' },
                        flexDirection: 'column',
                        p: 3,
                    }}
                >
                    {/* Logo */}

                    {/* User Profile */}
                    <Box sx={{ mb: 4, display: "flex", gap: 2 }}>
                        <Box
                            sx={{
                                width: 48,
                                height: 48,
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                borderRadius: 24,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: 1,
                            }}
                        >
                            <Typography sx={{ fontSize: '1.25rem', fontWeight: 600 }}>TU</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: 600, mb: 0.5 }}>Test User</Typography>
                            <Typography sx={{ fontSize: '0.875rem', opacity: 0.8 }}>test@user.com</Typography>
                        </Box>
                    </Box>

                    {/* Navigation Menu */}
                    <List sx={{ flex: 1 }}>
                        {menuItems.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton
                                    onClick={() => navigate(item.path)}
                                    sx={{
                                        borderRadius: 2,
                                        mb: 1,
                                        bgcolor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                                        '&:hover': {
                                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                                        },
                                    }}
                                >
                                    <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* Main Content Wrapper */}
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

                    {/* Main Content */}
                    <Box
                        component="main"
                        sx={{
                            flex: 1,
                            bgcolor: 'white',
                            p: 4,
                        }}
                    >
                        <Outlet />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Layout; 