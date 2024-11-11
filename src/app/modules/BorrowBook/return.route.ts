import express from "express";
import { BorrowBookValidations } from "./borrowBook.validation";
import { BorrowBookControllers } from "./borrowBook.controller";
import validateRequest from "../../middlewares/validateRequest";

const router = express.Router();
router.post(
  "/",
  validateRequest(BorrowBookValidations.returnBookValidationSchema),
  BorrowBookControllers.returnBook
);
export const ReturnBookRoutes = router;
