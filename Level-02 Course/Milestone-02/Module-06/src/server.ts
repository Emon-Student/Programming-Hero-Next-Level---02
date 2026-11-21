import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import routehandler from "./routes/routers";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    // console.log("Request: ",req);
    // console.log("Response: ",res);
    routehandler(req, res);
  },
);

server.listen(5000, () => {
  console.log("Server is Runnings");
});
