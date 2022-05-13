<script lang="ts">
  import ModuleCard from './ModuleCard.svelte';
  import ModuleCircleButton from './ModuleCircleButton.svelte';
</script>

<div class="card bg-base-100 shadow-xl">
  <div>
    <h2 class="card-title p-2 text-3xl self-center align-center bg-base-300">
      Modules Completed
    </h2>
  </div>
  <hr class="bg-base-400" />
  <div class="card-body grid grid-cols-10 gap-3 w-full">
    <div class="col-span-3"><ModuleCard /></div>
    <div class="col-span-3"><ModuleCard /></div>
    <div class="col-span-3"><ModuleCard /></div>
    <div class="col-span-1 self-center"><ModuleCircleButton /></div>
  </div>
</div>
