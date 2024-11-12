"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowBookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const borrowBook_validation_1 = require("./borrowBook.validation");
const borrowBook_controller_1 = require("./borrowBook.controller");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(borrowBook_validation_1.BorrowBookValidations.borrowBookValidationSchema), borrowBook_controller_1.BorrowBookControllers.borrowBook);
router.get("/overdue", borrowBook_controller_1.BorrowBookControllers.getOverdueBorrowList);
exports.BorrowBookRoutes = router;
