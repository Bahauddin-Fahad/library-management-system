import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { BookValidations } from "./book.validation";
import { BookControllers } from "./book.controller";

const router = express.Router();
router
  .route("/")
  .post(
    validateRequest(BookValidations.createBookValidationSchema),
    BookControllers.createBook
  )
  .get(BookControllers.getAllBooks);

router
  .route("/:bookId")
  .get(BookControllers.getSingleBook)
  .put(
    validateRequest(BookValidations.updateBookValidationSchema),
    BookControllers.updateBook
  )
  .delete(BookControllers.deleteBook);

export const BookRoutes = router;
