<script context="module" lang="ts">
  //TODO: User ID is hardcoded here for now but we will eventually need to implement
  //functionality to retrieve it from login and pass it here. - Linton
    export async function load({ fetch}) {
      const url = `/api/chatbot-assignments/user_id=1`;
      const response = await fetch(url);
      const modulesUrl = '/api/modules/chatbot';
      const modulesResponse = await fetch(modulesUrl);
      return {
        status: response.status,
        moduleStatus: modulesResponse.status,
        props: {
          assignments: response.ok && (await response.json()),
          chatbot_modules: modulesResponse.ok && (await modulesResponse.json())
        }
      };
    }
  </script>
  
  <script lang="ts">
    import ModuleRow from '$lib/components/ModuleRow.svelte';
    import type { chatbot_assignment, chatbot_module } from '@prisma/client';
  
    export let assignments: Array<chatbot_assignment>;
    export let chatbot_modules: Array<chatbot_module>;
  
    let modules: Array<any>;
  
    function findModuleInfo(id: bigint) {
      for (let i: number = 0; i < chatbot_modules.length; i++) {
        if(id == chatbot_modules[i].id)
          return chatbot_modules[i];
       }
  
    }
  
    function createModuleList() {
      modules = [];
      let tempModule: chatbot_module;
      for (let i: number = 0; i < assignments.length; i++) {
        tempModule = findModuleInfo(assignments[i].cbm_id);
        modules.push({
              title: tempModule.title, // should come from different table
              description: tempModule.description, // should come from different table
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