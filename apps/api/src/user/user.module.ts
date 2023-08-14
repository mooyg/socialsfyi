import { Module } from "@nestjs/common";
import { DrizzleModule } from "@socialsfyi/api/nest-drizzle/drizzle.module";
import { UserController } from "@socialsfyi/api/user/user.controller";
import { UserService } from "@socialsfyi/api/user/user.service";

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [DrizzleModule],
})
export class UserModule {}
