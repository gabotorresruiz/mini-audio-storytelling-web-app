'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Session } from 'next-auth';

const useAuthCheck: () => {
  isLoading: boolean;
  session: Session | null;
  status: 'loading' | 'authenticated' | 'unauthenticated';
} = () => {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === 'loading') {
      setIsLoading(true);
    } else if (status === 'authenticated') {
      setIsLoading(false);
    } else if (status === 'unauthenticated') {
      setIsLoading(false);
    }
  }, [status]);

  return { isLoading, session, status };
};

export default useAuthCheck;
