'use client';
import { ReactElement, ReactNode, useEffect } from 'react';
import { LoaderFullView } from '@/app/components';
import { useAuthCheck } from '@/hooks';
import { useRouter } from 'next/navigation';

const NoAuthGuard: ({ children }: { children: ReactNode }) => ReactNode = ({
  children
}: {
  children: ReactNode;
}): ReactElement | undefined => {
  const { isLoading, status } = useAuthCheck();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') router.push('/');
  }, [status, router]);

  if (isLoading) return <LoaderFullView />;
  if (status === 'unauthenticated') return <>{children}</>;
};

export default NoAuthGuard;
