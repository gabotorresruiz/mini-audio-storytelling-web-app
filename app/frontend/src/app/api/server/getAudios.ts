import { SERVER_API as API } from '@/lib';
import { Audio } from '@/types';
import { AxiosResponse } from 'axios';

const getAudios: (token: string | undefined) => Promise<Audio[]> = async (
  token: string | undefined
): Promise<Audio[]> => {
  if (!token) return [];

  try {
    const response: AxiosResponse<Audio[]> = await API.get('/audios', {
      headers: { Authorization: `Bearer ${token}` },
      timeout: 15000
    });

    if (response.status !== 200) throw new Error('Failed to fetch data');

    return response.data as Audio[];
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default getAudios;
