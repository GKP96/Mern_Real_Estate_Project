import express from "express";
import userController from "../controllers/UserController.js";
import AuthController from "../controllers/AuthController.js";

const router = express.Router();

router.get("/:email", userController.getUserByEmail);
//signup
router.post("/", userController.createUser);
router.put("/:email", userController.updateUser);
router.delete("/:email", userController.deleteUser);
router.post("/signin", AuthController.signin);
router.post("/signup", AuthController.signup);
router.post("/google", AuthController.google);
router.get("/signout", AuthController.signOut);
export default router;
