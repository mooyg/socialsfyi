import { FactoryProvider } from "@nestjs/common";
import { DRIZZLE_ORM } from "../constants";
import { drizzle } from "@socialsfyi/drizzle";

export const DrizzleProvider: FactoryProvider = {
  provide: DRIZZLE_ORM,
  useFactory: async () => {
    return await drizzle();
  },
};
