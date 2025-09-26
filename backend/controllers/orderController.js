import User from '../models/userModel.js'
import Order from '../models/orderModel.js'
import Stripe from "stripe"
import dotenv from 'dotenv';
dotenv.config();

const stripe = new Stripe(process.env.stripe_secret_key)
//console.log(process.env.stripe_secret_key)
const placeOrder=async(req,res)=>{
   const frontend_url = 'http://localhost:3000'
   const {address,amount,items} =req.body
   try {
    const order = new Order({
        userId:req.userId,
        address,
        amount,
        items
    })
    await order.save()
    await User.findByIdAndUpdate(req.userId,{cartData:{}})
    const line_items=items.map((item)=>({
        price_data:{
            currency:'usd',
            product_data:{
                name:item.name
            },
           unit_amount:item.price*100
        },
        quantity:item.quantity
    }))

    line_items.push({
        price_data:{
            currency:'usd',
            product_data:{
                name:'Delivery Charges'
            },
            unit_amount:2*100
        },
        quantity:1
    })

    const session =await stripe.checkout.sessions.create({
        line_items:line_items,
        mode:'payment',
        success_url:`${frontend_url}/verify?success=true&orderId=${order._id}`,
        cancel_url:`${frontend_url}/verify?success=false&orderId=${order._id}`
    })
    res.json({success:true,session_url:session.url})

   } catch (error) {
    //console.log(error)
   }
   res.json({success:false,message:'Something went wrong!'})
}

const Verify=async(req,res)=>{
    const {orderId,success}=req.body
    try {
        if(success=='true'){
        await Order.findByIdAndUpdate(orderId,{payment:true})
        res.json({success:true,message:"Payment made."})
    }else{
        await Order.findByIdAndDelete(orderId)
        res.json({success:false,message:'Error'})
    }
    } catch (error) {
       cosnole.log('Something went wrong!') 
    }
}

const userOrder=async(req,res)=>{
    try {
        const orders=await Order.find({userId:req.userId})
        res.json({success:true,data:orders})
    } catch (error) {
        console.log('Error')
        res.json({success:false,message:"Something went wrong!"})
    }
}

const listOrder=async(req,res)=>{
   try {
     const orders=await Order.find({})
     res.json({success:true,data:orders})
    
   } catch (error) {
    console.log(error)
    res.json({success:false,message:'Something went wrong!'})
   }
}

const updateStatus=async(req,res)=>{
    const {status,orderId}=req.body
    try {
        await Order.findByIdAndUpdate(orderId,{status:status})
        res.json({success:true,message:"Status Updated"})
    } catch (error) {
        console.log('Something went wrong!')
        res.json({success:false,message:'Server error'})
    }
}

export {placeOrder,Verify,userOrder,listOrder,updateStatus}