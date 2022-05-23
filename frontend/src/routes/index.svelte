<script context="module" lang="ts">
  import { user } from '$lib/userStore';

  /** @type {import('@sveltejs/kit').Load} */ export function load() {
    let redirect_url: string = '/login';

    if (user) {
      redirect_url = 'modules';
    }

    return {
      status: 302,
      redirect: redirect_url
    };
  }
</script>

<script lang="ts">
  import ModulePage from './modules.svelte';
</script>

<ModulePage />
