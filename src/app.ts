import { envs } from "./config/envs";
import { start } from "./server";

(async () => {
  await main();
})();

async function main() {
  start({ port: envs.port });
}
