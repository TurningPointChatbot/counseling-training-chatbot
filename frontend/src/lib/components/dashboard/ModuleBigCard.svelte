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
    <div class="col-span-3"><ModuleCard imgUrl="https://images.unsplash.com/photo-1516967124798-10656f7dca28?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=225" moduleName="Module 101: Empathy"/></div>
    <div class="col-span-3"><ModuleCard imgUrl="https://images.unsplash.com/photo-1584515933487-779824d29309?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=225" moduleName="Module 102: Treatment Options"/></div>
    <div class="col-span-3"><ModuleCard imgUrl="https://images.unsplash.com/photo-1437418747212-8d9709afab22?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=225" moduleName="Module 103: Alcohol & drugs"/></div>
    <!-- Module Circle Button Section -->
    <div class="col-span-1 self-center"><ModuleCircleButton /></div>
  </div>
</div>
