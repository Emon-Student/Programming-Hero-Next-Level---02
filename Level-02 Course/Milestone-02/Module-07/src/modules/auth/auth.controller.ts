import type { Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse.js";
import { authServices } from "./auth.services.js";

const loginUser = async (req: Request, res: Response) => {
  try {
    const result = await authServices.loginUserintoDB(req.body);
    const { refreshToken } = result;

    res.cookie("refreshToken", refreshToken, {
      secure: false,
      httpOnly: true,
      sameSite: "lax",
      // maxAge
      path: "/",
      domain: "localhost",
    });

    sendResponse(res, true, 201, "User login Successfully", result);
  } catch (error: any) {
    sendResponse(res, false, 500, error?.message, error);
  }
};

const genarateToken = async (req: Request, res: Response) => {
  const result = await authServices.genarateAccessToken(
    req.cookies.refreshToken,
  );
  sendResponse(res, true, 200, "Access Token Genarated Successfully", result);
};

export const authController = {
  loginUser,
  genarateToken,
};
