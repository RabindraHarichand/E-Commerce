import { FastifyReply, FastifyRequest } from "fastify";
import { HttpCodes } from "../types/http-codes.types";

export const login = (req: FastifyRequest, rep: FastifyReply) => {
  return rep.status(HttpCodes.NOT_IMPLEMENTED).send();
};

export const register = (req: FastifyRequest, rep: FastifyReply) => {
  return rep.status(HttpCodes.NOT_IMPLEMENTED).send();
};
