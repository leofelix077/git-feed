/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/camelcase */
import fetch from "cross-fetch";
import {
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GITHUB_REDIRECT_URI,
} from "./env";

// const logger = createLogger("github-auth");

export async function gitHubAuth(code: string): Promise<any> {
  const res = await fetch(`https://github.com/login/oauth/access_token`, {
    method: "POST",
    body: JSON.stringify({
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: GITHUB_REDIRECT_URI,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const response = await res.json();

  console.log(response);

  const userRes = await fetch(
    `https://api.github.com/user?access_token=${response.access_token}&scope=${response.scope}&token_type=${response.token_type}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  const user = await userRes.json();

  console.log(user);

  return { user, token: response.access_token };
}
