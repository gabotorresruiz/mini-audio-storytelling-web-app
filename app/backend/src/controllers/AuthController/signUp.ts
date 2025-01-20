import { Request, Response } from 'express'
import { signUp as service } from '../../services'

export default async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body
    const message = await service({
      firstName,
      lastName,
      email,
      password,
    })

    res.status(201).json({ message })
  } catch (error: unknown) {
    let errorMsg = 'An error occurred during sign up'
    if (typeof error === 'string') errorMsg = error
    else if (error instanceof Error) errorMsg = error.message

    res.status(400).json({ message: errorMsg })
    console.error(errorMsg)
  }
}
