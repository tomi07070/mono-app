import express from 'express'
import ConnectDB from './db/MongoDB.js'
import dotenv from 'dotenv'
import AuthRoute from './Routes/AuthRoute.js'
import cookieParser from 'cookie-parser'

const app = express()
const port = process.env.PORT || 5000

app.use(cookieParser())
app.use(express.json());
dotenv.config()

app.use("/auth", AuthRoute)

app.listen(port, () => {
    console.log(`connected to port: ${port}`)
    ConnectDB()
})