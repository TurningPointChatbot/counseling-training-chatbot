<script context="module" lang="ts">
  export async function load({ fetch }) {
    const url = '/api/modules';
    const response = await fetch(url);

    return {
      status: response.status,
      props: {
        modules: response.ok && (await response.json())
      }
    };
  }
</script>

<script lang="ts">
  import FilterableList from '$lib/components/FilterableList.svelte';
  import type { chatbot_module } from '@prisma/client';

  export let modules: chatbot_module[];
  let chatbotModules = [];
  

  for (let i = 0; i < modules.length; i++) {
    chatbotModules[chatbotModules.length] = {
      title: modules[i].title,
      description: modules[i].description,
      image: 'https://picsum.photos/id/426/400/600.jpg',
      href: '/admin/module-details/' + modules[i].id
    };
  }
</script>

  <div class="m-3">
    <h1>Modules</h1>
  </div>
  <div class="m-3 h-3/4">
      <FilterableList listData={chatbotModules}/>
  </div>