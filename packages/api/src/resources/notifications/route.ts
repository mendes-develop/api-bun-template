import {
	getANotificationById,
	getAllNotifications,
	postNotification,
} from "@/resources/notifications/handler";
import { tags } from "@/swagger";
import { Elysia, t } from "elysia";

const swaggerGroup = {
	detail: {
		tags: [tags.Notification],
	},
};

export const notifications = new Elysia({ prefix: "/notifications" })
	.get(
		"/",
		async ({ cookie }) => {
			console.log({ cookie: cookie.id.get() })
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
	.guard({
		body: t.Object({ message: t.String() }),
		// cookie: t.Cookie({
		// 	profile: t.Object({
		// 		id: t.Numeric(),
		// 		ronaldo: t.String()
		// 	})
		// })
	}, (app) =>
		app.post(
			"/",
			async ({ body, cookie }) => {
				try {
					// cookie.id.set({
					// 	value: 123,
					// 	httpOnly: true,
					// 	secure: true,
					// })

					return await postNotification(body.message);
				} catch (err) {
					return err;
				}
			},
			swaggerGroup,
		),
	);
