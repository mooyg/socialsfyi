import { PassportSerializer } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor() {
    super();
  }
  serializeUser() {}
  async deserializeUser() {}
}
