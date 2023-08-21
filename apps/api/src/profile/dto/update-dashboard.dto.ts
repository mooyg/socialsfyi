import { updateDashboardSchema } from "@socialsfyi/drizzle";
import { createZodDto } from "nestjs-zod";

export class UpdateDashboardDto extends createZodDto(updateDashboardSchema) {}
