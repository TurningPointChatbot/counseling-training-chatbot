<script lang="ts">

  function savePassword() {
		console.log("TODO")
	}

</script>

<div class="m-16">

  <h2>Change Password</h2>

  <hr class="my-4"/>

  <div class="flex">
    <input type="password" class="form-control col-2 w-25 m-2" placeholder="New Password"/>
    <input type="password" class="form-control col-2 w-25 m-2" placeholder="Confirm New Password"/>
  </div>
  <div>
    <input type="password" class="form-control col-2 w-25 m-2" placeholder="Current Password"/>
    <button
      class="btn m-2"
      on:click={savePassword}
    >
      Save
    </button>
  </div>

</div>
