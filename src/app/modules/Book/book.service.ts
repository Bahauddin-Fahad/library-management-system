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

export const BookServices = {
  createBookIntoDB,
};
