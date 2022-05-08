<script lang="ts">
  // NOTE: much of this code was adapted from supabase's official docs
  // https://supabase.com/docs/guides/with-svelte
  // last accessed: 08/05/2022
  import AvatarCard from '$lib/components/profile/AvatarCard.svelte';
  import supabase from '$lib/supabase';

  let editOn = false;
  let loading = false;

  let fullName: string = 'John Smith';
  let mobile: string = '0404 333 222';
  let email: string = 'johnsmith@turningpoint.org.au';
  let position: string = 'Junior Counsellor';
  let avatarUrl: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6jXtxzJS1d5wG2JYXd0iF9KMuOIMV5P2YHmMz7NKBhXr4jGTSfW29Q102OcJsiEHiMo&usqp=CAU';

  function toggleEdit() {
    editOn = !editOn;
  }

  // retrieve user information from the database
  async function getUserInfo() {
    try {
      loading = true;
      const user = supabase.auth.user();

      console.log(user.email);

      let { data, error, status } = await supabase
        .from('user')
        .select(
          `
          fname,
          lname,
          email,
          user_type:type_id (
            name
          )
        `
        )
        .eq('email', user.email)
        .single();

      if (error && status) throw error;

      if (data) {
        console.log(data);

        fullName = data.fname + ' ' + data.lname;
        email = data.email;
        position = data.user_type.name;
      }
    } catch (error) {
      // TODO: improve error handling
      alert(error.message);
    } finally {
      loading = false;
    }
  }

  // update the user database with
  async function handleSave() {
    // TODO: implement
  }

  // -----------------------------------DELETE THIS------------------
  async function handleLogin() {
    try {
      let testEmail = 'ENTER HERE';
      let testPassword = 'ENTER HERE';

      const { error } = await supabase.auth.signIn({
        email: testEmail,
        password: testPassword
      });
      if (error) throw error;
      alert('Signed in successfully!');
    } catch (error: any) {
      alert(error.error_description || error.message);
    }
  }
  //----------------------------------------------------------------------
</script>

<div class="m-16">
  <h1 class="m-2">Account Management</h1>

  <hr />

  <AvatarCard path={avatarUrl} />

  <hr />

  <!-- Could definitely think about refactoring all of these into components as it's just repeated 3 times -->
  <form use:getUserInfo on:submit|preventDefault={handleSave}>
    <div class="row justify-content-center mx-2 my-4">
      <p class="col-md-2 col-md-offset-3 fw-bold">Full Name</p>
      <input
        class="col-md-6 col-md-offset-3 w-50"
        placeholder="Full Name"
        type="text"
        bind:value={fullName}
        disabled={!editOn}
      />
    </div>
    <div class="row justify-content-center mx-2 my-4">
      <p class="col-md-2 col-md-offset-3 fw-bold">Mobile</p>
      <input
        class="col-md-6 col-md-offset-3 w-50"
        placeholder="mobile"
        type="text"
        bind:value={mobile}
        disabled={!editOn}
      />
    </div>
    <div class="row justify-content-center mx-2 my-4">
      <p class="col-md-2 col-md-offset-3 fw-bold">Email</p>
      <input
        class="col-md-6 col-md-offset-3 w-50"
        placeholder="email"
        type="text"
        bind:value={email}
        disabled={!editOn}
      />
    </div>
    <div class="row justify-content-center mx-2 my-4">
      <p class="col-md-2 col-md-offset-3 fw-bold">Position</p>
      <p class="col-md-6 col-md-offset-3">{position}</p>
    </div>

    <div class="flex flex-row-reverse space-x-4 space-x-reverse">
      {#if !editOn}
        <button class="btn" on:click={toggleEdit}> Edit </button>
      {:else}
        <button class="btn" on:click={toggleEdit} disabled={loading}>
          Cancel
        </button>

        <input
          type="submit"
          class="btn"
          on:click={handleSave}
          disabled={loading}
          value={loading ? 'Loading...' : 'Save'}
        />
      {/if}
    </div>
  </form>
  <hr />
</div>

<!-- TODO: DELETE -->
<button on:click={handleLogin}> Login </button>
