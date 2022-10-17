<script lang="ts">
  // NOTE: much of this code was adapted from supabase's official docs
  // https://supabase.com/docs/guides/with-svelte
  // last accessed: 08/05/2022
  import AvatarCard from '$lib/components/profile/AvatarCard.svelte';
  import type {user_POST} from "../../post_types";

  let editOn = false;
  let loading = false;

  export let fullName;
  export let position;
  export let foundUser;

  let avatarUrl = 'https://placeimg.com/80/80/people';

  fullName = foundUser['fname'] + ' ' + foundUser['lname'];
  if (foundUser['avatar_url'] == null) {
    foundUser['avatar_url'] = avatarUrl;
  }

  const positions = {
    1 : 'admin',
    2 : 'counsellor',
    3: 'base'
  }

  position = positions[foundUser['type_id']]

  function toggleEdit() {
    editOn = !editOn;
  }

  /**
   * Retrieve user information from the database and update UI
   */
  async function handleSave () {

    let [fname, lname] = fullName.split(' ');

    try {
      loading = true;

      const bodyContent : user_POST = {
        'id' : foundUser['id'],
        'fname' : fname,
        'lname' : lname,
        'email' : foundUser['email'],
        'avatar_url' : foundUser['avatar_url']
      };

      console.log(JSON.stringify(bodyContent));

      const user_result = await fetch('/api/users/modify', {
        method: 'POST',
        body: JSON.stringify(bodyContent)
        });

      console.log(user_result)

      //return await user_result.json();

    } catch (error) {
      // TODO: improve error handling
      alert(error.message);
    } finally {
      editOn = false;
      loading = false;
    }
  }

</script>

<div class="my-16">
  <h1 class="my-6">Account Management</h1>

  <div class="flex flex-wrap">
    <h2 class="text-primary">Position:&nbsp;</h2>
    <h2 class="capitalize"></h2>
    <h3 style="text-transform: capitalize;">{position}</h3>
  </div>
  <div class="flex flex-wrap">
    <h3 class="text-primary">Email:&nbsp;</h3>
    <h3>{foundUser.email}</h3>
  </div>

  <AvatarCard bind:path={foundUser['avatar_url']} />

  <!-- Could definitely think about refactoring all of these into components as it's just repeated 3 times -->
  <form
    on:submit|preventDefault={handleSave}
    class="grid place-items-center my-10"
  >
    <div class="grid grid-cols-2 mx-2 my-4 space-x-4">
      <label class="label-input-text">Full Name</label>
      <input
        class="input-text"
        id="input-fullName"
        placeholder="Full Name"
        type="text"
        bind:value={fullName}
        disabled={!editOn}
      />
    </div>
    <div class="grid grid-cols-2 mx-2 my-4 space-x-4">
      <label class="label-input-text">Email</label>
      <input
        class="input-text"
        placeholder="Email"
        type="text"
        bind:value={foundUser['email']}
        disabled={!editOn}
      />
    </div>
    <div class="grid grid-cols-2 mx-2 my-4 space-x-4">
      <label class="label-input-text" hidden={editOn}>Position</label>
      <input
        class="input-text"
        placeholder="Position"
        type="text"
        bind:value={position}
        disabled={true}
        hidden={editOn}
        style="text-transform: capitalize;"
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
  </form>
</div>
