import { numeric, pgTable, serial, text } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
	id: serial("id").primaryKey(),
	name: text("name"),
	quantity: numeric("quantity"),
	createdAt: text("created_at"),
});
