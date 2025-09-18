import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import ConnectDB from './config/db.js'
import foodRoute from './routes/foodRoute.js'
import userRoute from './routes/userRoute.js'
import cartRoute from './routes/cartRoute.js'
import orderRoute from './routes/orderRoute.js'

const app = express()

app.use(cors())
app.use(express.json())

//route middleware
app.use("/api/food",foodRoute)
app.use('/api/user',userRoute)
app.use("/images", express.static("uploads"))
app.use('/api/cart',cartRoute)
app.use('/api/order',orderRoute)


ConnectDB().then(()=>{
    app.listen(5000,()=>{
    console.log('Server is running on port 5000 ...!')
})
})