import { z } from "zod";

const borrowBookValidationSchema = z.object({
  body: z.object({
    bookId: z
      .string({
        required_error: "Book Id is required",
        invalid_type_error: "Book Id must be a string",
      })
      .trim(),
    memberId: z
      .string({
        required_error: "Member Id is required",
        invalid_type_error: "Member Id must be a string",
      })
      .trim(),
  }),
});

const returnBookValidationSchema = z.object({
  body: z.object({
    borrowId: z
      .string({
        required_error: "Borrow Id is required",
        invalid_type_error: "Borrow Id must be a string",
      })
      .trim(),
  }),
});

export const BorrowBookValidations = {
  borrowBookValidationSchema,
  returnBookValidationSchema,
};
