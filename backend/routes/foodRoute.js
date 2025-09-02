import express from 'express'
import { CreateFoodItem,GetAllFoodItems,DeleteFoodItem } from '../controllers/foodController.js'
import multer from 'multer'
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()} ${file.originalname}`)
    }
})
const upload = multer({storage:storage})

const router = express.Router()
router.post('/add',upload.single('image'),CreateFoodItem)
router.get('/list',GetAllFoodItems)
router.delete('/delete/:id',DeleteFoodItem)

export default router