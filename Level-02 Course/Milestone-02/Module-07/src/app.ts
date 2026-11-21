import express from "express";
import { userRouters } from "./modules/users/users.routes.js";
import { profileRoute } from "./modules/profiles/profiles.routes.js";
import { authRoutes } from "./modules/auth/auth.routes.js";
import logger from "./middleware/logger.middleware.js";
import globalErrorHandler from "./middleware/globalErrorHandler.middleware.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const corOption = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

//* Middleware Entry Point
app.use(cors(corOption));
app.use(express.json());
app.use(logger);
app.use(cookieParser());

//* Global Error Handler
app.use(globalErrorHandler);

//* API Running
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is working!",
  });
});

//* Router Entry Point
app.use("/api/v1/users", userRouters);
app.use("/api/v1/profile", profileRoute);
app.use("/api/v1/auth", authRoutes);

export default app;
