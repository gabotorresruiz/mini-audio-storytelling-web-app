'use client';
import { type FC, ReactElement } from 'react';
import { Snackbar as MuiSnackbar, Alert } from '@mui/material';
import { useSnackbarContext } from '@/context';

const Snackbar: FC = (): ReactElement => {
  const { state, dispatch } = useSnackbarContext();

  const handleClose = () => {
    dispatch({ type: 'HIDE_SNACKBAR' });
  };

  return (
    <MuiSnackbar
      open={state.open}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert
        onClose={handleClose}
        variant={state.severity === 'success' ? 'outlined' : 'filled'}
        severity={state.severity}
        sx={{
          width: '100%',
          bgcolor: state.severity === 'success' ? 'background.paper' : ''
        }}
      >
        {state.title}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
