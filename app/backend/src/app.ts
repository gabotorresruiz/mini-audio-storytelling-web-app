import express from 'express'
import cors from 'cors'
import { audioRoutes, authRoutes } from './routes'

const app: express.Application = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/audios', audioRoutes)

export default app
