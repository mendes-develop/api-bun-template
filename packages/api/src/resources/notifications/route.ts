import {
	getANotificationById,
	getAllNotifications,
	postNotification,
} from "@/resources/notifications/handler";
import { Elysia, t } from "elysia";

const swaggerGroup = {
	detail: {
		tags: ["Notification"],
	},
};

export const notifications = new Elysia({ prefix: "/notifications" })
	.get(
		"/",
		async () => {
			try {
				return await getAllNotifications();
			} catch (err) {
				return err;
			}
		},
		swaggerGroup,
	)
	.get(
		"/id/:id",
		async ({ params: { id } }) => {
			try {
				return getANotificationById(Number(id));
			} catch (err) {
				return err;
			}
		},
		swaggerGroup,
	)
	.guard({ body: t.Object({ message: t.String() }) }, (app) =>
		app.post(
			"/",
			async ({ body }) => {
				try {
					return await postNotification(body.message);
				} catch (err) {
					return err;
				}
			},
			swaggerGroup,
		),
	);
