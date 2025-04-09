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

export const menuItems = [
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
