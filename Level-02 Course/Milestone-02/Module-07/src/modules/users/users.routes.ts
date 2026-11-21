import { Router } from "express";
import { usersController } from "./users.controller.js";
import auth from "../../middleware/auth.middleware.js";
import { USER_ROLE } from "../../types/index.js";

const router = Router();

router.get(
  "/",
  auth(USER_ROLE.admin, USER_ROLE.agent, USER_ROLE.user),
  usersController.getAllUser,
);
router.post("/", usersController.createUser);
router.get("/:id", usersController.getSingleUser);
router.put("/update-user/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

export const userRouters = router;
