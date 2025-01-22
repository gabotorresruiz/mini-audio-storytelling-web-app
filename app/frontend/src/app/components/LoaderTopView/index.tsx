import { ReactElement, type FC } from 'react';
import { Box, LinearProgress } from '@mui/material';

const LoaderTopView: FC = (): ReactElement => (
  <Box position="absolute" width="100%" left={0} top={0}>
    <LinearProgress />
  </Box>
);

export default LoaderTopView;
