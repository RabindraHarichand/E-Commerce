import { FastifyPluginCallback } from "fastify";

export const productRouter: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get("/", () => {});
  fastify.get("/:id", () => {});
  fastify.post("/", () => {});
  fastify.put("/:id", () => {});
  fastify.delete("/:id", () => {});
  fastify.patch("/:id/quantity", () => {});
  fastify.patch("/:id/price", () => {});

  done();
};
