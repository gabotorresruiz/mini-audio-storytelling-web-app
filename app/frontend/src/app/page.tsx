import { type FC, ReactElement, Suspense } from 'react';
import { redirect } from 'next/navigation';
import { Session } from 'next-auth';
import { getAudios } from './api/server';
import { AudioList, LoaderTopView, Welcome } from './components';
import { Audio } from '@/types';
import { checkAuth } from '@/utils';

const AudioData: () => Promise<ReactElement> = async (): Promise<ReactElement> => {
  const session: Session | null = await checkAuth();

  if (!session) redirect('/signin');

  const data: Audio[] = await getAudios(session.user.token);

  return (
    <>
      <Welcome firstName={session.user.firstName || ''} lastName={session.user.lastName || ''} />
      <AudioList audios={data} />
    </>
  );
};

const Home: FC = async (): Promise<ReactElement> => {
  return (
    <Suspense fallback={<LoaderTopView />}>
      <AudioData />
    </Suspense>
  );
};

export default Home;
