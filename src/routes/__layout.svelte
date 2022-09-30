<script lang="ts">
  import { session, page } from '$app/stores';
  import supabaseClient from '$lib/supabase';
  import { SupaAuthHelper } from '@supabase/auth-helpers-svelte';
  import '../app.css';
  import AdminSidenav from '$lib/components/sidenav/AdminSidenav.svelte';
  import CounsellorSidenav from '$lib/components/sidenav/CounsellorSidenav.svelte';

  let avatarUrl = 'https://placeimg.com/80/80/people';
  let userType = '';

  // TODO: All the below JavaScript code is copied from Profile.svelte and Login.svelte - these common functions
  // should ideally be refactored out into a single place.

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
   * Retrieves a profile picture's URL and sets it to src.
   */
  async function downloadImage(path) {
    try {
      const { data, error } = await supabaseClient.storage
        .from('avatars')
        .download(path);

      if (error) throw error;

      return URL.createObjectURL(data).toString();
    } catch (error) {
      // TODO: handle downloading error
      console.log('Error downloading image: ', error.message);
    }
  }

  /**
   * Retrieve user information from the database and update UI
   */
  async function getUserInfo() {
    if ($page.url.pathname === '/login') {
      return;
    }

    try {
      const user = supabaseClient.auth.user();

      let { data, error, status } = await supabaseClient
        .from('user')
        .select(
          `
          avatar_url,
          user_type:type_id (
            name
          )
        `
        )
        .eq('email', user.email)
        .single();

      if (error && status) throw error;

      if (data) {
        userType = data.user_type.name;
        if (data.avatar_url) {
          avatarUrl = await downloadImage(data.avatar_url);
        }
      }
    } catch (error) {
      console.log(error.error_description || error.message);
    }
  }

  getUserInfo();
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
        <div class="flex-none">
          <div class="dropdown dropdown-end">
            <button tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img alt="profile" src="data:image/jpeg;base64,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" /> //avatar here is random
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
      </div>
      <div class="m-3">
        <SupaAuthHelper {supabaseClient} {session}>
          <slot/>
        </SupaAuthHelper>
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay" />
      <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        {#if userType === 'admin' || userType === 'supervisor'}
          <AdminSidenav />
        {/if}

        {#if userType === 'counsellor'}
          <CounsellorSidenav />
        {/if}
      </ul>
    </div>
  </div>
{/if}
