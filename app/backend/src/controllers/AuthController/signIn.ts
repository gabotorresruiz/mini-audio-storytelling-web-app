import { Request, Response } from 'express'
import { signIn as service } from '../../services'

export default async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const userData = await service(email, password)

    res.status(200).json(userData)
  } catch (error: unknown) {
    let errorMsg = 'An error occurred during sign in'
    if (typeof error === 'string') errorMsg = error
    else if (error instanceof Error) errorMsg = error.message

    res.status(400).json({ message: errorMsg })
    console.error(errorMsg)
  }
}
