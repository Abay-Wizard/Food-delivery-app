import express from 'express'
import {placeOrder,userOrder,Verify,listOrder,updateStatus} from '../controllers/orderController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()
router.post('/place',authMiddleware,placeOrder)
router.post('/verify',Verify)
router.post('/userorder',authMiddleware,userOrder)
router.get('/orders',listOrder)
router.post('/status',updateStatus)

export default router