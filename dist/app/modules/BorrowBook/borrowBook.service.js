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
exports.BorrowBookServices = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const borrowBooksFromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma_1.default.book.findUniqueOrThrow({
        where: {
            bookId: payload.bookId,
        },
    });
    yield prisma_1.default.member.findUniqueOrThrow({
        where: {
            memberId: payload.memberId,
        },
    });
    if (book.availableCopies <= 0) {
        throw new AppError_1.default(http_status_codes_1.default.BAD_REQUEST, "No available copies of this book.");
    }
    const result = yield prisma_1.default.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        yield transactionClient.book.update({
            where: { bookId: payload.bookId },
            data: { availableCopies: book.availableCopies - 1 },
        });
        const borrowRecord = yield transactionClient.borrowRecord.create({
            data: {
                borrowDate: new Date(),
                book: { connect: { bookId: payload.bookId } },
                member: { connect: { memberId: payload.memberId } },
            },
            select: {
                borrowId: true,
                bookId: true,
                memberId: true,
                borrowDate: true,
            },
        });
        return borrowRecord;
    }));
    return result;
});
const returnBooksToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.borrowRecord.findUniqueOrThrow({
        where: { borrowId: payload.borrowId },
    });
    const result = yield prisma_1.default.borrowRecord.update({
        where: { borrowId: payload.borrowId },
        data: {
            returnDate: new Date(),
        },
    });
    return result;
});
const getOverdueBorrowListFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentDate = new Date();
    const dateFourteenDaysAgo = new Date(currentDate.setDate(new Date().getDate() - 14));
    const overdueBorrowedBooks = yield prisma_1.default.borrowRecord.findMany({
        where: {
            returnDate: null,
            borrowDate: {
                lt: dateFourteenDaysAgo,
            },
        },
        include: {
            book: true,
            member: true,
        },
    });
    return overdueBorrowedBooks.map((borrowedBook) => ({
        borrowId: borrowedBook.borrowId,
        bookTitle: borrowedBook.book.title,
        borrowerName: borrowedBook.member.name,
        overdueDays: Math.ceil((currentDate.getTime() - new Date(borrowedBook.borrowDate).getTime()) /
            (1000 * 3600 * 24)),
    }));
});
exports.BorrowBookServices = {
    borrowBooksFromDB,
    returnBooksToDB,
    getOverdueBorrowListFromDB,
};
