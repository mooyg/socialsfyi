import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import pg from "pg";
const Client = pg.Client;

const main = async () => {
  const client = new Client({
    connectionString: process.env.DB_URL!,
  });
  console.log("Connecting to database...");
  await client.connect();

  console.log("Applying migrations...");
  const db = drizzle(client);
  await migrate(db, {
    migrationsFolder: "drizzle",
  });
  console.log("Migrations applied successfully");
  process.exit(0);
};

main();
