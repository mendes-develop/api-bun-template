import { sql } from "drizzle-orm";
import { bigint, pgEnum, pgTable, text, timestamp, serial } from "drizzle-orm/pg-core";

export const keyStatus = pgEnum("key_status", [
	"default",
	"valid",
	"invalid",
	"expired",
]);
export const keyType = pgEnum("key_type", [
	"aead-ietf",
	"aead-det",
	"hmacsha512",
	"hmacsha256",
	"auth",
	"shorthash",
	"generichash",
	"kdf",
	"secretbox",
	"secretstream",
	"stream_xchacha20",
]);
export const factorType = pgEnum("factor_type", ["totp", "webauthn"]);
export const factorStatus = pgEnum("factor_status", ["unverified", "verified"]);
export const aalLevel = pgEnum("aal_level", ["aal1", "aal2", "aal3"]);
export const codeChallengeMethod = pgEnum("code_challenge_method", [
	"s256",
	"plain",
]);

export const notifications = pgTable("notifications", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint("id", { mode: "number" }).primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
		.defaultNow()
		.notNull(),
	message: text("message"),
});

export const messages = pgTable("messages", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint("id", { mode: "number" }).primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
		.defaultNow()
		.notNull(),
	message: text("message"),
});

export const user = pgTable("user", {
	id: serial("id"),
	name: text("name"),
	email: text("email"),
	password: text("password"),
	role: text("role").$type<"admin" | "customer">(),
	createdAt: timestamp("created_at"),
	updatedAt: timestamp("updated_at"),
  });
