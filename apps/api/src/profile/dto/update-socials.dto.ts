import { createZodDto } from "nestjs-zod";
import { updateSocialsSchema } from "@socialsfyi/drizzle";

export class UpdateSocialsDto extends createZodDto(updateSocialsSchema) {}
