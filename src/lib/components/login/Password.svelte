<script lang="ts">
  function savePassword() {
    console.log('TODO');
  }
</script>

<div class="m-16">
  <h1>Change Password</h1>

  <hr class="my-4" />

  <div class="flex space-x-4">
      <input type="password" placeholder="New Password"/>
      <input type="password" placeholder="Confirm New Password"/>
  </div>

  <div class="my-4">
    <input
      type="password"
      placeholder="Current Password"
    />
  </div>

  <button on:click={savePassword}> Save </button>
</div>
