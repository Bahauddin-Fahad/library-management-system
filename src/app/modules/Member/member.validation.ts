import { z } from "zod";

const createMemberValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Member name is required",
        invalid_type_error: "Member name must be a string",
      })
      .trim(),
    email: z
      .string({
        required_error: "Member email is required",
        invalid_type_error: "Member email must be a string",
      })
      .trim(),
    phone: z
      .string({
        required_error: "Member phone is required",
        invalid_type_error: "Member phone must be a string",
      })
      .trim(),
    membershipDate: z
      .string({
        required_error: "Membership Date is required",
        invalid_type_error: "Membership Date must be a string",
      })
      .trim(),
  }),
});

const updateMemberValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Member name is required",
        invalid_type_error: "Member name must be a string",
      })
      .trim()
      .optional(),
    email: z
      .string({
        required_error: "Member email is required",
        invalid_type_error: "Member email must be a string",
      })
      .trim()
      .optional(),
    phone: z
      .string({
        required_error: "Member phone is required",
        invalid_type_error: "Member phone must be a string",
      })
      .trim()
      .optional(),
    membershipDate: z
      .string({
        required_error: "Membership Date is required",
        invalid_type_error: "Membership Date must be a string",
      })
      .trim()
      .optional(),
  }),
});

export const MemberValidations = {
  createMemberValidationSchema,
  updateMemberValidationSchema,
};
