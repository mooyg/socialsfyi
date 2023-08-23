import { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "@socialsfyi/drizzle/schema";
import { SelectUserSchema } from "@socialsfyi/drizzle/selects/user";
import formidable from "formidable";

export type Drizzle = NodePgDatabase<typeof schema>;

export type User = SelectUserSchema;

export type Done = (err: Error | null, user?: User | null) => void;

export type FormidableReturnType = {
  fields: formidable.Fields;
  files: {
    file: formidable.File[];
  };
};
