import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";

export const notifications = pgTable("notifications", {
  id: serial("id").primaryKey(),
  message: text("message"),
  createdAt: text("created_at"),
});

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  quantity: text("message"),
  createdAt: text("created_at"),
});

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name"),
  quantity: integer("quantity"),
  createdAt: text("created_at"),
});

