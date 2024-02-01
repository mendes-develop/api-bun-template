import { supabase } from "@/supabase/supabase";
import { S } from "elysia/dist/index-3yRrZCrW";

type Body =  {
    email: string, 
    password: string
}

export const singOut = () => supabase.auth.signOut()

export const singUp = (body:Body) => {
    return supabase.auth.signUp({
        email: body.email,
        password: body.password,
    })
}
export const singIn = (body:Body) => {
    return supabase.auth.signInWithPassword({
            email: body.email,
            password: body.password,
        });    
};
