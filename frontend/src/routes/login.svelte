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
  <div style="top:20px;" class="image">
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
    <form on:submit|preventDefault={signInWithEmail}>
      <!-- Username Section -->
      <div class="row justify-content-center mx-2 my-5">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Username
        </label>
        <input
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded max-w-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="username"
          type="text"
          placeholder="Username"
          bind:value={email}
        />
      </div>

      <!-- Password Section -->
      <div class="row justify-content-center mx-2 my-5">
        <label class="text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded max-w-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="password"
          type="password"
          placeholder="******************"
          bind:value={password}
        />
      </div>

      <!-- Sign In/Forgot Password Section-->
      <div class="button">
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Sign In
        </button>
        <button
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          on:click={toggleEdit}
        >
          Forgot Password?
        </button>
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
      <div class="row justify-content-center mx-2 my-5">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Email:
        </label>
        <input
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded max-w-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="Email"
          type="text"
          placeholder="Email"
          bind:value={email}
        />
      </div>

      <!-- Send Email/Back Section -->
      <div class="button">
        <button
          type="submit"
          style="margin:5px;"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Send email
        </button>
        <button
          style="margin:5px;"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          on:click={toggleEdit}
        >
          Back
        </button>
      </div>

      <!-- End of Form -->
    </form>
  {/if}

  <!-- Username Section -->
  <!--
  <div class="row justify-content-center mx-2 my-5">
    {#if editOn}
      <b class="text-center">Forgot your password?</b>
    {/if}

    {#if !editOn}
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded max-w-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="username"
        type="text"
        placeholder="Username"
      />
    {/if}
  </div>
  -->

  <!-- Password/Email Section -->
  <!--
  <div class="row justify-content-center mx-2 my-5">
    {#if editOn}
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Email:
      </label>
      <input
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded max-w-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="Email"
        type="text"
        placeholder="Email"
      />
    {/if}
    {#if !editOn}
      <label class="text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded max-w-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="password"
        type="password"
        placeholder="******************"
      />
    {/if}
  </div>
  -->

  <!-- Sign In/Forgot Password Section -->
  <!--
  <div class="button">
    {#if !editOn}
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Sign In
      </button>
      {#if !editOn}
        <a
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
          on:click={toggleEdit}
        >
          Forgot Password?
        </a>
      {/if}
    {/if}

    {#if editOn}
      <button
        style="margin:5px;"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Send email
      </button>
      <button
        style="margin:5px;"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        on:click={toggleEdit}
      >
        Back
      </button>
    {/if}
  </div>
  -->
</div>



<!-- Reference-->
<!--input type="submit" class='button block' value={loading ? "Loading" : "Send Recovery Email"} disabled={loading} /-->

<!-- Common styling for images and buttons-->
<style>
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
</style>
