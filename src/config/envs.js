"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var zod = require("zod");
var envsSchema = zod
    .object({
    PORT: zod.coerce.number(),
})
    .strict()
    .passthrough();
var _a = envsSchema.safeParse(process.env), error = _a.error, data = _a.data;
console.log({ error: error, data: data });
// if (error) {
//   throw new Error(`Config validation error: ${error.message}`);
// }
// const envVars: EnvVars = data;
// export const envs = {
//   port: envVars.PORT,
// };
