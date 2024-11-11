import { Response } from "express";

type TResponse<T> = {
  status: number;
  success: boolean;
  message: string;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  data?: T | null | undefined;
};

const sendResponse = <T>(res: Response, jsonData: TResponse<T>) => {
  res.status(jsonData.status).json({
    success: jsonData.success,
    status: jsonData.status,
    message: jsonData.message,
    meta: jsonData.meta || null || undefined,
    data: jsonData.data || null || undefined,
  });
};

export default sendResponse;
