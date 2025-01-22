import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import path from 'path'
import fs from 'fs'
import { Database } from '../types'

const dbPath: string = path.join(__dirname, '..', '..', 'data', 'db.json')

const dataDir: string = path.join(__dirname, '..', '..', 'data')
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir)

let db: Low<Database> | null = null

const getDbInstance: () => Promise<Low<Database>> = async (): Promise<Low<Database>> => {
  if (!db) {
    const adapter = new JSONFile<Database>(dbPath)

    db = new Low(adapter, { users: [] })

    await db.read()
    await db.write()

    console.log('Database initialized')
  }

  return db
}

export default getDbInstance
