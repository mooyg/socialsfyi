"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppModule", {
    enumerable: true,
    get: function() {
        return AppModule;
    }
});
const _common = require("@nestjs/common");
const _appservices = require("./app.services");
const _appcontroller = require("./app.controller");
const _validateEnv = require("./validateEnv");
const _config = require("@nestjs/config");
const _nestjspino = require("nestjs-pino");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let AppModule = class AppModule {
};
AppModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _nestjspino.LoggerModule.forRoot({
                pinoHttp: {
                    transport: {
                        target: "pino-pretty"
                    }
                }
            }),
            _config.ConfigModule.forRoot(),
            _validateEnv.ValidateEnv
        ],
        controllers: [
            _appcontroller.AppController
        ],
        providers: [
            _appservices.AppService
        ]
    })
], AppModule);
