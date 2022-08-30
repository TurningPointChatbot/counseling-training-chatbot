<script lang="ts">
  import ModuleCard from './ModuleCard.svelte';
  import ModuleCircleButton from './ModuleCircleButton.svelte';
</script>

<div class="card bg-base-100 shadow-xl">
  <!-- Modules Completed Title -->
  <div>
    <h3 class="h2-counsellor-dashboard">
      Modules Completed
    </h3>
  </div>
  <hr/>
  <div class="card-body grid grid-cols-10 gap-3 w-full">
    <!-- Module Card Examples -->
    <div class="col-span-3"><ModuleCard imgUrl="https://images.unsplash.com/photo-1516967124798-10656f7dca28?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=225" moduleName="Module 101: Empathy"/>
      <button class="export_btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
        <span>Download</span>
      </button>
    </div>
    <div class="col-span-3"><ModuleCard imgUrl="https://images.unsplash.com/photo-1584515933487-779824d29309?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=225" moduleName="Module 102: Treatment Options"/>
      <button class="export_btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
        <span>Download</span>
      </button>
    </div>
    <div class="col-span-3"><ModuleCard imgUrl="https://images.unsplash.com/photo-1437418747212-8d9709afab22?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=225" moduleName="Module 103: Alcohol & drugs"/>
      <button class="export_btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
        <span>Download</span>
      </button>
    </div>
    <!-- Module Circle Button Section -->
    <div class="col-span-1 self-center"><ModuleCircleButton /></div>
  </div>
</div>

<style>
  .export_btn{
    padding-left: 6.5rem;
  }
</style>