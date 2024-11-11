import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { BorrowBookValidations } from "./borrowBook.validation";
import { BorrowBookControllers } from "./borrowBook.controller";

const router = express.Router();
router.post(
  "/",
  validateRequest(BorrowBookValidations.borrowBookValidationSchema),
  BorrowBookControllers.borrowBook
);
router.get("/overdue", BorrowBookControllers.getOverdueBorrowList);

export const BorrowBookRoutes = router;
