import { Module } from "@nestjs/common";
import { DrizzleProvider } from "./drizzle.provider";
import { DRIZZLE_ORM } from "../constants";

@Module({
  providers: [DrizzleProvider],
  exports: [DRIZZLE_ORM],
})
export class DrizzleModule {}
