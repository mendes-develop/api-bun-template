DROP TABLE "messages";--> statement-breakpoint
ALTER TABLE "notifications" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "notifications" ALTER COLUMN "created_at" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "notifications" ALTER COLUMN "created_at" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "notifications" ALTER COLUMN "created_at" DROP NOT NULL;