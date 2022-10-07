<script lang="ts">
  // NOTE: much of this code was adapted from supabase's official docs
  // https://supabase.com/docs/guides/with-svelte
  // last accessed: 08/05/2022
  import AvatarCard from '$lib/components/profile/AvatarCard.svelte';
  import supabase from '$lib/supabase';

  let editOn = false;
  let loading = false;


  import type { user } from '@prisma/client';

  export let foundUser: user;

  // TODO: replace with empty avatar image lol, could also do something auto-generated like github?
  let avatarUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6jXtxzJS1d5wG2JYXd0iF9KMuOIMV5P2YHmMz7NKBhXr4jGTSfW29Q102OcJsiEHiMo&usqp=CAU';

  function toggleEdit() {
    editOn = !editOn;
  }


  // because we dont have a patch endpoint so far, we will comment out this functionality
  // retrieve user information from the database and update UI
  // async function getUserInfo() {
  //   try {
  //     loading = true;
  //     const user = supabase.auth.user();

  //     let { data, error, status } = await supabase
  //       .from('user')
  //       .select(
  //         `
  //         fname,
  //         lname,
  //         email,
  //         avatar_url,
  //         user_type:type_id (
  //           name
  //         )
  //       `
  //       )
  //       .eq('email', user.email)
  //       .single();

  //     if (error && status) throw error;

  //     if (data) {
  //       fullName = data.fname + ' ' + data.lname;
  //       email = data.email;
  //       // position = data.user_type.name;
  //       position = user.email;

  //       if (data.avatar_url) {
  //         avatarUrl = data.avatar_url;
  //       }
  //     }
  //   } catch (error) {
  //     // TODO: improve error handling
  //     // alert(error.message);
  //   } finally {
  //     loading = false;
  //   }
  // }

  // // update the user database with edited information
  // async function handleSave() {
  //   try {
  //     loading = true;
  //     const user = supabase.auth.user();

  //     // TODO: FIX THIS, maybe split into to input fields?
  //     let [fname, lname] = fullName.split(' ');

  //     const updates = {
  //       fname: fname,
  //       lname: lname
  //     };

  //     let { error } = await supabase
  //       .from('user')
  //       .update(updates, {
  //         returning: 'minimal'
  //       })
  //       .eq('email', user.email);
  //   } catch (error) {
  //     // TODO: improve error handling
  //     // alert(error.message);
  //   } finally {
  //     editOn = false;
  //     loading = false;
  //   }
  // }

</script>

<div class="my-16 ">
  <h1 class="flex flex-wrap justify-center my-6">Account Management</h1>

  <AvatarCard bind:path={avatarUrl} />

  <div class="flex flex-wrap justify-center">
    <h2 class="text-primary">Position:&nbsp;</h2>
    {#if foundUser.type_id == 1}
      <h2 class="capitalize">{"Admin"}</h2>
    {:else if foundUser.type_id == 2}
      <h2 class="capitalize">{"Supervisor"}</h2>
    {:else} 
      <h2 class="capitalize">{"Counsellor"}</h2>
    {/if}
  </div>
  <div class="flex flex-wrap justify-center">
    <h2 class="text-primary">Email:&nbsp;</h2>
    <h2>{foundUser.email}</h2>
  </div>

  <!-- Could definitely think about refactoring all of these into components as it's just repeated 3 times -->
  <!-- <form
    on:submit|preventDefault={handleSave}
    class="grid place-items-center my-10"
  >
    <div class="grid grid-cols-2 mx-2 my-4 space-x-4">
      <label class="label-input-text">Full Name</label>
      <input
        class="input-text"
        placeholder="Full Name"
        type="text"
        bind:value={foundUser.fname}
        disabled={!editOn}
      />
    </div>
    <div class="grid grid-cols-2 mx-2 my-4 space-x-4">
      <label class="label-input-text">Email</label>
      <input
        class="input-text"
        placeholder="Email"
        type="text"
        bind:value={foundUser.email}
        disabled={!editOn}
      />
    </div>

    <div class="flex flex-row-reverse space-x-4 space-x-reverse mx-2 my-4">
      {#if !editOn}
        <button class="purple-button" on:click={toggleEdit}> Edit </button>
      {:else}
        <button class="purple-button" on:click={toggleEdit} disabled={loading}>
          Cancel
        </button>

        <input
          type="submit"
          class="purple-button"
          on:click={handleSave}
          disabled={loading}
          value={loading ? 'Loading...' : 'Save'}
        />
      {/if}
    </div>
  </form> -->
</div>
