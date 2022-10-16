<script context="module" lang="ts">

  export async function load({ fetch}) {
    const url = `/api/chatbot-assignments/user_id=1`;
    const response = await fetch(url);
    console.log("hi");
    return {
      status: response.status,
      props: {
        assignments: response.ok && (await response.json())
      }
    };
  }
</script>

<script lang="ts">
  import ModuleRow from '$lib/components/ModuleRow.svelte';
  import type { chatbot_assignment } from '@prisma/client';

  export let assignments: Array<chatbot_assignment>;
  let modules: Array<any>;

  function createModuleList() {
    modules = [];
    for (let i: number = 0; i < assignments.length; i++) {
      console.log(assignments.length);
      modules.push({
            title: "Module " + assignments[i].cbm_id, // should come from different table
            description: "Description for module " + assignments[i].cbm_id, // should come from different table
            cbm_id: assignments[i].cbm_id, 
            completed: assignments[i].completed,
            image: 'https://picsum.photos/id/426/400/600.jpg', // should come from different table
            dateAccessed: '2022-05-25'});
      }
    return modules;
  }

  modules = createModuleList();

</script>

<html lang="en" data-theme="cupcake" />
  <div class="m-3">
    <h1>Modules</h1>
  </div>
  <div class="m-3 h-3/4">
    <!-- Generating the list of modules using the ModuleRow.svelte  --> 
    <ModuleRow listData={modules} rectangleOrCircle={true} />
     
  </div>

<!-- UNCOMMENT THIS OUT IF YOU WANT TO SEE RETRIEVED JSON DATA 
<h1>Json Data</h1>
{#each modules as module}
  <p>{JSON.stringify(module)}</p>
{/each}
-->