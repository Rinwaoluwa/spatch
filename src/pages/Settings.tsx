import React from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  Switch,
  FormControlLabel,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Settings: React.FC = () => {
    const navigate = useNavigate();

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Profile Settings
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <TextField
                fullWidth
                label="Display Name"
                defaultValue="John Doe"
                variant="outlined"
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <TextField
                fullWidth
                label="Email"
                defaultValue="john.doe@example.com"
                variant="outlined"
              />
            </Box>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Notification Settings
            </Typography>
          </Box>
          <Box>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Email Notifications"
            />
          </Box>
          <Box>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Push Notifications"
            />
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Privacy Settings
            </Typography>
          </Box>
          <Box>
            <FormControlLabel
              control={<Switch />}
              label="Make Profile Public"
            />
          </Box>
          <Box>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Show Email Address"
            />
          </Box>
          <Box sx={{ mt: 3 }}>
            <Button variant="contained" color="primary">
              Save Changes
            </Button>
            <Button variant="outlined" sx={{ ml: 2 }} onClick={() => navigate("/SignIn")}>
              Logout
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Settings;