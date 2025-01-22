'use client';
import { type FC, ReactElement, useState } from 'react';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { SignUpFormProps } from './types';

const SignUpForm: FC<SignUpFormProps> = ({
  handleSubmit,
  validationSchema
}: SignUpFormProps): ReactElement => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => setShowPassword((prev: boolean): boolean => !prev);

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
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
            name="firstName"
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            error={touched.firstName && Boolean(errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />
          <Field
            as={TextField}
            name="lastName"
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            error={touched.lastName && Boolean(errors.lastName)}
            helperText={touched.lastName && errors.lastName}
          />
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
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isSubmitting}
            sx={{ marginTop: 2 }}
          >
            Sign Up
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
