import { type Request, type Response } from "express";
import { sendResponse } from "../../utils/sendResponse.js";
import { usersService } from "./users.service.js";

//? Get All Users
const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await usersService.getAllUsersFromDB();
    sendResponse(res, true, 200, "Here are All Users", result.rows);
  } catch (err: any) {
    sendResponse(res, false, 500, err?.message, err);
  }
};

//* Create User
const createUser = async (req: Request, res: Response) => {
  try {
    const result = await usersService.createUserIntoDB(req.body);
    sendResponse(res, true, 201, "User Created Successfully", result.rows[0]);
  } catch (err: any) {
    sendResponse(res, false, 500, err?.message, err);
  }
};

//* get a single User
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await usersService.getSingleUserFromDB(id as string);
    if (result.rowCount === 0) {
      sendResponse(res, false, 404, "User not Found");
    }
    sendResponse(res, true, 200, "Here are All Users", result.rows[0]);
  } catch (err: any) {
    sendResponse(res, true, 500, err?.message, err);
  }
};

//* Update User
const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await usersService.updateUserFromDB(req.body, id as string);
    if (result.rowCount === 0) {
      return sendResponse(res, false, 404, "User Not Found");
    }
    return sendResponse(
      res,
      true,
      200,
      "User Update Successfully Done",
      result.rows[0],
    );
  } catch (err: any) {
    sendResponse(res, false, 500, err?.message, err);
  }
};

//* Delete User
const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await usersService.deleteUserFromDB(id as string);
    if (result.rowCount === 0) {
      sendResponse(res, false, 404, "User Not Found");
    }
    sendResponse(res, true, 200, "User Deleted Successfully", result.rowCount);
  } catch (err: any) {
    sendResponse(res, false, 500, err?.message, err);
  }
};

export const usersController = {
  getAllUser,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
