import User from "../models/user.model.js";

export const getUserForSidebar= async(req,res) =>{
  try {
    const loggedUserId = await req.user._id;
    const filtredUsers = await User.find({_id:{$ne: loggedUserId}}).select("-password");
    res.status(200).json(filtredUsers);
  } catch (error) {
    console.log("error in getUserForSidebar " , error.message);
    res.status(500).json({error:'Users Nor found ! '})
  }
}