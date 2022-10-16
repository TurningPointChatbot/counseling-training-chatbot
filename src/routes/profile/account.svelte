<script lang="ts">
  import Profile from '$lib/components/profile/Profile.svelte';

  import type { user } from '@prisma/client';
  export let foundUser: user;

</script>

<script context="module" lang="ts">
    export async function load({ fetch }) {
        let email = 'testbaseuser1@test.com';
        const url = `/api/users/email=${email}`;
        const response = await fetch(url);

        return {
            status: response.status,
            props: {
                foundUser: response.ok && (await response.json()),
            }
        };
    }
</script>

<Profile foundUser={foundUser}/>