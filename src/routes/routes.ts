import fastify, { FastifyPluginCallback } from "fastify";
import { authRouter } from "./auth.routes";
import { userRouter } from "./user.routes";
import { productRouter } from "./product.routes";
import { orderRouter } from "./order.routes";

export const router: FastifyPluginCallback = (fastify, opts, done) => {
  //Routes
  fastify.register(authRouter, { prefix: "/auth" });
  fastify.register(userRouter, { prefix: "/users" });
  fastify.register(productRouter, { prefix: "/products" });
  fastify.register(orderRouter, { prefix: "/orders" });

  done();
};
