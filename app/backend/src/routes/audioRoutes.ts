import express from 'express'
import { AudioController as controller } from '../controllers'
import { authMiddleware } from '../middlewares'

const router = express.Router()

router.get('/', authMiddleware, controller.list)

export default router
