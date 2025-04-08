import React from 'react';
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    InputLabel,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignIn: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/posts');
    };

    return (
        <Box 
            sx={{ 
                minHeight: '100vh',
                display: 'flex',
                bgcolor: 'white'
            }}
        >
            {/* Left Section with Image */}
            <Box 
                sx={{ 
                    flex: 1,
                    bgcolor: '#F8F2DC',
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    p: 4,
                    maxWidth: '50%',
                }}
            >
                {/* Logo in top-left corner */}
                <Box 
                    sx={{ 
                        position: 'absolute',
                        top: 32,
                        left: 32
                    }}
                >
                    <img src="/spatch-logo.svg" alt="Spatch" style={{ height: '32px' }} />
                </Box>
                
                {/* Phone Image */}
                <img 
                    src="/signup-image.svg" 
                    alt="Spatch App" 
                    style={{ 
                        height: 'auto',
                        maxHeight: '80vh',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        margin: '0 auto'
                    }} 
                />
            </Box>

            {/* Right Section with Form */}
            <Box 
                sx={{ 
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    p: 4,
                    maxWidth: { xs: '100%', md: '500px' }
                }}
            >
                {/* Logo for mobile view */}
                <Box 
                    sx={{ 
                        display: { xs: 'block', md: 'none' },
                        mb: 4
                    }}
                >
                    <img src="/spatch-logo.svg" alt="Spatch" style={{ height: '32px' }} />
                </Box>

                <Box sx={{ maxWidth: 400, width: '100%', mx: 'auto' }}>
                    <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
                        Sign In
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <Box sx={{ mb: 3 }}>
                            <Typography sx={{ mb: 1, fontWeight: 500 }}>
                                Email Address<Box component="span" sx={{ color: '#FF0000' }}>*</Box>
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Enter email address"
                                type="email"
                                required
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        bgcolor: 'white'
                                    }
                                }}
                            />
                        </Box>

                        <Box sx={{ mb: 4 }}>
                            <Typography sx={{ mb: 1, fontWeight: 500 }}>
                                Password<Box component="span" sx={{ color: '#FF0000' }}>*</Box>
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Enter password"
                                type="password"
                                required
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        bgcolor: 'white'
                                    }
                                }}
                            />
                        </Box>

                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            sx={{
                                bgcolor: '#7000F6',
                                py: 1.5,
                                textTransform: 'none',
                                fontSize: '1rem',
                                '&:hover': {
                                    bgcolor: '#6000D6'
                                }
                            }}
                        >
                            Sign In
                        </Button>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default SignIn; 