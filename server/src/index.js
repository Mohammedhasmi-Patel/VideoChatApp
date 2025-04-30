import dotenv from "dotenv";
dotenv.config();

import express from "express";
import authRoutes from "./routes/authRoute.js";
import conn from "./utils/db.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  conn();
  console.log("Server is running on port 8080");
});
