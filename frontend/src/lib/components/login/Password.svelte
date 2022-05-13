<script lang="ts">
  function savePassword() {
    console.log('TODO');
  }
</script>

<div class="m-16">
  <h1>Change Password</h1>

  <hr class="my-4" />

  <div class="flex space-x-4">
    <input
      type="password"
      class="w-50 input input-bordered input-sm"
      placeholder="New Password"
    />
    <input
      type="password"
      class="w-50 input input-bordered input-sm"
      placeholder="Confirm New Password"
    />
  </div>

  <div class="my-4">
    <input
      type="password"
      class="w-50 input input-bordered input-sm"
      placeholder="Current Password"
    />
  </div>

  <button class="btn btn-primary m-2" on:click={savePassword}> Save </button>
</div>
