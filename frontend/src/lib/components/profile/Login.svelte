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

      if (error) throw error;

      if (email === 'admin1@test.com') {
        location.href = 'admin/account';
      } else {
        location.href = 'counsellor/account';
      }
      
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
        <label for="username">Username</label>
        <input id="username"
          placeholder="Username"
          type="text"
          bind:value={email}
        />
      </div>

      <!-- Password Section -->
      <div class="flex justify-content-center mx-2 my-4 space-x-4">
        <label for="password">Password</label>
        <input id="password"
          placeholder="******************"
          type="password"
          bind:value={password}
        />
      </div>

      <!-- Sign In/Forgot Password Section-->
      <div class="grid place-items-center my-5">
        <button
          on:click={signInWithEmail}>
          Sign In
        </button>
        <button
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
