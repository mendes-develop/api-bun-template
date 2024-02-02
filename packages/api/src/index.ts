import { cors } from "@elysiajs/cors";
import { swaggerMiddleware } from "@/swagger";
import { auth } from "@/resources/auth/route";
import { Elysia, t } from "elysia";
import { notifications } from "./resources/notifications/route";

const port = process.env.PORT || 4000;

export const app = new Elysia()
	.use(cors())
	.use(swaggerMiddleware)
	.use(auth)
	.use(notifications)
	.listen(port);

export type App = typeof app;

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
