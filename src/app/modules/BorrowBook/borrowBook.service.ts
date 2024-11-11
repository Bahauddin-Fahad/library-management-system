import prisma from "../../utils/prisma";
import AppError from "../../errors/AppError";
import httpStatus from "http-status-codes";

const borrowBooksFromDB = async (payload: {
  bookId: string;
  memberId: string;
}) => {
  const book = await prisma.book.findUniqueOrThrow({
    where: {
      bookId: payload.bookId,
    },
  });

  await prisma.member.findUniqueOrThrow({
    where: {
      memberId: payload.memberId,
    },
  });

  if (book.availableCopies <= 0) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "No available copies of this book."
    );
  }
  const result = await prisma.$transaction(async (transactionClient) => {
    await transactionClient.book.update({
      where: { bookId: payload.bookId },
      data: { availableCopies: book.availableCopies - 1 },
    });

    const borrowRecord = await transactionClient.borrowRecord.create({
      data: {
        borrowDate: new Date(),
        book: { connect: { bookId: payload.bookId } },
        member: { connect: { memberId: payload.memberId } },
      },
      select: {
        borrowId: true,
        bookId: true,
        memberId: true,
        borrowDate: true,
      },
    });

    return borrowRecord;
  });

  return result;
};
const returnBooksToDB = async (payload: { borrowId: string }) => {
  await prisma.borrowRecord.findUniqueOrThrow({
    where: { borrowId: payload.borrowId },
  });

  const result = await prisma.borrowRecord.update({
    where: { borrowId: payload.borrowId },
    data: {
      returnDate: new Date(),
    },
  });

  return result;
};
const getOverdueBorrowListFromDB = async () => {
  const currentDate = new Date();
  const dateFourteenDaysAgo = new Date(
    currentDate.setDate(new Date().getDate() - 14)
  );
  const overdueBorrowedBooks = await prisma.borrowRecord.findMany({
    where: {
      returnDate: null,
      borrowDate: {
        lt: dateFourteenDaysAgo,
      },
    },
    include: {
      book: true,
      member: true,
    },
  });

  return overdueBorrowedBooks.map((borrowedBook) => ({
    borrowId: borrowedBook.borrowId,
    bookTitle: borrowedBook.book.title,
    borrowerName: borrowedBook.member.name,
    overdueDays: Math.ceil(
      (currentDate.getTime() - new Date(borrowedBook.borrowDate).getTime()) /
        (1000 * 3600 * 24)
    ),
  }));
};

export const BorrowBookServices = {
  borrowBooksFromDB,
  returnBooksToDB,
  getOverdueBorrowListFromDB,
};
