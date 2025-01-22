import { AxiosResponse } from 'axios';
import { AuthOptions, Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';
import { SERVER_API as API } from '.';
import { SignInData, SignInReturnData } from '@/types';

const auth: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials: SignInData | undefined): Promise<SignInReturnData | null> {
        if (!credentials?.email || !credentials?.password) return null;

        try {
          const res: AxiosResponse<SignInReturnData> = await API.post('/auth/signin', {
            email: credentials.email,
            password: credentials.password
          });

          const user: SignInReturnData = res.data;
          if (res.status === 200 && user?.token) return user;

          return null;
        } catch (error) {
          console.error('Error during authentication:', error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: User }): Promise<JWT> {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.token = user.token;
      }

      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }): Promise<Session> {
      if (token) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
        session.user.token = token.token as string;
      }

      return session;
    }
  }
};

export default auth;
