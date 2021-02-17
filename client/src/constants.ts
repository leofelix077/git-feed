export enum SupportedLocale {
  English = "en-gb",
  Portuguese = "pt-br",
}

export const LOCALE_KEY = "locale";

export const TOKEN_KEY = "token";

const useDevEnvironment = process.env.REACT_ENV !== "production";

// "https://git-repos-dev.bunchofnothing.com/repos";
let GIT_CLIENT_ID = "de35513896095c9a5ad6";
let GIT_REDIRECT_URI = "https://git-repos.bunchofnothing.com/repos";

if (useDevEnvironment) {
  GIT_CLIENT_ID = "b9c15e8cbcaa663ed1f7";
  GIT_REDIRECT_URI = "https://git-repos-dev.bunchofnothing.com/repos";
}

export const GITHUB_CLIENT_ID = GIT_CLIENT_ID;
export const GITHUB_REDIRECT_URI = GIT_REDIRECT_URI;

export const GITHUB_OAUTH_URL = `https://github.com/login/oauth/authorize?scope=user&client_id=${GITHUB_CLIENT_ID}&redirect_uri=${GITHUB_REDIRECT_URI}&scope=user,public_repo`;

export const LOCAL_STORAGE_LOGGED_IN = "isLoggedIn";
export const LOCAL_STORAGE_USER = "user";
