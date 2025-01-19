import { Request, Response } from 'express'
import { getAudioFiles } from '../../services'

export default async (req: Request, res: Response) => {
  try {
    const audios = await getAudioFiles()

    res.status(200).json(audios)
  } catch (error: unknown) {
    let errorMsg = 'Failed to fetch audio files'
    if (typeof error === 'string')
      errorMsg = `Failed to fetch audio files: ${error}`
    else if (error instanceof Error)
      errorMsg = `Failed to fetch audio files: ${error.message}`

    res.status(500).json({ message: errorMsg })
    console.error(errorMsg)
  }
}
