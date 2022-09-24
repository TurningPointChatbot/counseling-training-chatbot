<script context="module" lang="ts">
  import ModuleList from "$lib/components/ModuleList.svelte";
  
  export async function load({ fetch }) {
    const url = '/api/modules/chatbot';
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
  import Modal from 'svelte-simple-modal';
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

<Modal>
  <!-- Module list needs to be a component to provide a context to open modal. 
    See https://github.com/flekschas/svelte-simple-modal/issues/16 -->
  <ModuleList chatbotModules={chatbotModules}/>
</Modal>


  
  