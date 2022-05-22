<script lang="ts">
  let editOn = false;

  function toggleEdit() {
    editOn = !editOn;
  }

  import supabase from '$lib/supabase';
  let loading = false;
  let email, password;

  /**
   * Sign In Function
   */
  const signInWithEmail = async () => {
    try {
      loading = true;
      const { user, error } = await supabase.auth.signIn({ email, password });
      console.log(user);
      if (error) throw error;
      alert('Successfully Logged In!');

      location.href = '/modules';
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
  }

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
      <div class="flex justify-content-center mx-2 my-4 space-x-4">
        <label class="font-bold" for="username">Username</label>
        <input
          class="w-50 input input-bordered input-sm"
          placeholder="Username"
          type="text"
          bind:value={email}
        />
      </div>

      <!-- Password Section -->
      <div class="flex justify-content-center mx-2 my-4 space-x-4">
        <label class="font-bold" for="password">Password</label>
        <input
          class="w-50 input input-bordered input-sm"
          placeholder="******************"
          type="password"
          bind:value={password}
        />
      </div>

      <!-- Sign In/Forgot Password Section-->
      <div class="grid place-items-center my-5">
        <button type="submit" class="btn btn-primary content-cente">
          Sign In
        </button>
        <a
          href="#"
          class="font-medium text-indigo-600 hover:text-indigo-500"
          on:click={toggleEdit}
        >
          Forgot Password?
        </a>
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
      <div class="flex justify-content-center mx-2 my-4 space-x-4">
        <b class="text-center">Forgot your password?</b>
      </div>

      <!-- Email Input Section -->
      <div class="flex justify-content-center mx-2 my-4 space-x-4">
        <label class="font-bold" for="username">Email</label>
        <input
          class="w-50 input input-bordered input-sm"
          id="Email"
          placeholder="Email"
          type="text"
          bind:value={email}
        />
      </div>

      <!-- Send Email/Back Section -->
      <div class="grid place-items-center">
        <div class="button">
          <button type="submit" style="margin:5px;" class="btn btn-primary">
            Send email
          </button>
          <button
            style="margin:5px;"
            class="btn btn-primary"
            on:click={toggleEdit}
          >
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
