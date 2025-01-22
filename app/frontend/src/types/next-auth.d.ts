import 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    token: string;
  }

  interface Session {
    user: {
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email?: string | null;
      token?: string;
    };
  }
}
