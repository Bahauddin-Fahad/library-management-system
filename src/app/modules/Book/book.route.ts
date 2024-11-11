import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { BookValidations } from "./book.validation";
import { BookControllers } from "./book.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(BookValidations.createBookValidationSchema),
  BookControllers.createBook
);

export const BookRoutes = router;
