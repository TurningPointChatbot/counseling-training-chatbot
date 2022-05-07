<script lang="ts">
  let editOn = false;

  function toggleEdit() {
    editOn = !editOn;
  }
</script>

<div class="m-16">
  <h1 class="m-2">Account Management</h1>

  <hr />

  <div class="pb-2 my-4">
    <div class="grid place-content-center avatar">
      <div class="w-36 rounded-full border-gray-300 border-4">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6jXtxzJS1d5wG2JYXd0iF9KMuOIMV5P2YHmMz7NKBhXr4jGTSfW29Q102OcJsiEHiMo&usqp=CAU"
          alt="profile-picture"
        />
      </div>
    </div>
    {#if editOn}
      <div class="text-center">Change profile picture:</div>
      <input
        type="file"
        class="mx-auto my-2 d-block form-control w-25"
        id="profilePicture"
      />
    {/if}
  </div>

  <hr />

  <div class="row justify-content-center mx-2 my-4">
    <p class="col-md-2 col-md-offset-3 fw-bold">Full Name</p>
    {#if !editOn}
      <p class="col-md-6 col-md-offset-3">John Smith</p>
    {/if}
    {#if editOn}
      <input class="col-md-6 col-md-offset-3 w-50" placeholder="username" />
    {/if}
  </div>
  <div class="row justify-content-center mx-2 my-4">
    <p class="col-md-2 col-md-offset-3 fw-bold">Mobile</p>
    {#if !editOn}
      <p class="col-md-6 col-md-offset-3">0404 333 222</p>
    {/if}
    {#if editOn}
      <input class="col-md-6 col-md-offset-3 w-50" placeholder="mobile" />
    {/if}
  </div>
  <div class="row justify-content-center mx-2 my-4">
    <p class="col-md-2 col-md-offset-3 fw-bold">Email</p>
    {#if !editOn}
      <p class="col-md-6 col-md-offset-3">johnsmith@turningpoint.org.au</p>
    {/if}
    {#if editOn}
      <input class="col-md-6 col-md-offset-3 w-50" placeholder="email" />
    {/if}
  </div>
  <div class="row justify-content-center mx-2 my-4">
    <p class="col-md-2 col-md-offset-3 fw-bold">Position</p>
    <p class="col-md-6 col-md-offset-3">Junior Counsellor</p>
  </div>

  <div class="flex flex-row-reverse space-x-4 space-x-reverse">
    {#if !editOn}
      <button class="btn" on:click={toggleEdit}> Edit </button>
    {/if}

    {#if editOn}
      <button class="btn" on:click={toggleEdit}> Cancel </button>

      {#if editOn}
        <button class="btn"> Save </button>
      {/if}
    {/if}
  </div>

  <hr />
</div>
