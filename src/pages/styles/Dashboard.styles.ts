import styled from 'styled-components';
import { Box, Typography, Paper } from '@mui/material';

export const PageContainer = styled(Box)`
  padding: ${props => props.theme.spacing(3)};
`;

export const PageTitle = styled(Typography)`
  && {
    margin-bottom: ${props => props.theme.spacing(3)};
    font-weight: 600;
  }
`;

export const StatsGrid = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing(3)};
`;

export const StatCard = styled(Paper)`
  padding: ${props => props.theme.spacing(3)};
  display: flex;
  flex-direction: column;
  height: 140px;
`;

export const StatCardWrapper = styled(Box)`
  flex: 1 1 100%;

  ${props => props.theme.breakpoints.up('md')} {
    flex: 1 1 calc(50% - ${props => props.theme.spacing(2)}px);
  }

  ${props => props.theme.breakpoints.up('lg')} {
    flex: 1 1 calc(25% - ${props => props.theme.spacing(2.25)}px);
  }
`;

export const StatLabel = styled(Typography)`
  && {
    color: ${props => props.theme.palette.text.secondary};
    margin-bottom: ${props => props.theme.spacing(1)};
  }
`;

export const StatValue = styled(Typography)`
  && {
    font-size: 2.125rem;
    font-weight: 500;
  }
`;
