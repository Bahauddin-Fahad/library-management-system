import express from "express";
import { MemberValidations } from "./member.validation";
import validateRequest from "../../middlewares/validateRequest";
import { MemberControllers } from "./member.controller";

const router = express.Router();

router
  .route("/")
  .post(
    validateRequest(MemberValidations.createMemberValidationSchema),
    MemberControllers.createMember
  )
  .get(MemberControllers.getAllMembers);

export const MemberRoutes = router;
