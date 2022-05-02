<script lang="ts">
  import { InputGroup, InputGroupText, Input, Button } from 'sveltestrap/src';

  let editOn = false;

  function toggleEdit() {
		editOn = !editOn;
	}
</script>

<div class="content">
  <h2>Account Management</h2>

  <hr/>

  <div class="row justify-content-center mx-2 my-4">
    <p class="col-md-2 col-md-offset-3 fw-bold">Full Name</p>
    {#if !editOn}
      <p class="col-md-6 col-md-offset-3">John Smith</p>
    {/if}
    {#if editOn}
      <Input class="col-md-6 col-md-offset-3 w-50" placeholder="username" /> 
    {/if}  
  </div>
  <div class="row justify-content-center mx-2 my-4">
    <p class="col-md-2 col-md-offset-3 fw-bold">Mobile</p>
    {#if !editOn}
    <p class="col-md-6 col-md-offset-3">0404 333 222</p>
    {/if}
    {#if editOn}
      <Input class="col-md-6 col-md-offset-3 w-50" placeholder="mobile" /> 
    {/if}  

  </div>
  <div class="row justify-content-center mx-2 my-4">
    <p class="col-md-2 col-md-offset-3 fw-bold">Email</p>
    {#if !editOn}
    <p class="col-md-6 col-md-offset-3">johnsmith@turningpoint.org.au</p>
    {/if}
    {#if editOn}
      <Input class="col-md-6 col-md-offset-3 w-50" placeholder="email" /> 
    {/if}  
  </div>
  <div class="row justify-content-center mx-2 my-4">
    <p class="col-md-2 col-md-offset-3 fw-bold">Position</p>
    <p class="col-md-6 col-md-offset-3">Junior Counsellor</p>
  </div>

  <div class="row justify-content-end" >
    {#if !editOn}
    <Button class="col-1 m-2" on:click={toggleEdit}>
      Edit
    </Button>
    {/if}

    {#if editOn}
    <Button class="col-1 m-2">
      Save
    </Button>
    {/if}  

    {#if editOn}
    <Button class="col-1 m-2" on:click={toggleEdit}>
      Cancel
    </Button>
    {/if}  
    
  </div>

  <hr/>


</div>

<style>
  .content {
    margin: 50px;
  }
</style>
