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
    const line_items=req.body.items.map((item)=>({
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
        success_url:`${frontend_url}/verify?success=true&orderid=${order._id}`,
        cancel_url:`${frontend_url}/verify?success=false&orderid=${order._id}`
    })
    res.json({success:true,session_url:session.url})

   } catch (error) {
    console.log(error)
   }
   res.json({success:false,message:error})
}

export default placeOrder