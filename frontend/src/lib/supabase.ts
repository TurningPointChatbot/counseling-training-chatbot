import { createSupabaseClient } from '@supabase/auth-helpers-sveltekit';

const supabase = createSupabaseClient(
  <string>import.meta.env.VITE_SUPABASE_URL,
  <string>import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default supabase;
