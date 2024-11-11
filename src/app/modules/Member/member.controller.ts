import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { MemberServices } from "./member.service";

const createMember = catchAsync(async (req, res) => {
  const result = await MemberServices.createMemberIntoDB(req.body);

  sendResponse(res, {
    success: true,
    status: httpStatus.CREATED,
    message: "Member created successfully",
    data: result,
  });
});
const getAllMembers = catchAsync(async (req, res) => {
  const result = await MemberServices.getAllMembersFromDB();

  if (result?.length <= 0) {
    return sendResponse(res, {
      success: false,
      status: httpStatus.NOT_FOUND,
      message: "No Data Found",
      data: [],
    });
  }

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: "Members retrieved successfully",
    data: result,
  });
});
export const MemberControllers = {
  createMember,
  getAllMembers,
};
