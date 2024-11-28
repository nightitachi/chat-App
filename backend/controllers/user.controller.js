import User from "../models/user.model.js";

export const getUserForSidebar = async (req, res) => {
  // try {
  //   // Get the logged-in user's ID from the request object
  //   const loggedInUserId = req.user._id;

  //   // Retrieve all users except the logged-in user and exclude the password field
  //   const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

  //   // Respond with the filtered users
  //   res.status(200).json(filteredUsers);
  // } catch (error) {
  //   console.error("Error in getUser ForSidebar:", error.message);
  //   res.status(500).json({ error: 'Users not found!' });
  // }
  try {
    // Retrieve all users and exclude the password field
    const allUsers = await User.find().select("-password");

    // Respond with the list of all users
    res.status(200).json(allUsers);
  } catch (error) {
    console.error("Error in getAllUsers:", error.message);
    res.status(500).json({ error: 'Users not found!' });
  }
};

