import { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "@socialsfyi/drizzle/schema";

export type Drizzle = NodePgDatabase<typeof schema>;
