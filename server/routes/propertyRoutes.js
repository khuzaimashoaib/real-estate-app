import express from "express";
import {
  createProperty,
  deleteProperty,
  getFavouriteProperties,
  getMyProperties,
  getProperties,
  getProperty,
  toggleFavourite,
  updateProperty,
} from "../controllers/propertyController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getProperties);
router.get("/my", protect, getMyProperties);
router.get("/favourites", protect, getFavouriteProperties);
router.get("/:id", getProperty);
router.post("/", protect, createProperty);
router.put("/:id", protect, updateProperty);
router.delete("/:id", protect, deleteProperty);
router.post("/:id/favourites", protect, toggleFavourite);

export default router;
