'use client';
import { type FC, ReactElement, useState } from 'react';
import * as Yup from 'yup';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { SignInData } from '@/types';

interface SignInFormProps {
  handleSubmit: (values: SignInData) => Promise<void>;
  validationSchema: Yup.ObjectSchema<SignInData>;
}

const SignInForm: FC<SignInFormProps> = ({
  handleSubmit,
  validationSchema
}: SignInFormProps): ReactElement => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => setShowPassword((prev: boolean): boolean => !prev);

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <Field
            as={TextField}
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <Field name="password">
            {({
              field
            }: {
              field: {
                name: string;
                value: string;
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
                onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
              };
            }) => (
              <TextField
                {...field}
                label="Password"
                variant="outlined"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                margin="normal"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }
                }}
              />
            )}
          </Field>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            sx={{ marginTop: 2 }}
          >
            Sign In
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
