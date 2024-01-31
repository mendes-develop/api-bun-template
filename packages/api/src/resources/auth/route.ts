import { supabase } from "@/supabase/supabase";
import { Elysia, t } from "elysia";

const swaggerGroup = {
	detail: {
		tags: ["Auth"],
	},
};

export const auth = new Elysia({ prefix: "/auth" })
	.delete(
		"/logout",
		async ({ body }) => {
			return await supabase.auth.signOut();
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
						const { data, error } = await supabase.auth.signUp({
							email: body.email,
							password: body.password,
						});

						if (error) return error;

						return data;
					},
					swaggerGroup,
				)
				.post(
					"/signin",
					async ({ body }) => {
						const { data, error } = await supabase.auth.signInWithPassword({
							email: body.email,
							password: body.password,
						});

						if (error) return error;

						return data;
					},
					swaggerGroup,
				),
	);
