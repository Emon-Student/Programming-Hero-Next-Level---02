import type { IncomingMessage, ServerResponse } from "http";
import { createProduct, productService } from "../service/product.service";
import type { Tproducts } from "../types/products";
import { bodyParser } from "../utils/bodyParser";

export const productController = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;
  const products = productService();

  //   console.log(url);

  const urlParams = url?.split("/");
  const id =
    urlParams && urlParams[1] === "products" ? Number(urlParams[2]) : null;
  //   console.log(id);

  if (url === "/products" && method === "GET") {
    res
      .writeHead(200, {
        "content-type": "application/json",
      })
      .end(
        JSON.stringify({
          message: "All of Products Here",
          data: products,
        }),
      );
  } else if (method === "GET" && id !== null) {
    const products = productService();
    const product = products.find((p: Tproducts) => p.id === id);
    if (!product) {
      res.writeHead(404, {
        "content-type": "application/json",
      });

      res.end(
        JSON.stringify({
          message: "Product is not found!!!",
        }),
      );

      return;
    }
  } else if (method === "POST" && url === "/products") {
    const products = productService();
    const body = await bodyParser(req);
    const newProduct = [
      {
        id: Date.now(),
        ...body,
      },
    ];
    products.push(newProduct);
    createProduct(products);
    res
      .writeHead(200, {
        "content-type": "application/json",
      })
      .end(
        JSON.stringify({
          message: "Here your Product",
          data: body,
        }),
      );
  } else if (method === "PUT" && id !== null) {
    const products = productService();
    const body = await bodyParser(req);
    const index = products.findIndex((p: Tproducts) => p.id === id);

    if (index < 0) {
      res
        .writeHead(404, {
          "content-type": "application/json",
        })
        .end(
          JSON.stringify({
            message: "Product is not found!!!",
          }),
        );
    }

    ((products[index] = {
      id: products[index],
      ...body,
    }),
      createProduct(products));
    res
      .writeHead(200, {
        "content-type": "application/json",
      })
      .end(
        JSON.stringify({
          message: "Here your Product",
          data: products[index],
        }),
      );
  } else if (method === "DELETE" && id !== null) {
    const products = productService();
    const index = products.findIndex((p: Tproducts) => p.id === id);
    if (index < 0) {
      res
        .writeHead(404, {
          "content-type": "application/json",
        })
        .end(
          JSON.stringify({
            message: "Product is not found!!!",
          }),
        );
    }

    products.splice(index, 1);
    createProduct(products);

    res
      .writeHead(200, {
        "content-type": "application/json",
      })
      .end(
        JSON.stringify({
          message: "Product Delete Successfully",
        }),
      );
  }
};
