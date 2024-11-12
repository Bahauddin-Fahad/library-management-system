"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_route_1 = require("../modules/Book/book.route");
const borrowBook_route_1 = require("../modules/BorrowBook/borrowBook.route");
const member_route_1 = require("../modules/Member/member.route");
const return_route_1 = require("../modules/BorrowBook/return.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/books",
        route: book_route_1.BookRoutes,
    },
    {
        path: "/members",
        route: member_route_1.MemberRoutes,
    },
    {
        path: "/borrow",
        route: borrowBook_route_1.BorrowBookRoutes,
    },
    {
        path: "/return",
        route: return_route_1.ReturnBookRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
