import mongoose from "mongoose";
const ConnectDB = async () =>{
    await mongoose.connect(process.env.mongoDB_string).then(()=>{
        console.log('MongoDB connected successfully!')
    })
}

export default ConnectDB