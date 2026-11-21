import type { Request, Response } from "express";
import { profileServices } from "./profiles.service.js";
import { sendResponse } from "../../utils/sendResponse.js";

const createProfile = async (req: Request, res: Response) => {
  try {
    const result = await profileServices.createProfileIntoDB(req.body);
    sendResponse(
      res,
      true,
      201,
      "Profile Created Successfully",
      result.rows[0],
    );
  } catch (error: any) {
    sendResponse(res, false, 500, error?.message, error);
  }
};

export const profileController = {
  createProfile,
};
