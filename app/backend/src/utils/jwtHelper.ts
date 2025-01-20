import jwt from 'jsonwebtoken'
import { authConfig } from '../config'

export const generateToken = (id: string): string =>
  jwt.sign({ id }, authConfig.secret, {
    expiresIn: authConfig.expiresIn,
  })
