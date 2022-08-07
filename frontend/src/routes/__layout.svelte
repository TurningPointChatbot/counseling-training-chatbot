<script lang="ts">
  import { session } from '$app/stores';
  import supabaseClient from '$lib/supabase';
  import { SupaAuthHelper } from '@supabase/auth-helpers-svelte';
  import '../app.css';
</script>

<SupaAuthHelper {supabaseClient} {session}>
  <slot />
</SupaAuthHelper>
