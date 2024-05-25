import express from "express";
import {
  createProperty,
  getProperties,
  updateProperty,
  deleteProperty,
  getAllProperties,
} from "../controllers/PropertyController.js";
const router = express.Router();

router.post("/", createProperty);
router.get("/", getAllProperties);
router.get("/:sellerId", getProperties);
router.put("/:id", updateProperty);
router.delete("/:id", deleteProperty);

export default router;
