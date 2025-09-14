import { addToCart,removeFromCart,getFromCart } from "../controllers/cartController.js";
import express from 'express'
import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router()
router.post('/add',authMiddleware,addToCart)
router.post('/delete',authMiddleware,removeFromCart)
// router.post('/get',authMiddleware,getFromCart)
router.get('/get',authMiddleware,getFromCart)

export default router