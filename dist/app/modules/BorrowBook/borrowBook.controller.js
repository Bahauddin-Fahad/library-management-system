"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowBookControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const borrowBook_service_1 = require("./borrowBook.service");
const borrowBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrowBook_service_1.BorrowBookServices.borrowBooksFromDB(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_codes_1.default.OK,
        message: "Book borrowed successfully",
        data: result,
    });
}));
const returnBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield borrowBook_service_1.BorrowBookServices.returnBooksToDB(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_codes_1.default.OK,
        message: "Book returned successfully",
    });
}));
const getOverdueBorrowList = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrowBook_service_1.BorrowBookServices.getOverdueBorrowListFromDB();
    if ((result === null || result === void 0 ? void 0 : result.length) <= 0) {
        return (0, sendResponse_1.default)(res, {
            success: true,
            status: http_status_codes_1.default.OK,
            message: "No overdue books",
            data: [],
        });
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_codes_1.default.OK,
        message: "Overdue borrow list fetched",
        data: result,
    });
}));
exports.BorrowBookControllers = {
    borrowBook,
    returnBook,
    getOverdueBorrowList,
};
