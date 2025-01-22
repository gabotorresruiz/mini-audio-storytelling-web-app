import { Request, Response } from 'express'
import { getAudioFiles } from '../../services'
import { FreesoundAudioFile } from '../../types'

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const audios: FreesoundAudioFile[] = await getAudioFiles()

    res.status(200).json(audios)
  } catch (error: unknown) {
    let errorMsg: string = 'Failed to fetch audio files'

    if (typeof error === 'string') errorMsg = `Failed to fetch audio files: ${error}`
    else if (error instanceof Error) errorMsg = `Failed to fetch audio files: ${error.message}`

    res.status(400).json({ message: errorMsg })
    console.error(errorMsg)
  }
}
