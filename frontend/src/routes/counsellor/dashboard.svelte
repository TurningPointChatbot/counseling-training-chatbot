<!--This is ariel's, wil's and sam's main page code-->
<script>
  import ModuleBigCard from '$lib/components/moduleBigCard.svelte';
  import ModuleAssignedModuleCard from '$lib/components/moduleAssignedModuleCard.svelte';
  import ModuleOverallProgress from '$lib/components/moduleOverallProgress.svelte';
</script>

<svelte:head>
  <title>Trial</title>
</svelte:head>

<!--Navaneeth's Widget-->
<h1 class="m-8">Dashboard</h1>
<div class="grid grid-cols-2 gap-4 m-8">
  <div class="..."><ModuleOverallProgress /></div>
  <div class="..."><ModuleAssignedModuleCard /></div>
  <div class="col-span-2 ..."><ModuleBigCard /></div>
</div>
