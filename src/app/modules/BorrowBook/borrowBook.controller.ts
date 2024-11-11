import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { BorrowBookServices } from "./borrowBook.service";

const borrowBook = catchAsync(async (req, res) => {
  const result = await BorrowBookServices.borrowBooksFromDB(req.body);

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: "Book borrowed successfully",
    data: result,
  });
});
const returnBook = catchAsync(async (req, res) => {
  await BorrowBookServices.returnBooksToDB(req.body);

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: "Book returned successfully",
  });
});
const getOverdueBorrowList = catchAsync(async (req, res) => {
  const result = await BorrowBookServices.getOverdueBorrowListFromDB();

  if (result?.length <= 0) {
    return sendResponse(res, {
      success: true,
      status: httpStatus.OK,
      message: "No overdue books",
      data: [],
    });
  }

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: "Overdue borrow list fetched",
    data: result,
  });
});
export const BorrowBookControllers = {
  borrowBook,
  returnBook,
  getOverdueBorrowList,
};
