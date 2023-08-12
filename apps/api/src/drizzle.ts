import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { PostgresJsDatabase, drizzle as orm } from "drizzle-orm/postgres-js";
import { Pool } from "pg";
import { ENV } from "./main";
@Injectable()
export class Drizzle implements OnModuleInit {
  private pgClient: Pool;
  drizzle: PostgresJsDatabase<Record<string, never>> | undefined;

  constructor() {
    this.pgClient = new Pool({
      connectionString: ENV.DB_URL,
    });
  }
  async onModuleInit() {
    await this.connect();
    this.drizzle = orm(this.pgClient);
  }

  private async connect() {
    try {
      await this.pgClient.connect();
      Logger.log("Connected to the database successfully");
    } catch (e) {
      Logger.error("Couldn't Establish an connection with the database", e);
    }
  }
}
