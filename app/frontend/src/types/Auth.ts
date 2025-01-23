export interface SignInData {
  email: string;
  password: string;
}

export interface SignInReturnData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
}

export interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignUpReturnData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}
