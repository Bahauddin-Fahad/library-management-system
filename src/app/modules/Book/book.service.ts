import { Book, Prisma } from "@prisma/client";
import prisma from "../../utils/prisma";

const createBookIntoDB = async (
  payload: Prisma.BookCreateInput
): Promise<Book> => {
  const result = await prisma.book.create({
    data: payload,
  });

  return result;
};
const getAllBooksFromDB = async () => {
  const result = await prisma.book.findMany();
  return result;
};
const getSingleBookFromDB = async (bookId: string) => {
  const result = await prisma.book.findUniqueOrThrow({
    where: {
      bookId,
    },
  });

  return result;
};
const updateBookIntoDB = async (
  payload: Prisma.BookUpdateInput,
  bookId: string
) => {
  await prisma.book.findUniqueOrThrow({
    where: { bookId },
  });

  const result = await prisma.book.update({
    where: { bookId },
    data: payload,
  });
  return result;
};

const deleteBookFromDB = async (bookId: string) => {
  await prisma.book.findUniqueOrThrow({
    where: { bookId },
  });

  const result = await prisma.book.delete({
    where: { bookId },
  });

  return result;
};
export const BookServices = {
  createBookIntoDB,
  getAllBooksFromDB,
  getSingleBookFromDB,
  updateBookIntoDB,
  deleteBookFromDB,
};
