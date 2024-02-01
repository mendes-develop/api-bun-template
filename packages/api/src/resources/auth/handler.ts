import { supabase } from "@/supabase/supabase";

type BodyParams = {
	email: string;
	password: string;
};

export const signInWithPassword = async (body: BodyParams) => {
	return supabase.auth.signInWithPassword({
		email: body.email,
		password: body.password,
	});
};

export const signUpWithEmail = async (body: BodyParams) => {
	return supabase.auth.signUp({
		email: body.email,
		password: body.email,
	});
};
