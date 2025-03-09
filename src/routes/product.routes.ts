import { FastifyPluginCallback } from "fastify";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  updateProductPrice,
  updateProductQuantity,
} from "../controllers/products.controller";

export const productRouter: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get("/", getAllProducts);
  fastify.get("/:id", getProductById);
  fastify.post("/", createProduct);
  fastify.put("/:id", updateProduct);
  fastify.delete("/:id", deleteProduct);
  fastify.patch("/:id/quantity", updateProductQuantity);
  fastify.patch("/:id/price", updateProductPrice);

  done();
};
