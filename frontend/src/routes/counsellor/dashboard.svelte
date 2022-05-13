<!--This is ariel's, wil's and sam's main page code-->
<script>
  import ModuleBigCard from '$lib/components/dashboard/ModuleBigCard.svelte';
  import ModuleAssignedModuleCard from '$lib/components/dashboard/ModuleAssignedModuleCard.svelte';
  import ModuleOverallProgress from '$lib/components/dashboard/ModuleOverallProgress.svelte';
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
