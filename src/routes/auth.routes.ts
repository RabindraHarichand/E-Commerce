import { FastifyPluginCallback } from "fastify";

export const authRouter: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.post("/login", () => {});
  fastify.post("/register", () => {});

  done();
};
