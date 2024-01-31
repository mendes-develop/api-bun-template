import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_BASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
	throw new Error("Supabase credentials are missing.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
