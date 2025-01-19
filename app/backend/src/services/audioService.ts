import axios from 'axios'
import { freesoundConfig } from '../config'

interface FreesoundAudioFile {
  id: number
  name: string
  previews: {
    'preview-hq-mp3': string
  }
  download: string
  description: string
}

interface FreesoundResponse {
  results: FreesoundAudioFile[]
}

export const getAudioFiles = async (
  query: string = 'erotica'
): Promise<FreesoundAudioFile[]> => {
  try {
    const response = await axios.get<FreesoundResponse>(
      `${freesoundConfig.baseUrl}/search/text/`,
      {
        headers: {
          Authorization: `Token ${freesoundConfig.apiKey}`,
        },
        params: {
          query,
          page_size: 10,
          fields:
            'id,name,previews,description,bookmark,download,duration,images',
        },
      }
    )

    return response.data.results
  } catch (error) {
    console.error('Error fetching audio files:', error)
    throw new Error('Failed to fetch audio files.')
  }
}
