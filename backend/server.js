import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import ConnectDB from './config/db.js'
import foodRoute from './routes/foodRoute.js'
import userRoute from './routes/userRoute.js'

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())

//route middleware
app.use("/api/food",foodRoute)
app.use('/api/user',userRoute)
app.use("/images", express.static("uploads"))


ConnectDB().then(()=>{
    app.listen(5000,()=>{
    console.log('Server is running on port 5000 ...!')
})
})