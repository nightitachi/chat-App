import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import generateTokenAndSetCookies from "../utils/generatetoken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic : gender ==="male"? boyProfilePic :girlProfilePic
    });

    if(newUser){
      await generateTokenAndSetCookies(newUser._id , res);
      await newUser.save();
    
    res.status(201).json({
      _id: newUser.id,
      fullName:newUser.fullName,
      username:newUser.username,
      profilePic:newUser.profilePic
    });
    }else{
      res.status(400).json({error:"invalid User data"})
      
    }

  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};




//login Controller
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ username });

    // Verify the password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password!" });
    }
    if (!user) {
      return res.status(400).json({ error: "Invalid username or password!" });
    }

    res.cookie('user', user._id, { httpOnly: true, secure: false, sameSite: 'strict' });
    console.log('Setting cookie:', user._id);
    
    // generateTokenAndSetCookies(user._id, res);

    res.status(200).json({
      _id: user._id,
      username: user.username,
      fullName: user.fullName,
      profilePic: user.profilePic,
    });

  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};




//logout Controller
export const logout = async(req, res) => {
  try {
    res.cookie("jwt" ,"",{maxAge:0} )
    res.status(200).json({message:"logged out successfully ! "})
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};
