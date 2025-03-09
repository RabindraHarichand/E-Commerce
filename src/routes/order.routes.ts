import { FastifyPluginCallback } from "fastify";
import {
  createOrder,
  deleteOrder,
  getAllOrdersByUserId,
  getAllOrdersForCurrentUser,
  getOrderById,
  updateOrderStatus,
} from "../controllers/orders.controller";

export const orderRouter: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get("/", getAllOrdersForCurrentUser);
  fastify.post("/", createOrder);
  fastify.get("/:id", getOrderById);
  fastify.get("/user/:id", getAllOrdersByUserId);
  fastify.delete("/:id", deleteOrder);
  fastify.patch("/:id/status", updateOrderStatus);

  done();
};
