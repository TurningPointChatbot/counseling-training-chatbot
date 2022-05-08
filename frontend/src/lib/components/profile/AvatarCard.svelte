<script lang="ts">
  // NOTE: much of this code was adapted from supabase's official docs
  // https://supabase.com/docs/guides/with-svelte
  // last accessed: 08/05/2022

  import { createEventDispatcher } from 'svelte';
  import supabase from '$lib/supabase';

  export let path: string;

  let src: string = path;
  let uploading: boolean;
  let files: FileList;

  const dispatch = createEventDispatcher();

  // FIXME: super hacky line of code that gets image to download on path change
  // primarily when path is first fetched from the database.
  $: {
    path;
    downloadImage();
  }

  /**
   * Retrieves a profile picture's URL and sets it to src.
   */
  async function downloadImage() {
    try {
      const { data, error } = await supabase.storage
        .from('avatars')
        .download(path);

      if (error) throw error;

      src = URL.createObjectURL(data);
    } catch (error) {
      // TODO: handle downloading error
      console.log('Error downloading image: ', error.message);
    }
  }

  /**
   * Uploads an image specified by the file input to supabase storage bucket.
   */
  async function uploadAvatar() {
    try {
      uploading = true;

      if (!files || files.length === 0) {
        throw new Error('You must select an image to upload.');
      }

      const file = files[0];
      const fileExt = file.name.split('.').pop();

      // TODO: possibly a more effective random file name generation
      const fileName = `${Math.random()}.${fileExt}`;

      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      path = filePath;

      await updateUserAvatarURL();

      await downloadImage();

      dispatch('upload');
    } catch (error) {
      // TODO: handle uploading error
      alert(error.message);
    } finally {
      uploading = false;
    }
  }

  async function updateUserAvatarURL() {
    try {
      const user = supabase.auth.user();

      let { error } = await supabase
        .from('user')
        .update(
          {
            avatar_url: path
          },
          {
            returning: 'minimal'
          }
        )
        .eq('email', user.email);

      if (error) throw error;
    } catch (error) {
      // TODO: improve error handling
      alert(error.message);
    }
  }
</script>

<div class="pb-2 my-4">
  <div class="grid place-content-center avatar">
    <div class="w-36 rounded-full border-gray-300 border-4">
      <!-- Below line throws a typescript error but still works as expected... -->
      <img use:downloadImage {src} alt="The user's avatar" />
    </div>
  </div>
  <div class="text-center">Change profile picture:</div>
  <input
    type="file"
    class="mx-auto my-2 d-block form-control w-25"
    id="profilePicture"
    accept="image/*"
    bind:files
    on:change={uploadAvatar}
    disabled={uploading}
  />
</div>
