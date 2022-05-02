<script lang="ts">
  import { Input, Button } from 'sveltestrap/src';

  function savePassword() {
		console.log("TODO")
	}

</script>

<div class="content">

  <h2>Change Password</h2>

  <hr class="my-4"/>

  <div class="row">
    <Input type="password" class="form-control col-2 w-25 m-2" placeholder="New Password"/>
    <Input type="password" class="form-control col-2 w-25 m-2" placeholder="Confirm New Password"/>
  </div>
  <div class="row">
    <Input type="password" class="form-control col-2 w-25 m-2" placeholder="Current Password"/>
    <Button class="col-1 m-2" on:click={savePassword}>
      Save
    </Button>
  </div>

</div>

<style>
  .content {
    margin: 50px;
  }
</style>
