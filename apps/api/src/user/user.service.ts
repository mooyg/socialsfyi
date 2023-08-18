import { Inject, Injectable } from "@nestjs/common";
import { Drizzle } from "../types";
import { DRIZZLE_ORM } from "../constants";

@Injectable()
export class UserService {
  constructor(@Inject(DRIZZLE_ORM) private readonly _drizzle: Drizzle) {}
}
