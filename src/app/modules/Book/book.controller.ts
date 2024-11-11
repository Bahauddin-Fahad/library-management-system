import httpStatus from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BookServices } from "./book.service";

const createBook = catchAsync(async (req, res) => {
  const result = await BookServices.createBookIntoDB(req.body);

  sendResponse(res, {
    success: true,
    status: httpStatus.CREATED,
    message: "Book created successfully",
    data: result,
  });
});

export const BookControllers = {
  createBook,
};
