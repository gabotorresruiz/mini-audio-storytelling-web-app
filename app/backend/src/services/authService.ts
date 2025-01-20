import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'
import { generateToken } from '../utils/jwtHelper'
import { getDbInstance } from '../config'

interface SignInReturnData {
  id: string
  firstName: string
  lastName: string
  email: string
  token: string
}

interface NewUser {
  firstName: string
  lastName: string
  email: string
  password: string
}

export const signIn = async (
  email: string,
  password: string
): Promise<SignInReturnData> => {
  const db = await getDbInstance()
  const user = db.data?.users.find((user) => user.email === email)

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

export const signUp = async ({
  firstName,
  lastName,
  email,
  password,
}: NewUser): Promise<string> => {
  const db = await getDbInstance()
  const userExists = db.data?.users.find((user) => user.email === email)

  if (userExists) throw new Error('User already exists')

  const hashedPassword = await bcrypt.hash(password, 10)
  const newUser = {
    id: uuidv4(),
    firstName,
    lastName,
    email,
    password: hashedPassword,
  }

  db.data?.users.push(newUser)

  await db.write()

  return 'User created successfully'
}
