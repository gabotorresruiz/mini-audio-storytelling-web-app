import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const StyledAudioContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto'
}));

export const StyledAudioItem = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

export const StyledAudioThumbnail = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: theme.shape.borderRadius,
  maxHeight: 150,
  objectFit: 'cover',
  marginBottom: theme.spacing(1)
}));

export const StyledAudio = styled('audio')(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.default,
  border: 'none',
  borderRadius: theme.shape.borderRadius
}));
