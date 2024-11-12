"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberValidations = void 0;
const zod_1 = require("zod");
const createMemberValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: "Member name is required",
            invalid_type_error: "Member name must be a string",
        })
            .trim(),
        email: zod_1.z
            .string({
            required_error: "Member email is required",
            invalid_type_error: "Member email must be a string",
        })
            .trim(),
        phone: zod_1.z
            .string({
            required_error: "Member phone is required",
            invalid_type_error: "Member phone must be a string",
        })
            .trim(),
        membershipDate: zod_1.z
            .string({
            required_error: "Membership Date is required",
            invalid_type_error: "Membership Date must be a string",
        })
            .trim(),
    }),
});
const updateMemberValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: "Member name is required",
            invalid_type_error: "Member name must be a string",
        })
            .trim()
            .optional(),
        email: zod_1.z
            .string({
            required_error: "Member email is required",
            invalid_type_error: "Member email must be a string",
        })
            .trim()
            .optional(),
        phone: zod_1.z
            .string({
            required_error: "Member phone is required",
            invalid_type_error: "Member phone must be a string",
        })
            .trim()
            .optional(),
        membershipDate: zod_1.z
            .string({
            required_error: "Membership Date is required",
            invalid_type_error: "Membership Date must be a string",
        })
            .trim()
            .optional(),
    }),
});
exports.MemberValidations = {
    createMemberValidationSchema,
    updateMemberValidationSchema,
};
