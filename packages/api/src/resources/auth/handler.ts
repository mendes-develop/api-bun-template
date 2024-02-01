import { supabase } from "@/supabase/supabase";

export const signInWithPassword = async (body: {
	email: string;
	password: string;
}) => {
	return supabase.auth.signInWithPassword({
		email: body.email,
		password: body.password,
	});
};

export const signUpWithEmail = async (body: {
	email: string;
	password: string;
}) => {
	return supabase.auth.signUp({
		email: body.email,
		password: body.email,
	});
};
