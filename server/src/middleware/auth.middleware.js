import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protectedRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized : No Token Provided" });
    }

    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res.status(401).json({
        message: "Unauthorized : Invalid Token",
      });
    }

    const user = await User.findById(decode.userId).select("-password -__v");
    if (!user) {
      return res.status(401).json({ message: "Unauthorized : User Not Found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.error("Error in protectedRoute middleware:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
