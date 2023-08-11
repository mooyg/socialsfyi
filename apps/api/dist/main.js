"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _core = require("@nestjs/core");
const _appmodule = require("./app.module");
const _nestjspino = require("nestjs-pino");
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule, {
        bufferLogs: true
    });
    app.useLogger(app.get(_nestjspino.Logger));
    app.enableShutdownHooks();
    await app.listen(8000);
}
bootstrap();
