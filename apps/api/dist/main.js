"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ENV", {
    enumerable: true,
    get: function() {
        return ENV;
    }
});
const _core = require("@nestjs/core");
const _appmodule = require("./app.module");
const _nestjspino = require("nestjs-pino");
const _dotenv = require("dotenv");
const _schemas = require("@socialsfyi/schemas");
(0, _dotenv.config)();
const ENV = _schemas.serverEnvSchema.parse(process.env);
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule, {
        bufferLogs: true
    });
    app.useLogger(app.get(_nestjspino.Logger));
    app.enableShutdownHooks();
    await app.listen(8000);
}
bootstrap();
