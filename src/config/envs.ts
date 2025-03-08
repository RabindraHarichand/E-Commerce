import "dotenv/config";
import * as zod from "zod";

interface EnvVars {
  PORT: number;
}

const envsSchema = zod
  .object({
    PORT: zod.coerce.number(),
  })
  .strict()
  .passthrough();

const { error, data } = envsSchema.safeParse(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = data;

export const envs = {
  port: envVars.PORT,
};
