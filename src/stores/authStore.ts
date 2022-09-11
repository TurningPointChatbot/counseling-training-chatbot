import { writable } from "svelte/store";
import supabase from '$lib/supabase';

const user = writable(supabase.auth.user())

supabase.auth.onAuthStateChange(async (_, session) => {
  user.set(session?.user)
})

export default user;