import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const orders = pgTable("orders", {
	id: serial("id").primaryKey(),
	quantity: text("message"),
	createdAt: text("created_at"),
});
