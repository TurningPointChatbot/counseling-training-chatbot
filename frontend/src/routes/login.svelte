<script lang="ts">
  let editOn = false;

  function toggleEdit() {
    editOn = !editOn;
  }
</script>

<div class="content">
  <div style="top:20px;" class="image">
    <center
      ><img
        src="Turning point training portal.png"
        alt="Turning point training portal"
        width="400"
        height="200"
      /></center
    >
  </div>

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
  <div class="button">
    {#if !editOn}
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
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
</div>

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
</style>
