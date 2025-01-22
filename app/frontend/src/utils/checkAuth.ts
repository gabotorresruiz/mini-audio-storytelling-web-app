import { getServerSession, Session } from 'next-auth';
import { auth as authOptions } from '@/lib';

export const checkAuth: () => Promise<Session | null> = async (): Promise<Session | null> => {
  const session: Session | null = await getServerSession(authOptions);
  return session;
};

export default checkAuth;
