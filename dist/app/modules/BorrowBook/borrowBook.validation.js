"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowBookValidations = void 0;
const zod_1 = require("zod");
const borrowBookValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        bookId: zod_1.z
            .string({
            required_error: "Book Id is required",
            invalid_type_error: "Book Id must be a string",
        })
            .trim(),
        memberId: zod_1.z
            .string({
            required_error: "Member Id is required",
            invalid_type_error: "Member Id must be a string",
        })
            .trim(),
    }),
});
const returnBookValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        borrowId: zod_1.z
            .string({
            required_error: "Borrow Id is required",
            invalid_type_error: "Borrow Id must be a string",
        })
            .trim(),
    }),
});
exports.BorrowBookValidations = {
    borrowBookValidationSchema,
    returnBookValidationSchema,
};
