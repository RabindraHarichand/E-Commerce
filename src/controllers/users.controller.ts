import { FastifyReply, FastifyRequest } from "fastify";
import { HttpCodes } from "../types/http-codes.types";

export const getAllUsers = (req: FastifyRequest, rep: FastifyReply) => {
  return rep.status(HttpCodes.NOT_IMPLEMENTED).send();
};
export const getUserById = (req: FastifyRequest, rep: FastifyReply) => {
  return rep.status(HttpCodes.NOT_IMPLEMENTED).send();
};
export const createUser = (req: FastifyRequest, rep: FastifyReply) => {
  return rep.status(HttpCodes.NOT_IMPLEMENTED).send();
};
export const updateUser = (req: FastifyRequest, rep: FastifyReply) => {
  return rep.status(HttpCodes.NOT_IMPLEMENTED).send();
};
export const deleteUser = (req: FastifyRequest, rep: FastifyReply) => {
  return rep.status(HttpCodes.NOT_IMPLEMENTED).send();
};
