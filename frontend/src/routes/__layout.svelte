<script lang="ts">
  import { session } from '$app/stores';
  import supabaseClient from '$lib/supabase';
  import { SupaAuthHelper } from '@supabase/auth-helpers-svelte';
  import '../app.css';
  import { page } from '$app/stores'
  import supabase from '$lib/supabase';

  /**
   * Sign Out Function
   */
  async function signOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      alert(error.error_description || error.message);
    }
  }
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div>
        <div class="flex-1 pb-1">
          <img class="max-h-12" alt="Turning point logo" src="/turning-point-logo.svg" />
        </div>
        <div class="flex-none">
          <div class="dropdown dropdown-end">
            <button tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img alt="profile" src="https://placeimg.com/80/80/people" />
              </div>
            </button>
            <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li><a href="/profile/account">Profile</a></li>
              <li on:click={signOut}><a href="login">Logout</a></li>
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
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <!-- Sidebar content here -->
        <li><a>Dashboard</a></li>
        <li><a>Counsellors</a></li>
        <li><a>Training Modules</a></li>
      </ul>
    </div>
  </div>
{/if}