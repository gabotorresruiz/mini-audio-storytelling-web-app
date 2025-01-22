import * as Yup from 'yup';
import { SignUpData } from '@/types';

export interface SignUpFormProps {
  handleSubmit: (values: SignUpData) => Promise<void>;
  validationSchema: Yup.ObjectSchema<SignUpData>;
}
