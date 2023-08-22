import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import formidable from "formidable";

export const FormData = createParamDecorator(
  async (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const form = formidable({});
    const [formData] = await form.parse(request);
  }
);
