<script lang="ts">
  import { session, page } from '$app/stores';
  import supabaseClient from '$lib/supabase';
  import { SupaAuthHelper } from '@supabase/auth-helpers-svelte';
  import '../app.css';
  import AdminSidenav from '$lib/components/sidenav/AdminSidenav.svelte';
  import CounsellorSidenav from '$lib/components/sidenav/CounsellorSidenav.svelte';

  let avatarUrl = 'https://picsum.photos/id/231/300';// 'https://placeimg.com/80/80/people';
  let userType = 'counsellor' // Hardcoded placeholder

  // Supabase Client has to be replaced with API calls. This was messing up Navigation
  // TODO: Migrate to API calls - Linton

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
  /* async function getUserInfo() {
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

  getUserInfo(); */
</script>

{#if $page.url.pathname === '/login' || $page.url.pathname === '/'}
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
                <img alt="profile" src={avatarUrl} />
              </div>
            </button>
            <ul
              tabindex="0"
              class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li><a href={'/profile/account'}>Profile</a></li>
              <li on:click={signOut}><a href="/login">Logout</a></li>
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
