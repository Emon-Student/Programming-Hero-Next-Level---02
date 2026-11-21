import { pool } from "../../database/index.js";
import type { Iusers } from "./users.interface.js";
import bcrypt from "bcrypt";

const getAllUsersFromDB = async () => {
  const result = await pool.query(`
          SELECT * FROM users
          `);
  return result;
};

const createUserIntoDB = async (payload: Iusers) => {
  const { name, email, password, age, role } = payload;
  const hashPassword = await bcrypt.hash(password, 10);
  const result = await pool.query(
    `
    INSERT INTO USERS(name,email,password,age,role) VALUES ($1,$2,$3,$4,COALESCE($5,'user')) RETURNING *;
    `,
    [name, email, hashPassword, age, role],
  );

  // console.log(hashPassword);

  delete result.rows[0].password;
  return result;
};

const getSingleUserFromDB = async (id: string) => {
  const result = await pool.query(
    `
      SELECT * FROM users WHERE id=$1
      `,
    [id],
  );
  return result;
};

const updateUserFromDB = async (payload: Partial<Iusers>, id: string) => {
  const { name, email, password, age, is_active, role } = payload;
  const result = await pool.query(
    `
      UPDATE users
      SET
      name = COALESCE($1, name),
      password = COALESCE($2, password),
      age = COALESCE($3, age),
      role = COALESCE($4,role)
      is_active = COALESCE($5, is_active),
      updated_at = NOW()
      WHERE id = $6
      RETURNING *
      `,
    [
      name ?? null,
      email ?? null,
      password ?? null,
      age ?? null,
      role ?? null,
      is_active ?? null,
      id,
    ],
  );
  return result;
};

const deleteUserFromDB = async (id: string) => {
  const result = await pool.query(
    `
      DELETE FROM users WHERE id=$1
      `,
    [id],
  );
  return result;
};

export const usersService = {
  getAllUsersFromDB,
  createUserIntoDB,
  getSingleUserFromDB,
  updateUserFromDB,
  deleteUserFromDB,
};
