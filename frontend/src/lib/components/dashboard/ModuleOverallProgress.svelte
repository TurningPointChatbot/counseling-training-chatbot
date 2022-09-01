<script lang="ts">
  import TimeRemaining from './TimeRemaining.svelte';
  import ModProgress from './ModuleProgress.svelte';

  export let totalModules = 5;
  export let completedModules = 0;
  export let completedHours = 15;
  export let targetHours = 100;
</script>

<div class="card bg-base-100 shadow-xl">
  <!-- Overall Progress Title-->
  <div>
    <h2 class="h2-counsellor-dashboard">Overall Progress</h2>
  </div>
  <hr />
  <div class="grid grid-row gap-3 w-full">
    <!-- Module Completion Section -->
    <div class="grid grid-cols-20 gap-3 w-full">
        <ModProgress total={totalModules} completed={completedModules} />
    </div>
    <!-- Target Training Time Section -->
    <div class="grid grid-cols-20 gap-3 w-full">
        <TimeRemaining time={completedHours} totalTime={targetHours} />
    </div>
  </div>
</div>
