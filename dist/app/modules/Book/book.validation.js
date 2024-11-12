"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookValidations = void 0;
const zod_1 = require("zod");
const createBookValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string({
            required_error: "Book title is required",
            invalid_type_error: "Book title must be a string",
        })
            .trim(),
        genre: zod_1.z
            .string({
            required_error: "Book genre is required",
            invalid_type_error: "Book genre must be a string",
        })
            .trim(),
        publishedYear: zod_1.z.number().min(0, "Published Year cannot be negative"),
        totalCopies: zod_1.z.number().min(0, "Published Year cannot be negative"),
        availableCopies: zod_1.z.number().min(0, "Published Year cannot be negative"),
    }),
});
const updateBookValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string({
            required_error: "Book title is required",
            invalid_type_error: "Book title must be a string",
        })
            .trim()
            .optional(),
        genre: zod_1.z
            .string({
            required_error: "Book genre is required",
            invalid_type_error: "Book genre must be a string",
        })
            .trim()
            .optional(),
        publishedYear: zod_1.z
            .number()
            .min(0, "Published Year cannot be negative")
            .optional(),
        totalCopies: zod_1.z
            .number()
            .min(0, "Published Year cannot be negative")
            .optional(),
        availableCopies: zod_1.z
            .number()
            .min(0, "Published Year cannot be negative")
            .optional(),
    }),
});
exports.BookValidations = {
    createBookValidationSchema,
    updateBookValidationSchema,
};
