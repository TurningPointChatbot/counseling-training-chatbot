<script context="module" lang="ts">
  export async function load({ fetch }) {
    const url = '/api/users';
    const response = await fetch(url);

    return {
      status: response.status,
      props: {
        users: response.ok && (await response.json())
      }
    };
  }
</script>

<script lang="ts">
  import type { user } from '@prisma/client';

  export let users: user[];
</script>

<h1>All users:</h1>
{#each users as user}
  <p>{JSON.stringify(user)}</p>
{/each}
