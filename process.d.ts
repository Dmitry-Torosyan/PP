declare namespace NodeJS {
  export interface ProcessEnv {
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    OKTA_OAUTH2_CLIENT_ID: string;
    OKTA_OAUTH2_CLIENT_SECRET: string;
  }
}
