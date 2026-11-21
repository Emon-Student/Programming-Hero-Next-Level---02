import { pool } from "../../database/index.js";
import type { IAuth } from "./auth.interface.js";
import bcrypt from "bcrypt";
import jwt, { type JwtPayload } from "jsonwebtoken";
import config from "../../config/index.js";

const loginUserintoDB = async (payload: IAuth) => {
  const { email, password } = payload;
  const user = await pool.query(
    `
        SELECT * FROM users WHERE email = $1
        `,
    [email],
  );

  // console.log("From Service", user.rows[0]);

  if (user.rowCount === 0) {
    throw new Error("User not Found!!!");
  }

  const matchPassword = await bcrypt.compare(password, user.rows[0].password);

  // console.log("From Service", matchPassword);

  if (!matchPassword) {
    throw new Error("Password is not match!!!");
  }

  if (!user.rows[0].is_active) {
    throw new Error("Your Account Block!!!");
  }

  const jwtPayload = {
    id: user.rows[0].id,
    name: user.rows[0].name,
    email: user.rows[0].email,
    role: user.rows[0].role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwtsecret_key, {
    expiresIn: "5h",
  });

  const refreshToken = jwt.sign(jwtPayload, config.refresh_token_key, {
    expiresIn: "10D",
  });

  delete user.rows[0].password;
  return { accessToken, refreshToken, user: user.rows[0] };
};

const genarateAccessToken = async (token: string) => {
  if (!token) {
    throw new Error("Unauthoraized Access");
  }

  const decode = jwt.verify(token, config.refresh_token_key) as JwtPayload;

  if (!decode) {
    throw new Error("Unauthoraized Token");
  }

  const user = await pool.query(
    `
        SELECT * FROM users WHERE email=$1
        `,
    [decode.email],
  );

  if (user.rowCount === 0) {
    throw new Error("User not Found");
  }

  if (!user.rows[0].is_active) {
    throw new Error("Forbidden Access");
  }

  const jwtPayload = {
    id: user.rows[0].id,
    name: user.rows[0].name,
    email: user.rows[0].email,
    role: user.rows[0].role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwtsecret_key, {
    expiresIn: "5h",
  });

  return { accessToken };
};

export const authServices = {
  loginUserintoDB,
  genarateAccessToken,
};
