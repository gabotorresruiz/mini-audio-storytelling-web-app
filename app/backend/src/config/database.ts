import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import path from 'path'
import fs from 'fs'

interface Database {
  users: {
    id: string
    firstName: string
    lastName: string
    email: string
    password: string
  }[]
}

const dbPath = path.join(__dirname, '..', '..', 'data', 'db.json')

const dataDir = path.join(__dirname, '..', '..', 'data')
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir)

let db: Low<Database> | null = null

const getDbInstance = async (): Promise<Low<Database>> => {
  if (!db) {
    const adapter = new JSONFile<Database>(dbPath)

    db = new Low(adapter, { users: [] })

    await db.read()
    await db.write()

    console.log('Database initialized with Lowdb')
  }

  return db
}

export default getDbInstance
