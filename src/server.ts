import Fastify, { FastifyInstance, RouteShorthandOptions } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";

const server: FastifyInstance = Fastify({});

interface Options {
  port: number;
}

export const start = async (options: Options) => {
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
