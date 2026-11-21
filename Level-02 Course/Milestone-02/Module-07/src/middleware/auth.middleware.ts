import type { Request, Response, NextFunction } from "express";
import { sendResponse } from "../utils/sendResponse.js";
import jwt, { type JwtPayload } from "jsonwebtoken";
import config from "../config/index.js";
import { pool } from "../database/index.js";
import type { Roles } from "../types/index.js";

const auth = (...roles: Roles[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(roles);
      const token = req.headers.authorization as string;
      // console.log(req.headers.authorization);

      if (!token) {
        return sendResponse(res, false, 401, "Unauthoraized Access");
      }

      console.log("Authorization:", req.headers.authorization);
      console.log("Secret exists:", !!config.jwtsecret_key);
      console.log("Token parts:", req.headers.authorization?.split(" ").length);

      const decode = jwt.verify(token, config.jwtsecret_key) as JwtPayload;

      if (!decode) {
        return sendResponse(res, false, 401, "Unauthoraized Token");
      }

      const user = await pool.query(
        `
        SELECT * FROM users WHERE email=$1
        `,
        [decode.email],
      );

      // console.log(decode);

      if (user.rowCount === 0) {
        return sendResponse(res, false, 404, "User not Found");
      }

      if (!user.rows[0].is_active) {
        return sendResponse(res, false, 403, "Forbidden Access");
      }

      req.user = decode;

      if (roles.length && !roles.includes(user.rows[0])) {
        return sendResponse(res, false, 401, "Unauthoraized Access");
      }

      // console.log(req.user);

      next();
    } catch (err) {
      next(err);
    }
  };
};

export default auth;
