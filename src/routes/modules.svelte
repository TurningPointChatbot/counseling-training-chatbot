<script context="module" lang="ts">
  export async function load({ fetch }) {
    //TODO: User ID is hardcoded here for now but we will eventually need to implement
    //functionality to retrieve it from login and pass it here. - Linton
    let userId = 1;
    const url = `api/chatbot-assignments/user_id=${userId}`;
    const response = await fetch(url);
    return {
      status: response.status,
      props: {
        userId: userId,
        assignments: response.ok && (await response.json())
      }
    };
  }
</script>

<script lang="ts">
  import ModuleRow from '../lib/components/ModuleRow.svelte';
  import type { chatbot_assignment } from '@prisma/client';

  export let userId: number;
  export let assignments: Array<chatbot_assignment>;

  let modules: Array<any>;

  function createModuleList() {
    modules = [];
    let imageUrl = 'https://picsum.photos/id/{imageId}/400.jpg';
    for (let i: number = 0; i < assignments.length; i++) {
      let imageId = 200 + i*2;
      modules.push({
        title: 'Module ' + assignments[i].cbm_id, // should come from different table
        description: 'Description for module ' + assignments[i].cbm_id, // should come from different table
        cbm_id: assignments[i].cbm_id,
        completed: assignments[i].completed,
        image: imageUrl.replace('{imageId}', imageId.toString()), // should come from different table
        dateAccessed: '2022-05-25'
      });
    }
    return modules;
  }

  console.log(modules);
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
