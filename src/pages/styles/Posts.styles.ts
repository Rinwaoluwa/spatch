import styled from 'styled-components';
import { Box, Typography, TextField, Button, Card, IconButton, TableContainer, Chip, List, ListItem } from '@mui/material';
import { Theme } from '@mui/material/styles';

interface StyledProps {
  theme: Theme;
}

interface MetricTrendProps extends StyledProps {
  $isPositive?: boolean;
}

interface ActionButtonProps extends StyledProps {
  $color?: string;
}

interface StatusChipProps extends StyledProps {
  $status: 'Success' | 'Failed' | 'Pending';
}

export const SearchFilterContainer = styled(Box)<StyledProps>`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)}px;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down('md')} {
    display: none;
  }
`;

export const SearchField = styled(TextField)<StyledProps>`
  && {
    flex: 1;
    max-width: 400px;
    background-color: #ffffff;
    
    & .MuiOutlinedInput-root {
      border-radius: ${({ theme }) => theme.spacing(1)}px;
    }
  }
`;

export const FilterButton = styled(Button)<StyledProps>`
  && {
    color: ${({ theme }) => theme.palette.text.primary};
    border: 1px solid ${({ theme }) => theme.palette.divider};
    padding: ${({ theme }) => theme.spacing(1, 2)};
    text-transform: none;
  }
`;

export const PaginationContainer = styled(Box)<StyledProps>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)}px;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`;

export const StyledTableContainer = styled(TableContainer)<StyledProps>`
  && {
    margin-top: ${({ theme }) => theme.spacing(3)}px;
    background-color: #ffffff;
    border-radius: ${({ theme }) => theme.spacing(2)}px;
    border: 1px solid ${({ theme }) => theme.palette.divider};
  }
`;

export const MobileView = styled(Box)<StyledProps>`
  display: block;

  ${({ theme }) => theme.breakpoints.up('md')} {
    display: none;
  }
`;

export const DesktopView = styled(Box)<StyledProps>`
  display: none;

  ${({ theme }) => theme.breakpoints.up('md')} {
    display: block;
  }
`;

export const PostTitle = styled(Typography)<StyledProps>`
  && {
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacing(1)}px;
  }
`;

export const PostBody = styled(Typography)<StyledProps>`
  && {
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: ${({ theme }) => theme.spacing(2)}px;
  }
`;

export const PostFooter = styled(Box)<StyledProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const PostAuthor = styled(Typography)<StyledProps>`
  && {
    color: ${({ theme }) => theme.palette.text.secondary};
    font-size: 0.875rem;
  }
`;

export const MobilePagination = styled(Box)<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

export const PageContainer = styled(Box)<StyledProps>`
  padding-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const MobileHeader = styled(Box)<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  gap: ${({ theme }) => theme.spacing(2)};

  ${props => props.theme.breakpoints.up('md')} {
    display: none;
  }
`;

export const MobileMenuButton = styled(IconButton)<StyledProps>`
  && {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

export const UserAvatar = styled('img')`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const PageTitleContainer = styled(Box)<StyledProps>`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
`;

export const TitleContent = styled(Box)`
  && {
    display: flex;
    flex-direction: column;
  }
`;

export const PageTitleText = styled(Typography)<StyledProps>`
  && {
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacing(1)}px;
  }
`;

export const PageSubtitle = styled(Typography)<StyledProps>`
  && {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const AddButtonStyled = styled(Button)`
  && {
    background-color: #7000F6;
    border-radius: 50%;
    min-width: unset;
    width: 56px;
    height: 56px;

    &:hover {
      background-color: #6000D6;
    }
  }
`;

export const MetricsContainer = styled(Box)<StyledProps>`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)}px;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  flex-direction: row;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const MetricCardStyled = styled(Card)<StyledProps>`
  && {
    flex: 1;
    padding: ${({ theme }) => theme.spacing(3)}px;
    background-color: #F9FAFB;
    border: 1px solid #EAECF0;
    box-shadow: none;
    border-radius: ${({ theme }) => theme.spacing(2)}px;
    max-width: 258px;
  }
`;

export const MetricStatsContainer = styled(Box)<StyledProps>`
  && {
    display: flex;
    align-items: baseline;
    gap: ${({ theme }) => theme.spacing(1)}px;
    margin-bottom: ${({ theme }) => theme.spacing(1)}px;
  }
`;

export const HeaderContent = styled(Box)<StyledProps>`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
`;

export const TitleSection = styled(Box)<StyledProps>``;

export const PageTitle = styled(Typography)<StyledProps>`
  && {
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacing(1)}px;
  }
`;

export const MetricLabel = styled(Typography)<StyledProps>`
  && {
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: ${({ theme }) => theme.spacing(1)}px;
  }
`;

export const MetricValue = styled(Typography)<StyledProps>`
  && {
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacing(1)};
  }
