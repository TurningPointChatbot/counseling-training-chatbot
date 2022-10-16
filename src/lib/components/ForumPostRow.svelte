<script lang="ts">
    export let PostSubject : string;
    export let FullPost : string;
    export let Author : string;
    export let ApprovalStatus : string;
</script>

<div class="grid-flow-col gap-8 my-4">
  <div tabindex="0" class="module-row" style="color:black">
    <div class="collapse-title text-lg bg-primary font-medium">
      <div class="grid grid-cols-3 bg-primary gaps-4">
        <div>{PostSubject}</div>
        <div>{Author}</div>
        <div>{Date}</div>
        <div>{ApprovalStatus}</div>
      </div>
    </div>
    <div class="collapse-content">
        <h4>Post Details</h4>
        <div>{FullPost}</div>
        <div class="grid grid-cols-3 bg-primary gaps-4"> 
          <button class="btn btn-primary btn-outline ml-10 mt-10" >
            Approve
          </button>
          <button class="btn btn-primary btn-outline ml-10 mt-10" >
            Disapprove
          </button>
          <input class="input-login"
          id="Reason"
          placeholder="Reason"
          type="text"
          />
        </div>
    </div>
  </div>
</div>
