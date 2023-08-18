import { insertUserSchema } from "@socialsfyi/drizzle";
import { createZodDto } from "nestjs-zod";

export class InsertUserDto extends createZodDto(insertUserSchema) {}
