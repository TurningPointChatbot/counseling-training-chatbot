<script lang="ts">
    import Profile from '$lib/components/profile/Profile.svelte';

    import type { user } from '@prisma/client';
    export let foundUser: user;
</script>

<script context="module" lang="ts">
    /*
    Should be able to use this code to get values from stores,
    but stores do not seem to be able to store data between pages
    Check login.svelte for code to set the store.

    import {get} from "svelte/store";
    import {user} from "../../stores/authStore";

    email = get(user);
     */
    export async function load({ fetch, session }) {
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
</script>

<Profile foundUser={foundUser}/>