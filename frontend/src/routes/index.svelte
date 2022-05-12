<!--This is ariel's and wil's main page code-->
<script>
  import ModuleBigCard from "../lib/components/moduleBigCard.svelte";
  import ModuleAssignedModuleCard from "../lib/components/moduleAssignedModuleCard.svelte";
</script>

<svelte:head>
  <title>Trial</title>
</svelte:head>

<ModuleAssignedModuleCard moduleAssignedModuleCard = {ModuleAssignedModuleCard}/>
<ModuleBigCard moduleBigCard = {ModuleBigCard}/> 