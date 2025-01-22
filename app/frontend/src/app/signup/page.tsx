'use client';
import { ReactElement, type FC } from 'react';
import Link from 'next/link';
import { signIn, SignInResponse } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { signUpSchema as validationSchema } from '@/schemas';
import { StyledAuthFormWrapper, StyledFormPaper } from '@/styles';
import { SignUpData, SignUpReturnData } from '@/types';
import { useSnackbarContext } from '@/context';
import NoAuthGuard from '@/HOC/NoAuthGuard';
import { signUp } from '../api/client';
import { Button, Typography } from '@mui/material';
import { SignUpForm } from '../components';

const SignUp: FC = (): ReactElement => {
  const router = useRouter();
  const { dispatch } = useSnackbarContext();

  const handleSubmit: (values: SignUpData) => Promise<void> = async (
    values: SignUpData
  ): Promise<void> => {
    try {
      const result: SignUpReturnData = await signUp(values);

      if (result) {
        dispatch({
          type: 'SHOW_SNACKBAR',
          payload: {
            title: 'User created successfully!',
            severity: 'success'
          }
        });

        try {
          const newSignIn: SignInResponse | undefined = await signIn('credentials', {
            redirect: false,
            email: result.email,
            password: values.password
          });

          if (!newSignIn?.error) return router.push('/');
        } catch (err) {
          let errorMsg: string = 'Something went wrong with the sign in, please try again';

          if (typeof err === 'string') errorMsg = err;
          else if (err instanceof Error) errorMsg = err.message;

          dispatch({
            type: 'SHOW_SNACKBAR',
            payload: {
              title: errorMsg,
              severity: 'error'
            }
          });
        }
      }
    } catch (err: unknown) {
      let errorMsg: string = 'Something went wrong with the sign up, please try again';

      if (typeof err === 'string') errorMsg = err;
      else if (err instanceof Error) errorMsg = err.message;

      dispatch({
        type: 'SHOW_SNACKBAR',
        payload: {
          title: errorMsg,
          severity: 'error'
        }
      });
    }
  };

  return (
    <NoAuthGuard>
      <StyledAuthFormWrapper>
        <StyledFormPaper>
          <Typography variant="h4" align="center" gutterBottom>
            Sign Up
          </Typography>
          <SignUpForm handleSubmit={handleSubmit} validationSchema={validationSchema} />
          <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
            Already have an account?{' '}
            <Link href="/signin" passHref>
              <Button sx={{ textTransform: 'none' }}>Sign in</Button>
            </Link>
          </Typography>
        </StyledFormPaper>
      </StyledAuthFormWrapper>
    </NoAuthGuard>
  );
};

export default SignUp;
