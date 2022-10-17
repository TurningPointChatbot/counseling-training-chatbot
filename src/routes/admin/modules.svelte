<script context="module" lang="ts">
  export async function load({ fetch }) {
    const modulesUrl = '/api/modules/chatbot';
    const modulesResponse = await fetch(modulesUrl);

    const counsellorsUrl = '/api/users/counsellors';
    const counsellorsResponse = await fetch(counsellorsUrl);

    return {
      moduleStatus: modulesResponse.status,
      counsellorStatus: counsellorsResponse.status,
      props: {
        modules: modulesResponse.ok && (await modulesResponse.json()),
        counsellors: counsellorsResponse.ok && (await counsellorsResponse.json())
      },
    };
  }
</script>

<script lang="ts">
  import Modal from 'svelte-simple-modal';
  import ModuleList from "$lib/components/ModuleList.svelte";
  import type { chatbot_module, user } from '@prisma/client';
  export let modules: chatbot_module[];
  export let counsellors: user[];

  let chatbotModules = [];

  let imageUrl = 'https://picsum.photos/id/{imageId}/400.jpg';
  for (let i = 0; i < modules.length; i++) {
    let imageId = 200 + i*2;
    chatbotModules[chatbotModules.length] = {
      title: modules[i].title,
      description: modules[i].description,
      image: imageUrl.replace('{imageId}', imageId.toString()),
      href: '/admin/module-details/' + modules[i].id
    };
  }
</script>

<Modal>
  <!-- Module list needs to be a component to provide a context to open modal. 
    See https://github.com/flekschas/svelte-simple-modal/issues/16 -->
  <ModuleList chatbotModules={chatbotModules} counsellors={counsellors}/>
</Modal>


  
  