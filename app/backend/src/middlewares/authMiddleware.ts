import { Request, Response, NextFunction, RequestHandler } from 'express'
import jwt from 'jsonwebtoken'
import { authConfig } from '../config'

const authMiddleware: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  const authHeader: string | undefined = req.headers.authorization

  if (!authHeader) {
    res.status(401).json({ message: 'Access denied, no token provided' })
    return
  } else {
    const token: string | undefined = req.headers['authorization']?.split(' ')[1] // Get token from header

    if (!token) {
      res.status(403).json({ message: 'Access denied. No token provided.' })
      return
    } else {
      try {
        const decoded = jwt.verify(token, authConfig.secret) as { id: number }
        req.body.userId = decoded.id
        next()
      } catch (error: unknown) {
        let errorMsg: string = 'Invalid token'
        if (typeof error === 'string') errorMsg = error
        else if (error instanceof Error) errorMsg = error.message

        res.status(401).json({ message: errorMsg })
      }
    }
  }
}

export default authMiddleware
