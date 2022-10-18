<script context="module" lang="ts">
  export async function load({ fetch, params }) {
    const url = `/api/users/email=${params.email}`;
    const response = await fetch(url);

    return {
      status: response.status,
      props: {
        foundUser: response.ok && (await response.json()),
        email: params.email
      }
    };
  }
</script>

<script lang="ts">
  import type { user } from '@prisma/client';

  export let foundUser: user;
  export let email: string;
</script>

<h1>User with email: {email}</h1>
<p>{JSON.stringify(foundUser)}</p>
