CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"discord_id" varchar NOT NULL,
	"pfp" varchar,
	CONSTRAINT "users_discord_id_unique" UNIQUE("discord_id")
);
