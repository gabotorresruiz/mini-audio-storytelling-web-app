import axios from 'axios'
import { freesoundConfig } from '../config'
import { FreesoundAudioFile, FreesoundResponse } from '../types'

export const getAudioFiles: (query?: string) => Promise<FreesoundAudioFile[]> = async (
  query: string = 'erotica'
): Promise<FreesoundAudioFile[]> => {
  try {
    const response = await axios.get<FreesoundResponse>(`${freesoundConfig.baseUrl}/search/text/`, {
      timeout: 15000,
      headers: {
        Authorization: `Token ${freesoundConfig.apiKey}`,
      },
      params: {
        query,
        page_size: 9,
        fields: 'id,name,previews,description,bookmark,download,duration,images',
      },
    })

    return response.data.results
  } catch (error) {
    console.error('Error fetching audio files:', error)
    throw new Error('Failed to fetch audio files.')
  }
}
