import mongoose from 'mongoose'
const orderSchema=new mongoose.Schema({
  userId:{type:String, required:true},
  items:{type:Array, required:true},
  payment:{type:Boolean,default:false},
  address:{type:Object,required:true},
  amount:{type:Number,required:true},
  status:{type:String,default:"Food processing"},
  date:{type:String, default: Date.now()}
})

const Order = mongoose.model('Order',orderSchema)
export default Order