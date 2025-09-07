import Food from "../models/foodModel.js";
import fs from 'fs'
// create new food item

const CreateFoodItem = async (req, res) => {
    const image_filename = `${req.file.filename}`
    const {name,description,price,category} = req.body
  try {
    const newFood = new Food({
        name,
        description,
        price,
        category,
        image:image_filename
    });
    await newFood.save();
    res.json({ message: "food created successfully!", data: newFood });
  } catch (error) {
    res.json({ message: error });
  }
};

// get all food items from database
const GetAllFoodItems = async (_, res) => {
  try {
    const foodItems = await Food.find();
    res.json({ message: "Food items fetched successfully!", data: foodItems });
  } catch (error) {
    res.json({ message: error });
  }
};
//delete food item
const DeleteFoodItem = async(req,res)=>{
    const {id} = req.params
    try {
        const food = await Food.findById(id)
        fs.unlink(`uploads/${food.image}`,()=>{})
        await Food.findByIdAndDelete(id)
        res.json({message:"food deleted"})
    } catch (error) {
         //console.log(error)
         res.json({message:'something went wrong', error})
    }
}

const UpdateFoodItem = async(req,res)=>{
  try {
    const {id}= req.params
    const food = await Food.findByIdAndUpdate(id)
    res.json({message:'Food updated successfully!',data:food})
    
  } catch (error) {
    res.json({message:'something went wrong!'})
  }
}

export {CreateFoodItem,GetAllFoodItems,DeleteFoodItem,UpdateFoodItem}