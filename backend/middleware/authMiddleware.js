import jwt from 'jsonwebtoken'
const authMiddleware =async(req,res,next)=>{
    const {token} = req.headers;
    if(!token){
        return res.json({success:false,message:'Not authorized, login again!'})
    }
    try {
        const token_decoded=jwt.verify(token,process.env.jwt_secret)
        req.userId=token_decoded.id
        next()
    } catch (error) {
        res.json({success:false,message:error})
    }
}

export default authMiddleware