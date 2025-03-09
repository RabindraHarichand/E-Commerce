import { FastifyPluginCallback } from "fastify";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/users.controller";

export const userRouter: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get("/", getAllUsers);
  fastify.get("/:id", getUserById);
  fastify.post("/", createUser);
  fastify.put("/:id", updateUser);
  fastify.delete("/:id", deleteUser);

  done();
};
