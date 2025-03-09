import Fastify, { FastifyInstance, RouteShorthandOptions } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";
import { router } from "./routes/routes";

interface Options {
  port: number;
}

const server: FastifyInstance<Server> = Fastify({});

export const start = async (options: Options) => {
  // Routes
  server.register(router, { prefix: "/api" });
  try {
    await server.listen({ port: options.port });

    const address = server.server.address();
    const port = typeof address === "string" ? address : address?.port;
    console.log(`Server running on port ${options.port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
