import { readFileSync, writeFile, writeFileSync } from "fs";
import path from "path";
import type { Tproducts } from "../types/products";
const fileSystem = process.cwd();
const db = path.join(fileSystem, "./src/database/db.json");
export const productService = () => {
  const result = readFileSync(db, "utf-8");
  return JSON.parse(result);
};

export const createProduct = (payload:Tproducts[]) => {
  const result = writeFileSync(db,JSON.stringify(payload));
  return result;
}
