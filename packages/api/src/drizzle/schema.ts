import { pgTable, serial, text, varchar, bigint, timestamp, numeric } from "drizzle-orm/pg-core";


export const notifications = pgTable("notifications", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: serial("id").primaryKey().notNull(),
    message: text("message"),
    createdAt: timestamp("created_at",)
        .defaultNow()
        .notNull(),
});

export const orders = pgTable("orders", {
    id: serial("id").primaryKey().notNull(),
    message: text("message"),
    createdAt: timestamp("created_at")
        .defaultNow()
        .notNull(),
});

export const products = pgTable("products", {
    id: serial("id").primaryKey().notNull(),
    name: text("name"),
    qtd: numeric("quantidade"),
    createdAt: timestamp("created_at")
        .defaultNow()
        .notNull(),
});