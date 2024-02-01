import { sql } from "drizzle-orm";
import {
	bigint,
	numeric,
	pgEnum,
	pgTable,
	serial,
	text,
	timestamp,
} from "drizzle-orm/pg-core";

export const keyStatus = pgEnum("key_status", [
	"expired",
	"invalid",
	"valid",
	"default",
]);
export const keyType = pgEnum("key_type", [
	"stream_xchacha20",
	"secretstream",
	"secretbox",
	"kdf",
	"generichash",
	"shorthash",
	"auth",
	"hmacsha256",
	"hmacsha512",
	"aead-det",
	"aead-ietf",
]);
export const aalLevel = pgEnum("aal_level", ["aal3", "aal2", "aal1"]);
export const codeChallengeMethod = pgEnum("code_challenge_method", [
	"plain",
	"s256",
]);
export const factorStatus = pgEnum("factor_status", ["verified", "unverified"]);
export const factorType = pgEnum("factor_type", ["webauthn", "totp"]);

export const messages = pgTable("messages", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint("id", { mode: "number" }).primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
		.defaultNow()
		.notNull(),
	message: text("message"),
});

export const notifications = pgTable("notifications", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint("id", { mode: "number" }).primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
		.defaultNow()
		.notNull(),
	message: text("message"),
});

export const orders = pgTable("orders", {
	id: serial("id").primaryKey().notNull(),
	message: text("message"),
	createdAt: text("created_at"),
});

export const products = pgTable("products", {
	id: serial("id").primaryKey().notNull(),
	name: text("name"),
	quantity: numeric("quantity"),
	createdAt: text("created_at"),
});
