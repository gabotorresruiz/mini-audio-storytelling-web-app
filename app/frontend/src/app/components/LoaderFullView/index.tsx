import { ReactElement, type FC } from 'react';
import { Box, CircularProgress } from '@mui/material';

const LoaderFullView: FC = (): ReactElement => (
  <Box display="flex" alignItems="center" justifyContent="center" minHeight="calc(100vh - 110px)">
    <CircularProgress />
  </Box>
);

export default LoaderFullView;
