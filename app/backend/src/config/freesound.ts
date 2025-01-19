import dotenv from 'dotenv'
dotenv.config()

const freesoundConfig = {
  baseUrl: process.env.FREESOUND_BASE_URL,
  apiKey: process.env.FREESOUND_API_KEY,
}

export default freesoundConfig
