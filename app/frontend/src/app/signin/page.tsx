'use client';
import { ReactElement, type FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn, SignInResponse } from 'next-auth/react';
import { StyledAuthFormWrapper, StyledFormPaper } from '@/styles';
import { signInSchema as validationSchema } from '@/schemas';
import NoAuthGuard from '@/HOC/NoAuthGuard';
import { useSnackbarContext } from '@/context';
import { Button, Typography } from '@mui/material';
import { SignInForm } from '../components';
import { SignInData } from '@/types';

const SignIn: FC = (): ReactElement => {
  const router = useRouter();
  const { dispatch } = useSnackbarContext();

  const handleSubmit: (values: SignInData) => Promise<void> = async (
    values: SignInData
  ): Promise<void> => {
    const result: SignInResponse | undefined = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password
    });

    if (!result?.error) return router.push('/');

    dispatch({
      type: 'SHOW_SNACKBAR',
      payload: {
        title: 'Invalid email or password',
        severity: 'error'
      }
    });
  };

  return (
    <NoAuthGuard>
      <StyledAuthFormWrapper>
        <StyledFormPaper>
          <Typography variant="h4" align="center" gutterBottom>
            Sign In
          </Typography>
          <SignInForm handleSubmit={handleSubmit} validationSchema={validationSchema} />
          <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
            Don&apos;t have an account?{' '}
            <Link href="/signup" passHref>
              <Button sx={{ textTransform: 'none' }}>Sign up</Button>
            </Link>
          </Typography>
        </StyledFormPaper>
      </StyledAuthFormWrapper>
    </NoAuthGuard>
  );
};

export default SignIn;
