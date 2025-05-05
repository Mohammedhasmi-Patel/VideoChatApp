import express from "express";
import {
  authenticatedUser,
  login,
  logout,
  onboard,
  signup,
} from "../controllers/authController.js";
import { protectedRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/onboard", protectedRoute, onboard);
router.get("/me", protectedRoute, authenticatedUser);

export default router;
