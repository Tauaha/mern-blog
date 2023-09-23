import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoter from './routes/auth.js'

const app = express()

dotenv.config()

//Conctants
const PORT = process.env.PORT
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME


app.use(cors())
app.use(express.json())

//Routes
app.use('/api/auth', authRoter)


async function start() {
    try {
        await mongoose.connect(
`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster3.cdacopi.mongodb.net/${DB_NAME}`
        )
        app.listen(PORT, () => {
            console.log(`Server RUN on port: ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}


start()
