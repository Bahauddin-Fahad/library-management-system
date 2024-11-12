"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const book_validation_1 = require("./book.validation");
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router
    .route("/")
    .post((0, validateRequest_1.default)(book_validation_1.BookValidations.createBookValidationSchema), book_controller_1.BookControllers.createBook)
    .get(book_controller_1.BookControllers.getAllBooks);
router
    .route("/:bookId")
    .get(book_controller_1.BookControllers.getSingleBook)
    .put((0, validateRequest_1.default)(book_validation_1.BookValidations.updateBookValidationSchema), book_controller_1.BookControllers.updateBook)
    .delete(book_controller_1.BookControllers.deleteBook);
exports.BookRoutes = router;
