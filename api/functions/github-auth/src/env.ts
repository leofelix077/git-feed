if (!process.env.GITHUB_CLIENT_ID) {
  throw new Error("Environment variable GITHUB_CLIENT_ID must be defined");
}
// eslint-disable-next-line prefer-destructuring
export const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;

if (!process.env.GITHUB_CLIENT_SECRET) {
  throw new Error("Environment variable GITHUB_CLIENT_SECRET must be defined");
}
// eslint-disable-next-line prefer-destructuring
export const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

if (!process.env.GITHUB_REDIRECT_URI) {
  throw new Error("Environment variable GITHUB_REDIRECT_URI must be defined");
}
// eslint-disable-next-line prefer-destructuring
export const GITHUB_REDIRECT_URI = process.env.GITHUB_REDIRECT_URI;
