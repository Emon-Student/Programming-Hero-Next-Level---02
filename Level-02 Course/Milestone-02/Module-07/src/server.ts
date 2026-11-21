import app from "./app.js";
import config from "./config/index.js";
import { connectDB } from "./database/index.js";

const main = async () => {
  await connectDB();
  app.listen(config.port, () => {
    console.log(`Server is working on ${config.port} port.`);
  });
};

main();
