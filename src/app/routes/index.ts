import express from "express";
import { BookRoutes } from "../modules/Book/book.route";
import { BorrowBookRoutes } from "../modules/BorrowBook/borrowBook.route";
import { MemberRoutes } from "../modules/Member/member.route";
import { ReturnBookRoutes } from "../modules/BorrowBook/return.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/books",
    route: BookRoutes,
  },
  {
    path: "/members",
    route: MemberRoutes,
  },
  {
    path: "/borrow",
    route: BorrowBookRoutes,
  },
  {
    path: "/return",
    route: ReturnBookRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
