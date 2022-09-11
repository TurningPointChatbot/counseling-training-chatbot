<script context="module" lang="ts">
  export async function load({ fetch, params }) {
    const url = `/api/users/${params.id}`;
    const response = await fetch(url);

    return {
      status: response.status,
      props: {
        foundUser: response.ok && (await response.json()),
        id: params.id
      }
    };
  }
</script>

<script lang="ts">
  import type { user } from '@prisma/client';

  export let foundUser: user;
  export let id: bigint;
</script>

<h1>User with id {id}</h1>
<p>{JSON.stringify(foundUser)}</p>
