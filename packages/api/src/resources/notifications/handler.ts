import { db } from "@/drizzle/db";
import { notifications } from "@/resources/notifications/schema";
import { eq } from "drizzle-orm";

export const getAllNotifications = async () => {
	return await db.select().from(notifications);
};

export const getANotificationById = async (id: number) => {
	return await db.select().from(notifications).where(eq(notifications.id, id));
};

export const postNotification = async (message: string) => {
	return (await db.insert(notifications).values({ message }).returning())[0];
};
