import User from "./../models/userModel.js";
// add to cart

const addToCart = async (req, res) => {
    try {
        const userData = await User.findById( req.userId );
        const cartData = await userData.cartData;
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }
        await User.findByIdAndUpdate(req.userId, { cartData });
        res.json({ success: true, message: "Added to cart successfully!" });
    }catch (error) {
    console.log(error);
    res.json({ success: false, message: "Something went wrong!" });
}
} 

// remove from cart
const removeFromCart = async (req, res) => {
    try {
        const userData=await User.findById(req.userId)
        const cartData=await userData.cartData
        if(cartData[req.body.itemId]){
            cartData[req.body.itemId]-=1
        }
        await User.findByIdAndUpdate(req.userId,{cartData})
        res.json({success:true,message:"Item removed from cart successfully!"})
    } catch (error) {
       console.log(error)
       res.json({success:false,message:'Something went wrong!'})
    }
};

//get from cart

const getFromCart = async (req, res) => { 
    // return "hello"
    //const {userId} = req.params
    try {
        const userData=await User.findById(req.userId)
        if(!userData){
            return res.json({success:false,message:"user not found"})
        }
        const cartData=userData.cartData
        res.json({success:true,message:'cart data fetched successfully!',cartData})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:'Something went wrong!'})
    }
};

export { addToCart, removeFromCart, getFromCart };
