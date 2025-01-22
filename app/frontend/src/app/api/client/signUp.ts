import { PUBLIC_API as API } from '@/lib';
import { SignUpData, SignUpReturnData } from '@/types';
import { AxiosResponse } from 'axios';

const signUp: (newUser: SignUpData) => Promise<SignUpReturnData> = async (
  newUser: SignUpData
): Promise<SignUpReturnData> => {
  try {
    const response: AxiosResponse<SignUpReturnData> = await API.post('/auth/signup', newUser);

    if (response.status !== 201) throw new Error('Sign up failed');

    return response.data as SignUpReturnData;
  } catch (error) {
    console.error('Sign up failed', error);
    throw new Error(
      error instanceof Error
        ? `Sign up failed: ${error.message}`
        : `Sign up failed: ${String(error)}`
    );
  }
};

export default signUp;
