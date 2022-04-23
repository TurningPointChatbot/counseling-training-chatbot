import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  <string>import.meta.env.VITE_SUPABASE_URL,
  <string>import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default supabase;
