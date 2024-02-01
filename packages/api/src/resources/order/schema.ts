import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const orders = pgTable("orders", {
	id: serial("id").primaryKey(),
	order: text("order"),
	createdAt: text("created_at"),
});