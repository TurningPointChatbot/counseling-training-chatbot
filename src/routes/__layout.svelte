<script lang="ts">
  import { session, page } from '$app/stores';
  import supabaseClient from '$lib/supabase';
  import { SupaAuthHelper } from '@supabase/auth-helpers-svelte';
  import '../app.css';
  import AdminSidenav from '$lib/components/sidenav/AdminSidenav.svelte';
  import CounsellorSidenav from '$lib/components/sidenav/CounsellorSidenav.svelte';

  let avatarUrl = 'https://placeimg.com/80/80/people';
  const positions = {
    1 : 'admin',
    2 : 'counsellor',
    3: 'base'
  }

  /**
   * Sign Out Function
   */
  async function signOut() {
    if ($page.url.pathname === '/login') {
      return;
    }

    try {
      const { error } = await supabaseClient.auth.signOut();
      if (error) throw error;
    } catch (error) {
      alert(error.error_description || error.message);
    }
  }

  /**
   * Retrieve user information from the database and update UI
   */

  import type { user } from '@prisma/client';
  export let foundUser: user;

  // if (foundUser == null && $page.url.pathname != '/login'){
  //   // REDIRECT OT LOGIN HERE
  //   console.log("redirecting");
  //   console.log(`${$page.url.origin}/login`);
  //   // $page.url.pathname = "/login";
  //   // Response.redirect(`${$page.url.origin}`, 302);
  //   location.href = "/login";
    
  // }

  // export async function load({ fetch, session }) {
  //     if (foundUser == null && $page.url.pathname != '/login'){
  //       console.log("redirecting");
  //       // $page.url.pathname = "/login";
  //       return {
  //       status: 302,
  //       redirect: "login"
  //       };
  //     }
  // }

  export async function load({ fetch, session }) {
    try {
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
      if ($page.url.pathname != '/login'){
        return {
          props: {
            foundUser: null
          },
          status: 302,
          redirect: "/login"
        }
      }
    }
  }
</script>

<script context="module" lang="ts">

</script>

{#if $page.url.pathname === '/login'}
  <!-- Disable navbar for login page. -->
  <div class="m-3">
    <SupaAuthHelper {supabaseClient} {session}>
    <slot />
    </SupaAuthHelper>
  </div>
{:else}
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <div class="navbar bg-primary">
        <div class="flex-none">
          <label for="my-drawer" class="btn btn-square btn-ghost drawer-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-white"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              /></svg
            >
          </label>
        </div>
        
        <div class="flex-1 pb-1">
          <img
            class="max-h-12"
            alt="Turning point logo"
            src="/turning-point-logo.svg"
          />
        </div>
        {#if foundUser != null}
        <div class="flex-none">
          <div class="dropdown dropdown-end">
            <button tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img alt="profile" src={ foundUser != null ? foundUser['avatar_url'] : avatarUrl } />
              </div>
            </button>
            <ul
              tabindex="0"
              class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li><a href={'/profile/account'}>Profile</a></li>
              <li on:click={signOut}><a href="../login">Logout</a></li>
            </ul>
          </div>
        </div>
        {/if}
      </div>
      <div class="m-3">
        <SupaAuthHelper {supabaseClient} {session}>
          <slot/>
        </SupaAuthHelper>
      </div>
    </div>
    {#if foundUser != null}
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay" />
      <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        {#if positions[foundUser['type_id']] === 'admin' || positions[foundUser['type_id']] === 'supervisor'}
          <AdminSidenav />
        {/if}

        {#if positions[foundUser['type_id']] === 'counsellor'}
          <CounsellorSidenav />
        {/if}
      </ul>
    </div>
    {/if}
  </div>
{/if}
