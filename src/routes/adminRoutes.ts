import express from "express";
import { addGrocery, getGroceries, deleteGrocery, updateGrocery } from "../controllers/adminController";
const router = express.Router();

router.post("/add-grocery", addGrocery);
router.get("/get-grocery", getGroceries);
router.delete("/:id", deleteGrocery);
router.put("/:id", updateGrocery);

export default router;
