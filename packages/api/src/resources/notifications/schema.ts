import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const notifications = pgTable("notifications", {
	id: serial("id").primaryKey(),
	message: text("message"),
	createdAt: text("created_at"),
});
