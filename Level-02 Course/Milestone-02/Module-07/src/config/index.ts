import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(process.cwd(), ".env"),
});

const config = {
  port: process.env.PORT,
  connectionString: process.env.DATABASE_URL as string,
  jwtsecret_key: process.env.JWT_SECRET_KEY as string,
  refresh_token_key:process.env.Refresh_Token_Key as string
};

export default config;
