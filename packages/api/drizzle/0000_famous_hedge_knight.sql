CREATE TABLE IF NOT EXISTS "notifications" (
	"id" serial PRIMARY KEY NOT NULL,
	"message" text,
	"created_at" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"message" text,
	"created_at" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"quantity" numeric,
	"created_at" text
);
