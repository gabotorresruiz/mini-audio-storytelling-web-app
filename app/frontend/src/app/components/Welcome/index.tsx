import { Box, Typography } from '@mui/material';
import { type FC, ReactElement } from 'react';
import { WelcomeProps } from './types';

const Welcome: FC<WelcomeProps> = ({ firstName, lastName }: WelcomeProps): ReactElement => (
  <Box mb={4}>
    <Typography variant="h1">
      Welcome {firstName} {lastName}!
    </Typography>
    <Typography variant="body1">
      Here&apos;s a sample of interesting sounds for you. Enjoy! ;)
    </Typography>
  </Box>
);

export default Welcome;
