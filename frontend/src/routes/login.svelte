<script lang="ts">
  import { InputGroup, InputGroupText, Input, Button } from 'sveltestrap/src';
  
  let editOn = false;

  function toggleEdit() {		
    editOn = !editOn;
  }
  
</script>
<div class="content">
    <div style="top:20px;" class="image">
        <center><img src="Turning point training portal.png" alt="Turning point training portal" width="400"  
        height="200" ></center>
    </div>

    <div class="row justify-content-center mx-2 my-5">
        {#if editOn}
        <p class="col-md-2 col-md-offset-3 fw-bold">Forgot your password?</p>
        {/if}
        {#if !editOn}
          <Input class="col-md-6 col-md-offset-3 w-50" placeholder="Username" /> 
        {/if} 
    </div>
    <div class="row justify-content-center mx-2 my-5">
      {#if editOn}
        <Input class="col-md-6 col-md-offset-3 w-50" placeholder="Email" /> 
      {/if} 
      {#if !editOn}
        <Input class="col-md-6 col-md-offset-3 w-50" placeholder="Password" /> 
      {/if}  
    
    </div>

    <div class="button" >
     {#if !editOn}
        <Button class="button" on:click={toggleEdit}>
        Sign In
        </Button>
        {/if}

        {#if editOn}
        <Button class="button">
        Send email
        </Button>
        {/if} 
    
    </div>
</div>
<style>
    .image {
        position: relative;
    }
    .button {
       top:60%;
       left:45%;
       position: fixed;
       }


  </style>