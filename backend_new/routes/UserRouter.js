import express from "express";
import userController from "../controllers/UserController.js";

const router = express.Router();

router.get("/:email", userController.getUserByEmail);
//signup
router.post("/", userController.createUser);
router.put("/:email", userController.updateUser);
router.delete("/:email", userController.deleteUser);
router.post("/signin", userController.signIn);

export default router;
