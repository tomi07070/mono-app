import express from 'express'
import { AddDays, GetDays } from '../controlers/AddDayController.js'

const router = express.Router()

router.post("/day", AddDays)

router.get("/days", GetDays)

export default router