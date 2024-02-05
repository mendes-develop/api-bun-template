import type { Config } from "drizzle-kit";
export default {
	schema: "./src/drizzle/schema.ts",
	out: "./drizzle",
	driver: "pg",
	dbCredentials: {
		connectionString: process.env.DB_CONNECTION || "",
	},
} satisfies Config;