`;

export const MetricTrend = styled(Typography)<MetricTrendProps>`
  && {
    color: ${({ $isPositive }) => $isPositive ? '#027A48' : '#B42318'};
    font-size: 0.875rem;
  }
`;

export const ActionButton = styled(Button)<ActionButtonProps>`
  && {
    color: ${({ $color }) => $color || '#7000F6'};
    padding: 0;
    text-transform: none;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(0.5)}px;
    font-weight: 500;

    &:hover {
      background-color: transparent;
      text-decoration: underline;
    }
  }
`;
    &:hover {
      background-color: transparent;
      text-decoration: underline;
    }
  }
\`;

export const SearchFilterContainer = styled(Box)<StyledProps>`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  align-items: center;
`;

export const SearchField = styled(TextField)<StyledProps>`
  && {
    flex: 1;
    max-width: 250px;
    background-color: white;

    .MuiOutlinedInput-root {
      border-radius: ${({ theme }) => theme.spacing(1)};
    }
  }
`;

export const FilterButton = styled(Button)<StyledProps>`
  && {
    color: ${({ theme }) => theme.palette.text.primary};
    background-color: white;
    border: 1px solid;
    border-color: ${({ theme }) => theme.palette.divider};
    text-transform: none;
    padding-left: ${({ theme }) => theme.spacing(2)};
    padding-right: ${({ theme }) => theme.spacing(2)};
  }
`;

export const PaginationContainer = styled(Box)<StyledProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

interface ThemedProps {
  theme: Theme;
}

export const StyledTableContainer = styled(TableContainer)<ThemedProps>`
  && {
    background-color: white;
    border-radius: ${({ theme }) => theme.spacing(1)}px;
    border: 1px solid #EAECF0;
    box-shadow: 0 1px 3px rgba(16, 24, 40, 0.1);

    & .MuiTableHead-root {
      background-color: #F9FAFB;
    }

    & .MuiTableCell-head {
      color: #475467;
      font-weight: 500;
      border-bottom: 1px solid #EAECF0;
      padding: ${({ theme }) => theme.spacing(3)}px;
    }

    & .MuiTableCell-body {
      padding: ${({ theme }) => theme.spacing(2, 3)};
      border-bottom: 1px solid #EAECF0;
    }

    .MuiTableRow-root:last-child .MuiTableCell-body {
      border-bottom: none;
    }
  }
`;

export const StatusChip = styled(Chip)<StatusChipProps>`
  && {
    background-color: ${({ $status }) => 
      $status === 'Success' ? '#ECFDF3' : 
      $status === 'Failed' ? '#FEF3F2' : '#FFFAEB'
    };
    color: ${({ $status }) => 
      $status === 'Success' ? '#027A48' : 
      $status === 'Failed' ? '#B42318' : '#B54708'
    };
    font-weight: 500;
    font-size: 0.75rem;
  }
`;

export const MobileView = styled(Box)<StyledProps>`
  display: block;

  ${({ theme }) => theme.breakpoints.up('md')} {
    display: none;
  }
`;

export const DesktopView = styled(Box)<StyledProps>`
  display: none;

  ${({ theme }) => theme.breakpoints.up('md')} {
    display: block;
  }
`;

export const MobileSearchContainer = styled(Box)<StyledProps>`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const MobileFilterButton = styled(IconButton)<StyledProps>`
  && {
    background-color: white;
    border: 1px solid;
    border-color: ${({ theme }) => theme.palette.divider};
    border-radius: ${({ theme }) => theme.spacing(1)};
  }
`;

export const MobilePostsList = styled(List)<StyledProps>`
  && {
    background-color: transparent;
    padding: 0;
  }
`;

export const MobilePostItem = styled(ListItem)<StyledProps>`
  && {
    background-color: #FFFFFF;
    margin-bottom: ${({ theme }) => theme.spacing(2)};
    border-radius: ${({ theme }) => theme.spacing(2)};
    flex-direction: column;
    align-items: flex-start;
    padding: ${({ theme }) => theme.spacing(2)};
    border: 1px solid #EAECF0;
  }
`;

export const PostTitle = styled(Typography)<StyledProps>`
  && {
    font-weight: 500;
    margin-bottom: ${({ theme }) => theme.spacing(0.5)};
  }
`;

export const PostBody = styled(Typography)<StyledProps>`
  && {
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: ${({ theme }) => theme.spacing(1)};
    font-size: 0.875rem;
  }
`;

export const PostFooter = styled(Box)<StyledProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const PostAuthor = styled(Typography)<StyledProps>`
  && {
    color: ${({ theme }) => theme.palette.text.secondary};
    font-size: 0.875rem;
  }
`;

export const MobilePagination = styled(Box)<StyledProps>`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(2)};
  gap: ${({ theme }) => theme.spacing(1)};
`;
