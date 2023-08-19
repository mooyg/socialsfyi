import { Inject, Injectable } from "@nestjs/common";
import { DRIZZLE_ORM } from "../constants";
import { Drizzle } from "../types";

@Injectable()
export class ProfileService {
  constructor(@Inject(DRIZZLE_ORM) private readonly _drizzle: Drizzle) {}

  async updateDashboard() {}
}
