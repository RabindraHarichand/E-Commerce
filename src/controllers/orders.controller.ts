import { FastifyReply, FastifyRequest } from "fastify";
import { HttpCodes } from "../types/http-codes.types";

export const getAllOrdersForCurrentUser = (
  req: FastifyRequest,
  rep: FastifyReply
) => {
  return rep.status(HttpCodes.NOT_IMPLEMENTED).send();
};

export const getOrderById = (req: FastifyRequest, rep: FastifyReply) => {
  return rep.status(HttpCodes.NOT_IMPLEMENTED).send();
};

export const getAllOrdersByUserId = (
  req: FastifyRequest,
  rep: FastifyReply
) => {
  return rep.status(HttpCodes.NOT_IMPLEMENTED).send();
};

export const createOrder = (req: FastifyRequest, rep: FastifyReply) => {
  return rep.status(HttpCodes.NOT_IMPLEMENTED).send();
};

export const deleteOrder = (req: FastifyRequest, rep: FastifyReply) => {
  return rep.status(HttpCodes.NOT_IMPLEMENTED).send();
};

export const updateOrderStatus = (req: FastifyRequest, rep: FastifyReply) => {
  return rep.status(HttpCodes.NOT_IMPLEMENTED).send();
};
