import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const StyledAuthFormWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 'calc(100vh - 110px)'
}));

export const StyledFormPaper = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 400,
  margin: '0 auto',
  borderRadius: 8,
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: theme.palette.background.paper
}));
