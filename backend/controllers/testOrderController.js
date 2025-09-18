import User from './../models/userModel.js';
import Order from '../models/orderModel.js';
import dotenv from 'dotenv'
dotenv.config()
import Strip from 'stripe'

const strip = new Strip(process.env.strip_secret_key)
const placeOrder = async (req, res) => {
    const frontend_url = 'http://localhost:3000'
    const { address, items, amount } = req.body
   try {
     const order = new Order({
        address,
        items,
        amount,
        userId: req.userId
    })
    await order.save()
    await User.findByIdAndUpdate(req.userId, { cartData: {} })

    //creating line_items required by a stripe to make payments
    const line_items = req.body.items.map((item) => ({
        price_data: {
            currency: 'usd',
            product_data: {
                name: item.name,
            },
            unit_amount: item.price * 100
        },
        quantity: item.quantity
    }))


    //adding a delivery fee to the main cart fee

    line_items.push({
        price_data: {
            currency: 'usd',
            product_data: {
                name: 'Delivery Charge'
            },
            unit_amount: 2 * 100
        },
        quantity: 1
    })

    // creating stripe session for checkout

    const session = stripe.checkout.sessions.create({
        line_items: line_items,
        mode: 'payment',
        success_url=`${frontend_url}/verify?success=true&orderId=${order._id}`,
        cancel_url: `${frontend_url}/verify?success=false&orderId=${order._id}`

    res.json({
            success: true, session_url: session.url,
            message:'Session created successfully!'
        })

    })

    
   } catch (error) {
    console.log(error)
    res.json({success:false,message:error})
   }

}


