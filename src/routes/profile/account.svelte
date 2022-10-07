<script context="module" lang="ts">
  export async function load({ fetch }) {
    const url = `/api/users/1`; //TODO Hardcoded user id for now, change to be an parameter in future
    const response = await fetch(url);

    return {
      status: response.status,
      props: {
        foundUser: response.ok && (await response.json()),
      }
    };
  }
</script>

<script lang="ts">
  import Profile from '$lib/components/profile/Profile.svelte';
  import type { user } from '@prisma/client';

  export let foundUser: user;
</script>

<Profile foundUser={foundUser}/>
