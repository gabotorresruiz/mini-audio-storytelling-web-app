import { Request, Response } from 'express'
import { signUp as service } from '../../services'
import { SignUpReturnData } from '../../types'

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstName, lastName, email, password } = req.body
    const newUser: SignUpReturnData = await service({
      firstName,
      lastName,
      email,
      password,
    })

    res.status(201).json(newUser)
  } catch (error: unknown) {
    let errorMsg: string = 'An error occurred during sign up'

    if (typeof error === 'string') errorMsg = error
    else if (error instanceof Error) errorMsg = error.message

    res.status(400).json({ message: errorMsg })
    console.error(errorMsg)
  }
}
