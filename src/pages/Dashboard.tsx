import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Dashboard: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(50% - 16px)', lg: '1 1 calc(25% - 18px)' } }}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
            }}
          >
            <Typography color="text.secondary" gutterBottom>
              Total Posts
            </Typography>
            <Typography variant="h4">150</Typography>
          </Paper>
        </Box>
        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(50% - 16px)', lg: '1 1 calc(25% - 18px)' } }}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
            }}
          >
            <Typography color="text.secondary" gutterBottom>
              Active Users
            </Typography>
            <Typography variant="h4">1,250</Typography>
          </Paper>
        </Box>
        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(50% - 16px)', lg: '1 1 calc(25% - 18px)' } }}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
            }}
          >
            <Typography color="text.secondary" gutterBottom>
              Comments
            </Typography>
            <Typography variant="h4">3,427</Typography>
          </Paper>
        </Box>
        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(50% - 16px)', lg: '1 1 calc(25% - 18px)' } }}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
            }}
          >
            <Typography color="text.secondary" gutterBottom>
              Engagement Rate
            </Typography>
            <Typography variant="h4">67%</Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard; 