import { supabase } from "@/supabase/supabase";
import { Elysia, t } from "elysia";
import { signInWithPassword, signUpWithEmail } from "./handler";
import { tags } from "@/swagger";

const swaggerGroup = {
	detail: {
		tags: [tags.Auth],
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
						const { data, error } = await signUpWithEmail(body);

						if (error) return error;

						return data;
					},
					swaggerGroup,
				)
				.post(
					"/signin",
					async ({ body }) => {
						const { data, error } = await signInWithPassword(body);

						if (error) return error;

						return data;
					},
					swaggerGroup,
				),
	);
