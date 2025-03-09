import { FastifyPluginCallback } from "fastify";
import { login, register } from "../controllers/auth.controller";

export const authRouter: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.post("/login", login);
  fastify.post("/register", register);

  done();
};
