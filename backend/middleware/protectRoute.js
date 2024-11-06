import jwt from "jsonwebtoken";
import User from "../models/user.model.js"; 

const protectRoute = async (req, res, next) => {
  try {
    // Access the JWT token from cookies
    const token = req.cookies?.jwt; // Ensure 'cookies' is used, not 'cookie'
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized - No Token provided' });
    }

    // Verify the JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ error: 'Unauthorized - Invalid Token' });
    }

    // Find the user by ID
    const user = await User.findById(decoded.userId).select("-password"); // Exclude password
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Attach user to the request object
    req.user = user;
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error('Error in protectRoute middleware:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default protectRoute;
