import express from 'express'
import { AuthController as controller } from '../controllers'

const router = express.Router()

router.post('/signup', controller.signUp)
router.post('/signin', controller.signIn)

export default router
