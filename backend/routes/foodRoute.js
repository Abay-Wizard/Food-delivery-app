import express from 'express'
import { CreateFoodItem,GetAllFoodItems,DeleteFoodItem,UpdateFoodItem } from '../controllers/foodController.js'
import upload from '../middleware/uploadMiddleware.js'

const router = express.Router()
router.post('/add',upload.single('image'),CreateFoodItem)
router.get('/list',GetAllFoodItems)
router.delete('/delete/:id',DeleteFoodItem)
router.put('/update/:id',UpdateFoodItem)

export default router