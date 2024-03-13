import express from 'express'
import ConnectDB from './db/MongoDB.js'
import dotenv from 'dotenv'

const app = express()
const port = process.env.PORT || 5000

dotenv.config()


app.listen(port, () => {
    console.log(`connected to port: ${port}`)
    ConnectDB()
})