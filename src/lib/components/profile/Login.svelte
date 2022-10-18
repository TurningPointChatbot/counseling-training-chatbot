<script lang="ts">

  let editOn = false;

  function toggleEdit() {
    editOn = !editOn;
  }

  import { session, page } from '$app/stores';
  import supabase from '$lib/supabase';
  let loading = false;
  let email;
  let password;

  /**
   * Sign In Function
   */

  const signInWithEmail = async () => {
    try {
      loading = true;
      const { user, error } = await supabase.auth.signIn({ email, password });

      if (error) throw error;

      while ($session.user == null){
        await delay(300);
      }

      location.href = '/profile/account';
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      loading = false;
    }
  };

  /**
   * Sign Out Function
   */
  async function signOut() {
    try {
      loading = true;
      const { error } = await supabase.auth.signOut();

      if (error) throw error;
      alert('Successfully Logged Out!');
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      loading = false;
    }
  };

  /**
   *  Forgot Password Function
   */
  async function forgotPassword() {
    try {
      loading = true;
      const { error } = await supabase.auth.api.resetPasswordForEmail(email);

      if (error) throw error;
      alert('Successfully Sent Email!');
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      loading = false;
    }
  }

  function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
</script>

<div class="content">
  <!-- Turning Point Title Image -->
  <div style="top:20px;" class="grid place-content-center avatar">
    <img
      src="Turning point training portal.png"
      alt="Turning point training portal"
      width="400"
      height="200"
      class="center"
    />
  </div>

  <!-- Start of Login Form -->
  {#if !editOn}
    <form
      on:submit|preventDefault={signInWithEmail}
      class="grid place-items-center my-10"
    >
      <!-- Username Section -->
      <div class="flex justify-content-center mx-2 my-2 space-x-4">
        <label for="username" class="font-bold">Username</label>
        <input class="input-login"
          id="username"
          placeholder="Username"
          type="text"
          bind:value={email}
        />
      </div>

      <!-- Password Section -->
      <div class="flex justify-content-center mx-2 my-2 space-x-4">
        <label for="password" class="font-bold">Password</label>
        <input class="input-login"
          id="password"
          placeholder="******************"
          type="password"
          bind:value={password}
        />
      </div>

      <!-- Sign In/Forgot Password Section-->
      <div class="grid place-items-center my-2">
        <button class="m-1 purple-button"
          on:click={signInWithEmail}>
          Sign In
        </button>
        <button class="m-1 purple-button"
          on:click={toggleEdit}>
          Forgot Password?
        </button>
      </div>

      <!-- End of Form -->
    </form>
  {/if}

  <!-- Start of Forgot Password Form -->
  {#if editOn}
    <form
      on:submit|preventDefault={forgotPassword}
      class="grid place-items-center my-10"
    >
      <!-- Forgot Password Title -->
      <div class="title-header">
        <b class="text-center">Forgot your password?</b>
      </div>

      <!-- Email Input Section -->
      <div class="title-header">
        <label class="font-bold" for="username">Email</label>
        <input
          class="input-login"
          id="Email"
          placeholder="Email"
          type="text"
          bind:value={email}
        />
      </div>

      <!-- Send Email/Back Section -->
      <div class="grid place-items-center">
        <div class="button">
          <button class="m-1 purple-button" on:click={forgotPassword}>
            Send email
          </button>
          <button class="m-1 purple-button" on:click={toggleEdit}>
            Back
          </button>
        </div>
      </div>

      <!-- End of Form -->
    </form>
  {/if}
</div>

<!-- Reference-->
<!--input type="submit" class='button block' value={loading ? "Loading" : "Send Recovery Email"} disabled={loading} /-->
