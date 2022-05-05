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
        <b class="text-center">Forgot your password?</b>
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

    <div class="Forgot_link" style="position: relative">
      {#if !editOn}
      <a href="" style="float: right; margin-right: 5px;position: absolute;top: -30px;right: 25%;" on:click={toggleEdit}>Forgot your password?</a>
      {/if}
    </div>

    <div class="button">
     {#if !editOn}
        <Button class="button">
        Sign In
        </Button>
      {/if}

        {#if editOn}
        <Button style="margin:5px;" class="button">
        Send email
        </Button>
        <Button style="margin:5px;" class="button" on:click={toggleEdit}>
        Back
        </Button>
        {/if} 
    
    </div>
</div>
<style>
    .image {
        position: relative;
    }
    .button {

      margin: 0;
      position: absolute;
      top: 60%;
      left: 50%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
       
       }
  


  </style>