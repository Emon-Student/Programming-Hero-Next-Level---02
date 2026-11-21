import { type Response } from "express";

export const sendResponse = (
  res: Response,
  success: boolean,
  status: number,
  message: string,
  data?: unknown,
) => {
  const response = {
    success,
    message,
    data,
  };
  res.status(status).json(response);
};
