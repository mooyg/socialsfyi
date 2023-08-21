declare global {
  namespace NodeJS {
    interface ProcessEnv {
      POSTGRES_PASSWORD: string;
      DB_URL: string;
      DISCORD_CLIENT_ID: string;
      DISCORD_CLIENT_SECRET: string;
      DISCORD_CALLBACK_URL: string;
      CLIENT_URL: string;
      SESSION_SECRET: string;
      OBJECT_STORAGE_KEY: string;
      OBJECT_STORAGE_SECRET: string;
      OBJECT_STORAGE_ENDPOINT: string;
    }
  }
}

export {}
