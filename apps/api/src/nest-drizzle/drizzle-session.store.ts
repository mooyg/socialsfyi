import { SessionData, Store } from "express-session";
import { Drizzle } from "../types";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

export class DrizzleSessionStore<
  TSchema extends Record<string, unknown> = Record<string, never>
> extends Store {
  private readonly _drizzle: Drizzle;
  constructor(
    private readonly _connection: Pool,
    private readonly _schema: TSchema
  ) {
    super();
    _connection.connect();
    this._drizzle = drizzle(_connection, _schema);
  }

  get(
    _sid: string,
    _callback: (err: any, session?: SessionData | null | undefined) => void
  ): void {
    console.log("sid", _sid);
  }
  async set(
    sid: string,
    session: SessionData,
    _callback?: ((err?: any) => void) | undefined
  ): Promise<void> {
    console.log(session, "session");
    console.log(sid, "sid");
  }
  destroy(_sid: string, _callback?: ((err?: any) => void) | undefined): void {
    throw new Error("Method not implemented.");
  }
}
