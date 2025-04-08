import React from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
    Chip,
    Menu,
    MenuItem,
    List,
    ListItem,
    Card,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MenuIcon from '@mui/icons-material/Menu';

interface Post {
    bodyContent: string;
    title: string;
    postId: string;
    user: string;
    status: 'Success' | 'Failed' | 'Pending';
    description?: string;
}

const samplePosts: Post[] = [
    {
        bodyContent: 'Travelling as a way of self-d...',
        title: 'Understanding col...',
        postId: '21, June 2024 • 4:15pm',
        user: 'Temitayo',
        status: 'Success',
    },
    {
        bodyContent: 'Why choose a theme that l...',
        title: 'Any mechanical k...',
        postId: '21, June 2024 • 4:15pm',
        user: 'Fenima',
        status: 'Success',
    },
    {
        bodyContent: 'Helping a local business rel...',
        title: 'Yo Reddit! What\'s...',
        postId: '21, June 2024 • 4:15pm',
        user: 'Sandra',
        status: 'Success',
    },
    {
        bodyContent: 'Caring is the new marketing',
        title: 'The More Importa...',
        postId: '21, June 2024 • 4:15pm',
        user: 'Alex',
        status: 'Success',
    },
    {
        bodyContent: 'How to build a loyal comm...',
        title: 'Yo Reddit! What\'s...',
        postId: '21, June 2024 • 4:15pm',
        user: 'Suzzy',
        status: 'Success',
    },
    {
        bodyContent: 'Start a blog to reach your c...',
        title: 'Any mechanical k...',
        postId: '21, June 2024 • 4:15pm',
        user: 'Monica',
        status: 'Success',
    },
    {
        bodyContent: 'Starting your travelling blog...',
        title: 'Any mechanical k...',
        postId: '21, June 2024 • 4:15pm',
        user: 'Faith',
        status: 'Success',
    },
    {
        bodyContent: 'How a visual artist redefine...',
        title: 'Any mechanical k...',
        postId: '21, June 2024 • 4:15pm',
        user: 'Swezeller',
        status: 'Pending',
    },
    {
        bodyContent: 'How to optimize images in...',
        title: 'How to design a p...',
        postId: '21, June 2024 • 4:15pm',
        user: 'James',
        status: 'Failed',
    },
    {
        bodyContent: 'Where to grow your busine...',
        title: 'Any mechanical k...',
        postId: '21, June 2024 • 4:15pm',
        user: 'Ferris',
        status: 'Success',
    },
];

