<script lang="ts">
  import { logDOM } from '@testing-library/svelte';
  import ModuleCardIcon from './ModuleCardIcon.svelte';
</script>

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
    // Grab three assigned modules or all if less then 3
    for (let i: number = 0; i < 3; i++) {
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

<div class="card bg-base-100 shadow-xl">
  <!-- Assigned Modules Title -->
  <div class="h2-counsellor-dashboard">
    <h3 class="left-3 relative">
      Assigned Modules

    </h3>
  </div>
  <div class="card-body grid grid-row gap-3 w-full">
      <!-- Generating the list of modules using the ModuleRow.svelte  --> 
      <ModuleRow listData={modules} rectangleOrCircle={true} /> 
  </div>
</div>
