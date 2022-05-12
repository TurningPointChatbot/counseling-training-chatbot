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
      alert('Successfully Logged In!');

      location.href = '/account';
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
    <form on:submit|preventDefault={signInWithEmail} class="my-5">
      <!-- Username Section -->
      <div class="row justify-content-center mx-2 my-4">
        <label class="col-md-2 col-md-offset-3 fw-bold" for="username">Username</label>
        <input
          class="col-md-6 col-md-offset-3 w-50 input input-bordered input-sm"
          placeholder="Username"
          type="text"
          bind:value={email}
        />
      </div>

      <!-- Password Section -->
      <div class="row justify-content-center mx-2 my-4">
        <label class="col-md-2 col-md-offset-3 fw-bold" for="password">Password</label>
        <input
          class="col-md-6 col-md-offset-3 w-50 input input-bordered input-sm"
          placeholder="******************"
          type="password"
          bind:value={password}
        />
      </div>

      <!-- Sign In/Forgot Password Section-->
      <div class="grid place-items-center">
        
        <button
          type="submit"
          class="btn btn-primary content-cente"
        >
          Sign In
        </button>
        <a 
          href = "#"
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
    <form on:submit|preventDefault={forgotPassword}>
      <!-- Forgot Password Title -->
      <div class="row justify-content-center mx-2 my-5">
        <b class="text-center">Forgot your password?</b>
      </div>

      <!-- Email Input Section -->
      <div class="row justify-content-center mx-2 my-4">
        <label class="col-md-2 col-md-offset-3 fw-bold" for="username">Email</label>
        <input
          class="col-md-6 col-md-offset-3 w-50 input input-bordered input-sm"
          id = "Email"
          placeholder= "Email"
          type="text"
          bind:value={email}
        />
      </div>

      <!-- Send Email/Back Section -->
      <div class="grid place-items-center">
      <div class="button">
        <button
          type="submit"
          style="margin:5px;"
          class="btn btn-primary" 
        >
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

<!-- Common styling for images and buttons TODO refactor these out and make it to tailwind-->
<!-- <style>
  .image {
    position: relative;
  }
  .button {
    margin: 0;
    position: absolute;
    top: 80%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
</style> -->
