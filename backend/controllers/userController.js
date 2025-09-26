import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

// a token generator function for both register and login

const createToken = (id) => {
  return jwt.sign({ id }, process.env.jwt_secret);
};

// register user function

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const exists = await User.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "Accont already exists" });
    }
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Your password should be at least 8 characters long",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    //res
    // .status(201)
    //.json({success:true,message: "Account created successfully!", data: user });
    const token = createToken(user._id);
    return res.json({
      success: true,
      token,
      message: "Account created successfully!",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "something went wrong!" });
  }
};

//login user

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "Invalid email or password!",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({
        success: false,
        message: "Invalid email or password!",
      });
    }

    const token = createToken(user._id);
    return res.json({ success: true, token, message: "Login successful!" });
  } catch (error) {
    res.json({
      success: false,
      message: "Server error, please try again later!",
    });
  }
};

export { loginUser, registerUser };
