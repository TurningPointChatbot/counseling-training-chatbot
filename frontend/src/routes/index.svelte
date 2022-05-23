<script lang="ts">
  import supabase from '$lib/supabase';

  import type { User } from '@supabase/supabase-js';

  async function redirectPage() {
    let redirect_url: string = '/login';

    let user: User = supabase.auth.user();

    console.log('after retrieving user in index:');
    console.log(user);

    if (user) {
      redirect_url = '/modules';
    }

    location.href = redirect_url;
  }
</script>

<div use:redirectPage />
