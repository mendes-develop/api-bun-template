import { supabase } from "@/supabase/supabase";
import { Elysia, t } from "elysia";
import { singIn, singOut, singUp } from "./handler";

const swaggerGroup = {
	detail: {
		tags: ["Auth"],
	},
};

export const auth = new Elysia({ prefix: "/auth" })
	.delete(
		"/logout",
		async ({ body }) => {
			return await singOut()
		},
		swaggerGroup,
	)
	.guard(
		{
			body: t.Object({
				email: t.String(),
				password: t.String(),
			}),
		},
		(app) =>
			app
				.post(
					"/signup",
					async ({ body }) => {
						const { data, error } = await singUp(body)

						if (error) return error;

						return data;
					},
					swaggerGroup,
				)
				.post(
					"/signin",
					async ({ body }) => {
						const { data, error } = await singIn(body)

						if (error) return error;

						return data;
					},
					swaggerGroup,
				),
	);
