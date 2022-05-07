<script>
  //import { supabase } from '$lib/supabase';

  export let path;
</script>

<div class="pb-2 my-4">
  <div class="grid place-content-center avatar">
    <div class="w-36 rounded-full border-gray-300 border-4">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img src={path} alt="profile-picture" />
    </div>
  </div>
  <div class="text-center">Change profile picture:</div>
  <input
    type="file"
    class="mx-auto my-2 d-block form-control w-25"
    id="profilePicture"
  />
</div>
