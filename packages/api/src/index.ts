import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { Elysia, t } from "elysia";
import { auth } from "./resources/auth/route";
import { notifications } from "./resources/notifications/route";


const port = process.env.PORT || 4000;

export const app:any = new Elysia()
	.use(cors())
	.use(
		swagger({
			documentation: {
				tags: [
					{ name: "Test", description: "Test endpoints" },
					{ name: "Auth", description: "Authentication endpoints" },
				],
			},
		}),
	)
	.use(auth)
	.use(notifications)
	.listen(port);

export type App = typeof app;

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
