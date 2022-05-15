<script lang="ts">
  import TimeRemaining from './TimeRemaining.svelte';
  import ModProgress from './ModuleProgress.svelte';

  export let totalModules = 1;
  export let completedModules = 0;
</script>

<div class="card bg-base-100 shadow-xl">
  <div>
    <h2 class="card-title p-2 text-3xl self-center align-center bg-base-300">
      Overall Progress
    </h2>
  </div>
  <hr class="bg-base-400" />
  <div class="card-body grid grid-row gap-3 w-full">
    <div class="card-body grid grid-cols-20 gap-3 w-full">
      <div class="row"><ModProgress total={totalModules} completed={completedModules}/></div>
    </div>
    <div class="card-body grid grid-cols-20 gap-3 w-full">
      <div class="row"><TimeRemaining /></div>
    </div>
  </div>
</div>
