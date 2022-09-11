<script>
  import '../app.css';
  import supabase from '$lib/supabase';
  let loading = false;
  /**
   * Sign Out Function
   */
  async function signOut() {
    try {
      loading = true;
      const { error } = await supabase.auth.signOut();

      if (error) throw error;
      location.href = '/';
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      loading = false;
    }
  }
</script>

<div class="moduleNav">
  <div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" hidden />
    <!-- Profile Section-->
    <div class="drawer-content">
      <div class="navbar bg-primary">
        <div class="flex-1">
          <label for="my-drawer-3" class="navbar-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              /></svg
            >
          </label>
        </div>
        <div class="flex-none gap-2">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="profile-button">
              <div class="w-10 rounded-full">
                <img
                  alt="profile"
                  src="/counsellor-dp.png"
                />
              </div>
            </label>
            <ul tabindex="0" class="ul-profile">
              <li>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a href="/counsellor/account" class="inline-block">
                  <p>Counsellor</p>
                  <b>David Counsellor</b>
                  </a>
              </li>
              <!-- svelte-ignore a11y-missing-attribute -->
              <li><a on:click|once={signOut}>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="px-16 h-full">
        <slot />
      </div>
    </div>
    <!-- Navbar Section-->
    <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay" />
      <ul class="ul-navbar">
        <li>
          <a href="/counsellor/dashboard" rel="prefetch" class="a-navbar"
            >Dashboard</a
          >
        </li>
        <li>
          <a
            href="/modules"
            rel="prefetch"
            class="a-navbar">Training Modules</a
          >
        </li>
      </ul>
    </div>
  </div>
</div>
