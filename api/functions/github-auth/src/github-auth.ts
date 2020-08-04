import AWS from "aws-sdk";
import { createLogger } from "./log";

// const logger = createLogger("github-auth");

export async function gitHubAuth(code: string): Promise<{ token: string }> {
  return { token: code };
}
