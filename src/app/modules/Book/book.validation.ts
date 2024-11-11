import { z } from "zod";

const createBookValidationSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: "Book title is required",
        invalid_type_error: "Book title must be a string",
      })
      .trim(),
    genre: z
      .string({
        required_error: "Book genre is required",
        invalid_type_error: "Book genre must be a string",
      })
      .trim(),
    publishedYear: z.number().min(0, "Published Year cannot be negative"),
    totalCopies: z.number().min(0, "Published Year cannot be negative"),
    availableCopies: z.number().min(0, "Published Year cannot be negative"),
  }),
});

const updateBookValidationSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: "Book title is required",
        invalid_type_error: "Book title must be a string",
      })
      .trim()
      .optional(),
    genre: z
      .string({
        required_error: "Book genre is required",
        invalid_type_error: "Book genre must be a string",
      })
      .trim()
      .optional(),
    publishedYear: z
      .number()
      .min(0, "Published Year cannot be negative")
      .optional(),
    totalCopies: z
      .number()
      .min(0, "Published Year cannot be negative")
      .optional(),
    availableCopies: z
      .number()
      .min(0, "Published Year cannot be negative")
      .optional(),
  }),
});

export const BookValidations = {
  createBookValidationSchema,
  updateBookValidationSchema,
};
