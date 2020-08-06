import { createLogger } from "./log";
import { gitHubAuth } from "./github-auth";
import { GITHUB_CLIENT_ID } from "./env";

const logger = createLogger("index");

export async function handler(event: { body: any }): Promise<any> {
  let responseCode = 200;
  let code = null;
  let clientId = null;
  let userInfo = {};

  logger.info(event, "received event");

  if (event.body) {
    const body = JSON.parse(event.body);
    logger.info(body, "request body");

    code = body.code;
    clientId = body.clientId;
  }

  if (!code) {
    logger.error("no code present. Cannot authenticate user");
    responseCode = 500;
  } else {
    userInfo = await gitHubAuth(code);
  }

  if (clientId !== GITHUB_CLIENT_ID) {
    responseCode = 500;
  }

  const response = {
    statusCode: responseCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type, Accept",
      "Access-Control-Allow-Origin": "https://git-repos-dev.bunchofnothing.com",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    },
    body: JSON.stringify(userInfo),
  };

  logger.info(response, "response");
  return response;
}
