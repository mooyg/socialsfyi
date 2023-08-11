"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    user: function() {
        return user;
    },
    session: function() {
        return session;
    },
    key: function() {
        return key;
    }
});
const _pgcore = require("drizzle-orm/pg-core");
const user = (0, _pgcore.pgTable)("auth_user", {
    id: (0, _pgcore.varchar)("id", {
        length: 15
    }).primaryKey(),
    name: (0, _pgcore.varchar)("name", {
        length: 100
    }).notNull(),
    email: (0, _pgcore.varchar)("email").notNull().unique()
});
const session = (0, _pgcore.pgTable)("user_session", {
    id: (0, _pgcore.varchar)("id", {
        length: 128
    }).primaryKey(),
    userId: (0, _pgcore.varchar)("user_id", {
        length: 15
    }).notNull().references(()=>user.id),
    activeExpires: (0, _pgcore.bigint)("active_expires", {
        mode: "number"
    }).notNull(),
    idleExpires: (0, _pgcore.bigint)("idle_expires", {
        mode: "number"
    }).notNull()
});
const key = (0, _pgcore.pgTable)("user_key", {
    id: (0, _pgcore.varchar)("id", {
        length: 255
    }).primaryKey(),
    userId: (0, _pgcore.varchar)("user_id", {
        length: 15
    }).notNull().references(()=>user.id),
    hashedPassword: (0, _pgcore.varchar)("hashed_password", {
        length: 255
    })
});
