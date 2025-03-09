import { FastifyPluginCallback } from "fastify";

export const orderRouter: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get("/", () => {});
  fastify.post("/", () => {});
  fastify.get("/:id", () => {});
  fastify.get("/user/:id", () => {});
  fastify.delete("/:id", () => {});
  fastify.patch("/:id/status", () => {});
  done();
};
