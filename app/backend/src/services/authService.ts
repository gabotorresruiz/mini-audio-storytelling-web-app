import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'
import { generateToken } from '../utils/jwtHelper'
import { getDbInstance } from '../config'
import {
  Database,
  SignUpData,
  SignInData,
  SignInReturnData,
  SignUpReturnData,
  User,
} from '../types'
import { Low } from 'lowdb/lib'

export const signIn: (signInData: SignInData) => Promise<SignInReturnData> = async ({
  email,
  password,
}: SignInData): Promise<SignInReturnData> => {
  const db: Low<Database> = await getDbInstance()
  const user: User | undefined = db.data?.users.find((user: User): boolean => user.email === email)

  if (!user) throw new Error('Invalid email or password')

  const isPasswordValid = await bcrypt.compare(password, user.password)

  if (!isPasswordValid) throw new Error('Invalid email or password')

  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    token: generateToken(user.id),
  }
}

export const signUp: (newUser: SignUpData) => Promise<SignUpReturnData> = async ({
  firstName,
  lastName,
  email,
  password,
}: SignUpData): Promise<SignUpReturnData> => {
  const db: Low<Database> = await getDbInstance()

  const userExists: User | undefined = db.data?.users.find(
    (user: User): boolean => user.email === email
  )

  if (userExists) throw new Error('User already exists')

  const id: string = uuidv4()
  const hashedPassword: string = await bcrypt.hash(password, 10)

  const newUser: User = {
    id,
    firstName,
    lastName,
    email,
    password: hashedPassword,
  }

  db.data?.users.push(newUser)

  await db.write()

  return { id, firstName, lastName, email }
}
