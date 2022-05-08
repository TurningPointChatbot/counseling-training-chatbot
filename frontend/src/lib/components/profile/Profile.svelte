<script lang="ts">
  // NOTE: much of this code was adapted from supabase's official docs
  // https://supabase.com/docs/guides/with-svelte
  // last accessed: 08/05/2022
  import AvatarCard from '$lib/components/profile/AvatarCard.svelte';

  let editOn = false;

  let fullName: string = 'John Smith';
  let mobile: string = '0404 333 222';
  let email: string = 'johnsmith@turningpoint.org.au';
  let position: string = 'Junior Counsellor';

  function toggleEdit() {
    editOn = !editOn;
  }

  async function getUserInfo() {
    try {
    } catch (error) {}
  }
</script>

<div class="m-16">
  <h1 class="m-2">Account Management</h1>

  <hr />

  <AvatarCard
    path={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6jXtxzJS1d5wG2JYXd0iF9KMuOIMV5P2YHmMz7NKBhXr4jGTSfW29Q102OcJsiEHiMo&usqp=CAU'}
  />

  <hr />

  <div class="row justify-content-center mx-2 my-4">
    <p class="col-md-2 col-md-offset-3 fw-bold">Full Name</p>
    {#if !editOn}
      <p class="col-md-6 col-md-offset-3">{fullName}</p>
    {/if}
    {#if editOn}
      <input
        class="col-md-6 col-md-offset-3 w-50"
        placeholder="Full Name"
        type="text"
        bind:value={fullName}
      />
    {/if}
  </div>
  <div class="row justify-content-center mx-2 my-4">
    <p class="col-md-2 col-md-offset-3 fw-bold">Mobile</p>
    {#if !editOn}
      <p class="col-md-6 col-md-offset-3">{mobile}</p>
    {/if}
    {#if editOn}
      <input
        class="col-md-6 col-md-offset-3 w-50"
        placeholder="mobile"
        type="text"
        bind:value={mobile}
      />
    {/if}
  </div>
  <div class="row justify-content-center mx-2 my-4">
    <p class="col-md-2 col-md-offset-3 fw-bold">Email</p>
    {#if !editOn}
      <p class="col-md-6 col-md-offset-3">{email}</p>
    {/if}
    {#if editOn}
      <input
        class="col-md-6 col-md-offset-3 w-50"
        placeholder="email"
        type="text"
        bind:value={email}
      />
    {/if}
  </div>
  <div class="row justify-content-center mx-2 my-4">
    <p class="col-md-2 col-md-offset-3 fw-bold">Position</p>
    <p class="col-md-6 col-md-offset-3">{position}</p>
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
