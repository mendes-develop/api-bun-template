import { numeric, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const notifications = pgTable("notifications", {
	id: serial("id").primaryKey().notNull(),
	message: text("message"),
	createdAt: timestamp("created_at", { mode: "string" })
		.defaultNow()
		.notNull(),
});

export const orders = pgTable("orders", {
	id: serial("id").primaryKey().notNull(),
	message: text("message"),
	createdAt: timestamp("created_at", { mode: "string" })
		.defaultNow()
		.notNull(),
});

export const products = pgTable("products", {
	id: serial("id").primaryKey().notNull(),
	name: text("name"),
	quantity: numeric("quantity"),
	createdAt: timestamp("created_at", { mode: "string" })
		.defaultNow()
		.notNull(),
});
