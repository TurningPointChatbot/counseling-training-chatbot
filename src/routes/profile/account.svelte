<script lang="ts">
    import Profile from '$lib/components/profile/Profile.svelte';

    import type { user } from '@prisma/client';
    export let foundUser: user;
</script>

<script context="module" lang="ts">

export async function load({ fetch, session }) {
    try{ 
        console.log("here");
        let email = session.user.email;

        const url = `/api/users/email=${email}`;
        const response = await fetch(url);

        return {
            status: response.status,
            props: {
                foundUser: response.ok && (await response.json()),
            }
        };
    }
    catch (e) {
        return {
            status: 302,
            redirect: "/login"
        }
    }
}
</script>

<Profile foundUser={foundUser}/>