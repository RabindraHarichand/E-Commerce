import { FastifyPluginCallback } from "fastify";

export const userRouter: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get("/", () => {});
  fastify.get("/:id", () => {});
  fastify.post("/", () => {});
  fastify.put("/:id", () => {});
  fastify.delete("/:id", () => {});

  done();
};
