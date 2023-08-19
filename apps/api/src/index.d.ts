import { SelectUserSchema } from "@socialsfyi/drizzle/selects/user";
import express = require("express");

declare module "express" {
  interface Request {
    user: SelectUserSchema;
  }
}
