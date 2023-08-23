import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import formidable, { Options } from "formidable";

export const FormData = createParamDecorator(
  async (options: Options, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const form = formidable({ ...options });
    const [fields, files] = await form.parse(request);

    return {
      fields,
      files,
    };
  }
);
