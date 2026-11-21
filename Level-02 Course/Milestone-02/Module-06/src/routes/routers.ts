import type { IncomingMessage, ServerResponse } from "http";
import { productController } from "../controllers/product.controller";

const routehandler = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;
  // console.log(url);
  // console.log(method);
  if (url === "/" && method === "GET") {
    // console.log("This Route is GET Method!!!");
    res
      .writeHead(200, {
        "content-type": "text/plain",
      })
      .end("This Route is Home Route!!!");
  } else if (url?.startsWith("/products")) {
    productController(req,res);
  } else {
    // console.log("This Route is Not Defined");
    res
      .writeHead(404, {
        "content-type": "text/plain",
      })
      .end("This Route is not defined!!!");
  }
};

export default routehandler;
