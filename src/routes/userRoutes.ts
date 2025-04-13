import express from "express";
import { viewGroceries, bookOrder } from "../controllers/userController";

const router = express.Router();

router.get("/groceries", viewGroceries);
router.post("/book", bookOrder);

export default router;
