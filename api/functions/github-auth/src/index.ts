import { createLogger } from "./log";
import { gitHubAuth } from "./github-auth";

const logger = createLogger("index");

export async function handler(event: { temporaryCode: string }): Promise<any> {
  logger.info({ event }, "github-auth lambda invoked");
  const res = await gitHubAuth(event.temporaryCode);
  return res;
}
