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
const getAllBooks = catchAsync(async (req, res) => {
  const result = await BookServices.getAllBooksFromDB();

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
    message: "Books retrieved successfully",
    data: result,
  });
});

const getSingleBook = catchAsync(async (req, res) => {
  const { bookId } = req.params;

  const result = await BookServices.getSingleBookFromDB(bookId);

  if (result === null) {
    return sendResponse(res, {
      success: false,
      status: httpStatus.NOT_FOUND,
      message: "No Data Found!",
      data: [],
    });
  }

  sendResponse(res, {
    success: true,
    status: httpStatus.OK,
    message: "Book retrieved successfully",
    data: result,
  });
});

export const BookControllers = {
  createBook,
  getAllBooks,
  getSingleBook,
};
