import express from 'express'
import { CreateFoodItem,GetAllFoodItems,DeleteFoodItem, getSingleFoodItem} from '../controllers/foodController.js'
import upload from '../middleware/uploadMiddleware.js'

const router = express.Router()
router.post('/add',upload.single('image'),CreateFoodItem)
router.get('/list',GetAllFoodItems)
router.delete('/delete/:id',DeleteFoodItem)
router.get('/get/:id',getSingleFoodItem)

export default router