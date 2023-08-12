import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Client } from "pg";

const main = async () => {
  const client = new Client({
    connectionString: process.env.DB_URL!,
  });
  await client.connect();

  const db = drizzle(client);
  await migrate(db, {
    migrationsFolder: "drizzle",
  });
  console.log("Migrations applied successfully");
  process.exit(0);
};

main();