const Posts: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleFilterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleFilterClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ pb: 4 }}>
            {/* Mobile Header - Only shown on mobile */}
            <Box
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 3,
                    gap: 2
                }}
            >
                <IconButton sx={{ color: 'text.primary' }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" sx={{ flex: 1 }}>
                    Transactions
                </Typography>
                <Box
                    component="img"
                    src="/avatar.png"
                    alt="User"
                    sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        objectFit: 'cover'
                    }}
                />
            </Box>

            {/* Page Title */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 3 }}>
                <Box>
                    <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
                        Post Metrics
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        View all your post metrics here
                    </Typography>
                </Box>
                <Button
                    variant="contained"
                    sx={{
                        bgcolor: '#7000F6',
                        borderRadius: '50%',
                        minWidth: 'unset',
                        width: 56,
                        height: 56,
                        '&:hover': {
                            bgcolor: '#6000D6'
                        }
                    }}
                >
                    <AddIcon />
                </Button>
            </Box>

            {/* Metrics Cards */}
            <Box sx={{ display: 'flex', gap: 2, mb: 3, flexDirection: "row", overflowX: "scroll" }}>
                <Card sx={{ flex: 1, p: 3, bgcolor: '#F9FAFB', border: '1px solid #EAECF0', boxShadow: 'none', borderRadius: 2, maxWidth: 258 }}>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                        Total Post
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 1 }}>
                        <Typography variant="h4" sx={{ fontWeight: 600 }}>
                            139,000
                        </Typography>
                        <Typography sx={{ color: '#7000F6', fontSize: '0.875rem' }}>
                            +1 today
                        </Typography>
                    </Box>
                    <Button
                        sx={{
                            color: '#7000F6',
                            p: 0,
                            textTransform: 'none',
                            '&:hover': {
                                bgcolor: 'transparent',
                                textDecoration: 'underline'
                            }
                        }}
                    >
                        View details
                    </Button>
                </Card>

                <Card sx={{ flex: 1, p: 3, bgcolor: '#F9FAFB', border: '1px solid #EAECF0', boxShadow: 'none', borderRadius: 2, maxWidth: 258 }}>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                        Total Successful Post
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
                        89,120
                    </Typography>
                    <Button
                        sx={{
                            color: '#027A48',
                            p: 0,
                            textTransform: 'none',
                            '&:hover': {
                                bgcolor: 'transparent',
                                textDecoration: 'underline'
                            }
                        }}
                    >
                        View details
                    </Button>
                </Card>

                <Card sx={{ flex: 1, p: 3, bgcolor: '#F9FAFB', border: '1px solid #EAECF0', boxShadow: 'none', borderRadius: 2, display: { xs: 'none', md: 'block' }, maxWidth: 258 }}>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                        Total Failed Post
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 1 }}>
                        <Typography variant="h4" sx={{ fontWeight: 600 }}>
                            12,100
                        </Typography>
                        <Typography sx={{ color: '#B42318', fontSize: '0.875rem' }}>
                            +5% today
                        </Typography>
                    </Box>
                    <Button
                        sx={{
                            color: '#B42318',
                            p: 0,
                            textTransform: 'none',
                            '&:hover': {
                                bgcolor: 'transparent',
                                textDecoration: 'underline'
                            }
                        }}
                    >
                        View details
                    </Button>
                </Card>
            </Box>

            {/* Desktop View */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                {/* Search and Filters */}
                <Box sx={{ display: 'flex', gap: 2, mb: 3, alignItems: 'center' }}>
                    <TextField
                        placeholder="Search Post"
                        size="small"
                        sx={{
                            flex: 1,
                            maxWidth: 400,
                            bgcolor: 'white',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 1
                            }
                        }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Button
                            endIcon={<FilterListIcon />}
                            sx={{
                                color: 'text.primary',
                                bgcolor: 'white',
                                border: '1px solid',
                                borderColor: 'divider',
                                textTransform: 'none',
                                px: 2
                            }}
                        >
                            Filters
                        </Button>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <IconButton size="small">
                                <KeyboardArrowLeftIcon />
                            </IconButton>
                            <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>
                                1-10 of <Box component="span" sx={{ color: 'text.secondary' }}>240</Box>
                            </Typography>
                            <IconButton size="small">
                                <KeyboardArrowRightIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>

                {/* Table */}
                <TableContainer sx={{ bgcolor: 'white', borderRadius: 2, border: '1px solid #EAECF0' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Body Content</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Post ID</TableCell>
                                <TableCell>User</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {samplePosts.map((post, index) => (
                                <TableRow key={index}>
                                    <TableCell sx={{ color: 'text.secondary' }}>{post.bodyContent}</TableCell>
                                    <TableCell sx={{ color: 'text.secondary' }}>{post.title}</TableCell>
                                    <TableCell sx={{ color: 'text.secondary' }}>{post.postId}</TableCell>
                                    <TableCell>{post.user}</TableCell>
                                    <TableCell>
                                        <Chip
                                            label={post.status}
                                            size="small"
                                            sx={{
                                                bgcolor: post.status === 'Success' ? '#ECFDF3' : post.status === 'Failed' ? '#FEF3F2' : '#FFFAEB',
                                                color: post.status === 'Success' ? '#027A48' : post.status === 'Failed' ? '#B42318' : '#B54708',
                                                fontWeight: 500,
                                                fontSize: '0.75rem'
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton size="small">
                                            <EditIcon fontSize="small" />
                                        </IconButton>
                                        <IconButton size="small">
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            {/* Mobile View */}
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                {/* Mobile Search and Filter */}
                <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                    <TextField
                        fullWidth
                        placeholder="Search Post"
                        size="small"
                        sx={{
                            flex: 1,
                            bgcolor: 'white',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 1
                            }
                        }}
                    />
                    <IconButton
                        sx={{
                            bgcolor: 'white',
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 1
                        }}
                    >
                        <FilterListIcon />
                    </IconButton>
                </Box>

                {/* Mobile Posts List */}
                <List sx={{ bgcolor: 'transparent', p: 0 }}>
                    {samplePosts.slice(0, 5).map((post, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                bgcolor: 'white',
                                mb: 2,
                                borderRadius: 2,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                p: 2,
                                border: '1px solid #EAECF0'
                            }}
                        >
                            <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 0.5 }}>
                                Making a post
                            </Typography>
                            <Typography color="text.secondary" sx={{ mb: 1, fontSize: '0.875rem' }}>
                                The journey of making a super simple post
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    alignItems: 'center'
                                }}
                            >
                                <Typography color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                                    Posted by: {post.user}
                                </Typography>
                                <Chip
                                    label="Success"
                                    size="small"
                                    sx={{
                                        bgcolor: '#ECFDF3',
                                        color: '#027A48',
                                        fontWeight: 500,
                                        fontSize: '0.75rem'
                                    }}
                                />
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* Filters Menu */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleFilterClose}
            >
                <MenuItem onClick={handleFilterClose}>All Posts</MenuItem>
                <MenuItem onClick={handleFilterClose}>Successful Posts</MenuItem>
                <MenuItem onClick={handleFilterClose}>Failed Posts</MenuItem>
                <MenuItem onClick={handleFilterClose}>Pending Posts</MenuItem>
            </Menu>
        </Box>
    );
};

export default Posts; 