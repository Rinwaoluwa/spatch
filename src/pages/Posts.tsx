import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Menu,
    MenuItem,
    CircularProgress,
    Box,
    Typography,
    IconButton,
    Button,
    Card,
    TextField,
    TableContainer,
    Chip,
    List,
    ListItem
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MenuIcon from '@mui/icons-material/Menu';
import { useGetPosts } from '../api';
import { Post } from '../types';

const Posts = (): React.ReactElement => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
    const postsPerPage = 10;
    
    const { data: posts = [], isLoading, isError } = useGetPosts();

    const filteredPosts = posts?.filter(post => {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch = 
            post.title.toLowerCase().includes(searchLower) || 
            post.body.toLowerCase().includes(searchLower) ||
            (post.user?.toLowerCase() || '').includes(searchLower) ||
            (post.postId?.toLowerCase() || '').includes(searchLower);
        const matchesFilter = !selectedFilter || post.status === selectedFilter;
        return matchesSearch && matchesFilter;
    }) || [];

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    // Handler for filter button click
    const handleFilterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    // Handler for filter menu close
    const handleFilterClose = () => {
        setAnchorEl(null);
    };

    // Handler for filter selection
    const handleFilterSelect = (filter: string | null) => {
        setSelectedFilter(filter);
        setCurrentPage(1);
        handleFilterClose();
    };

    // Stats calculations
    const totalPosts = posts?.length || 0;
    const successfulPosts = posts?.filter(post => post.status === 'Success').length || 0;
    const failedPosts = posts?.filter(post => post.status === 'Failed').length || 0;

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
                        Total Posts
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 1 }}>
                        {isLoading ? (
                            <CircularProgress size={24} />
                        ) : (
                            <>
                                <Typography variant="h4" sx={{ fontWeight: 600 }}>
                                    {totalPosts.toLocaleString()}
                                </Typography>
                                <Typography sx={{ color: '#7000F6', fontSize: '0.875rem' }}>
                                    +{Math.floor(Math.random() * 10)} today
                                </Typography>
                            </>
                        )}
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
                        Total Successful Posts
                    </Typography>
                    {isLoading ? (
                        <CircularProgress size={24} sx={{ my: 1 }} />
                    ) : (
                        <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
                            {successfulPosts.toLocaleString()}
                        </Typography>
                    )}
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
                        onClick={() => handleFilterSelect('Success')}
                    >
                        View details
                    </Button>
                </Card>

                <Card sx={{ flex: 1, p: 3, bgcolor: '#F9FAFB', border: '1px solid #EAECF0', boxShadow: 'none', borderRadius: 2, display: { xs: 'none', md: 'block' }, maxWidth: 258 }}>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                        Total Failed Posts
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 1 }}>
                        {isLoading ? (
                            <CircularProgress size={24} />
                        ) : (
                            <>
                                <Typography variant="h4" sx={{ fontWeight: 600 }}>
                                    {failedPosts.toLocaleString()}
                                </Typography>
                                <Typography sx={{ color: '#B42318', fontSize: '0.875rem' }}>
                                    +{Math.floor(Math.random() * 5)}% today
                                </Typography>
                            </>
                        )}
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
                        onClick={() => handleFilterSelect('Failed')}
                    >
                        View details
                    </Button>
                </Card>
            </Box>

            {/* Desktop View */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                {/* Search and Filters */}
                <Box sx={{ display: 'flex', justifyContent: "space-between", mb: 3, alignItems: 'center' }}>
                    <TextField
                        placeholder="Search Post"
                        size="small"
                        value={searchTerm}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                        sx={{
                            flex: 1,
                            maxWidth: 250,
                            bgcolor: 'white',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 1
                            }
                        }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Button
                            endIcon={<FilterListIcon />}
                            onClick={handleFilterClick}
                            sx={{
                                color: 'text.primary',
                                bgcolor: 'white',
                                border: '1px solid',
                                borderColor: 'divider',
                                textTransform: 'none',
                                px: 2
                            }}
                        >
                            {selectedFilter || 'Filters'}
                        </Button>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <IconButton 
                                size="small" 
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            >
                                <KeyboardArrowLeftIcon />
                            </IconButton>
                            <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>
                                {indexOfFirstPost + 1}-{Math.min(indexOfLastPost, filteredPosts.length)} of <Box component="span" sx={{ color: 'text.secondary' }}>{filteredPosts.length}</Box>
                            </Typography>
                            <IconButton 
                                size="small"
                                disabled={currentPage >= totalPages}
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            >
                                <KeyboardArrowRightIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>

                {/* Table */}
                <TableContainer sx={{ 
                    bgcolor: 'white', 
                    borderRadius: 1, 
                    border: '1px solid #EAECF0',
                    boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1)',
                    '& .MuiTableHead-root': {
                        bgcolor: '#F9FAFB',
                    },
                    '& .MuiTableCell-head': {
                        color: '#475467',
                        fontWeight: 500,
                        borderBottom: '1px solid #EAECF0',
                        py: 3
                    },
                    '& .MuiTableCell-body': {
                        py: 2,
                        borderBottom: '1px solid #EAECF0'
                    },
                    '& .MuiTableRow-root:last-child .MuiTableCell-body': {
                        borderBottom: 'none'
                    }
                }}>
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
                            {isLoading ? (
                                <TableRow>
                                    <TableCell colSpan={6} align="center" sx={{ py: 3 }}>
                                        <CircularProgress />
                                    </TableCell>
                                </TableRow>
                            ) : isError ? (
                                <TableRow>
                                    <TableCell colSpan={6} align="center" sx={{ color: 'error.main', py: 3 }}>
                                        Error loading posts. Please try again.
                                    </TableCell>
                                </TableRow>
                            ) : currentPosts.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} align="center" sx={{ py: 3 }}>
                                        No posts found matching your criteria.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                currentPosts.map((post) => (
                                    <TableRow key={post.id}>
                                        <TableCell sx={{ color: '#475467' }}>
                                            {post.body.length > 30 ? `${post.body.substring(0, 30)}...` : post.body}
                                        </TableCell>
                                        <TableCell sx={{ color: '#475467' }}>
                                            {post.title.length > 20 ? `${post.title.substring(0, 20)}...` : post.title}
                                        </TableCell>
                                        <TableCell sx={{ color: '#475467' }}>{post.postId}</TableCell>
                                        <TableCell sx={{ color: '#101828', fontWeight: 500 }}>{post.user}</TableCell>
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
                                ))
                            )}
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
                        value={searchTerm}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
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
                        onClick={handleFilterClick}
                    >
                        <FilterListIcon />
                    </IconButton>
                </Box>

                {/* Mobile Posts List */}
                <List sx={{ bgcolor: 'transparent', p: 0 }}>
                    {isLoading ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                            <CircularProgress />
                        </Box>
                    ) : isError ? (
                        <Box sx={{ textAlign: 'center', color: 'error.main', py: 4 }}>
                            Error loading posts. Please try again.
                        </Box>
                    ) : currentPosts.length === 0 ? (
                        <Box sx={{ textAlign: 'center', py: 4 }}>
                            No posts found matching your criteria.
                        </Box>
                    ) : (
                        currentPosts.slice(0, 5).map((post) => (
                            <ListItem
                                key={post.id}
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
                                    {post.title.length > 30 ? `${post.title.substring(0, 30)}...` : post.title}
                                </Typography>
                                <Typography color="text.secondary" sx={{ mb: 1, fontSize: '0.875rem' }}>
                                    {post.body.length > 50 ? `${post.body.substring(0, 50)}...` : post.body}
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
                                        label={post.status}
                                        size="small"
                                        sx={{
                                            bgcolor: post.status === 'Success' ? '#ECFDF3' : post.status === 'Failed' ? '#FEF3F2' : '#FFFAEB',
                                            color: post.status === 'Success' ? '#027A48' : post.status === 'Failed' ? '#B42318' : '#B54708',
                                            fontWeight: 500,
                                            fontSize: '0.75rem'
                                        }}
                                    />
                                </Box>
                            </ListItem>
                        ))
                    )}
                </List>

                {/* Mobile Pagination */}
                {!isLoading && !isError && currentPosts.length > 0 && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: 1 }}>
                        <IconButton 
                            size="small" 
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        >
                            <KeyboardArrowLeftIcon />
                        </IconButton>
                        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                            Page {currentPage} of {totalPages}
                        </Typography>
                        <IconButton 
                            size="small"
                            disabled={currentPage >= totalPages}
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        >
                            <KeyboardArrowRightIcon />
                        </IconButton>
                    </Box>
                )}
            </Box>

            {/* Filters Menu */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleFilterClose}
            >
                <MenuItem onClick={() => handleFilterSelect(null)}>All Posts</MenuItem>
                <MenuItem onClick={() => handleFilterSelect('Success')}>Successful Posts</MenuItem>
                <MenuItem onClick={() => handleFilterSelect('Failed')}>Failed Posts</MenuItem>
                <MenuItem onClick={() => handleFilterSelect('Pending')}>Pending Posts</MenuItem>
            </Menu>
        </Box>
    );
}

export default Posts;