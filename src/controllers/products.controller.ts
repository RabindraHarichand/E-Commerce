import { FastifyReply, FastifyRequest } from "fastify";
import { HttpCodes } from "../types/http-codes.types";

export const getAllProducts = (req: FastifyRequest, rep: FastifyReply) => {
  return rep.status(HttpCodes.NOT_IMPLEMENTED).send();
};

export const getProductById = (req: FastifyRequest, rep: FastifyReply) => {
  return rep.status(HttpCodes.NOT_IMPLEMENTED).send();
};

export const createProduct = (req: FastifyRequest, rep: FastifyReply) => {
  return rep.status(HttpCodes.NOT_IMPLEMENTED).send();
};

export const updateProduct = (req: FastifyRequest, rep: FastifyReply) => {
  return rep.status(HttpCodes.NOT_IMPLEMENTED).send();
};

export const deleteProduct = (req: FastifyRequest, rep: FastifyReply) => {
  return rep.status(HttpCodes.NOT_IMPLEMENTED).send();
};

export const updateProductQuantity = (
  req: FastifyRequest,
  rep: FastifyReply
) => {
  return rep.status(HttpCodes.NOT_IMPLEMENTED).send();
};

export const updateProductPrice = (req: FastifyRequest, rep: FastifyReply) => {
  return rep.status(HttpCodes.NOT_IMPLEMENTED).send();
};
