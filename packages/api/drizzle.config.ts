import type { Config } from "drizzle-kit";
export default {
	schema: "./src/resources/**/schema.ts",
	out: "./drizzle",
	driver: "pg",
	dbCredentials: {
		connectionString: process.env.DB_CONNECTION || "",
	},
} satisfies Config;
