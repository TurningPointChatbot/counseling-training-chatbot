import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  <string>'https://wkmzrfsgsgmxlbufzffk.supabase.co',
  <string>(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrbXpyZnNnc2dteGxidWZ6ZmZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDg2OTQ5NjAsImV4cCI6MTk2NDI3MDk2MH0.LLBrYL1vmpjNNruTykkvZuqwxZzit4NAtSomZT9TZ-w'
  )
);

/*const supabase = createClient(
    <string>import.meta.env.VITE_SUPABASE_URL,
    <string>import.meta.env.VITE_SUPABASE_ANON_KEY
);
*/
export default supabase;
