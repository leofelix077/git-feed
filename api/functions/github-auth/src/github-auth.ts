import fetch from "cross-fetch";
import {
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GITHUB_REDIRECT_URI,
} from "./env";

// const logger = createLogger("github-auth");

export async function gitHubAuth(code: string): Promise<any> {
  const data = new FormData();
  data.append("client_id", GITHUB_CLIENT_ID);
  data.append("client_secret", GITHUB_CLIENT_SECRET);
  data.append("code", code);
  data.append("redirect_uri", GITHUB_REDIRECT_URI);

  const res = await fetch(`https://github.com/login/oauth/access_token`, {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const response = await res.json();

  const userRes = await fetch(
    `https://api.github.com/user?access_token=${response.access_token}&scope=${response.scope}&token_type=${response.token_type}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  const user = await userRes.json();

  return { user, token: response.access_token };
}
