import User from '../models/userModel.js';
import Order from '../models/orderModel.js';
import dotenv from 'dotenv';
dotenv.config();
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrder = async (req, res) => {
  const frontend_url = 'http://localhost:3000';
  const { address, items, amount } = req.body;

  try {
    const order = new Order({
      address,
      items,
      amount,
      userId: req.userId,
    });

    await order.save();
    await User.findByIdAndUpdate(req.userId, { cartData: {} });

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: { name: item.name },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    // Add delivery fee
    line_items.push({
      price_data: {
        currency: 'usd',
        product_data: { name: 'Delivery Charge' },
        unit_amount: 2 * 100,
      },
      quantity: 1,
    });

    // ✅ Create checkout session properly
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url: `${frontend_url}/verify?success=true&orderId=${order._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${order._id}`,
    });

    res.json({
      success: true,
      session_url: session.url,
      message: 'Session created successfully!',
    });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message || 'Something went wrong' });
  }
};

export default placeOrder