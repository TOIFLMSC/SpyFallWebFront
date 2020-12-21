export const AUTH_STATUS = "AUTH";
export const NOAUTH_STATUS = "NO_AUTH";
export type AuthorizationStatus = "AUTH" | "NO_AUTH";

export const AppRoute = {
  WELCOME: `/welcome`,
  LOGIN: `/login`,
  REGISTER: `/register`,
  CREATE_LOBBY: `/createLobby`,
  CONNECT: `/connect`,
  SETTINGS: `/settings`,
  LOSE: `/lose`,
  RESULT: `/result`,
  ROOT: `/`,
  GAME: `/game`,
};

export const APIRoute = {
  QUESTIONS: `/questions`,
  LOGIN: `/login`,
};
