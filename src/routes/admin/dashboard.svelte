<script context="module" lang="ts">
  //Need to check if these are the correct API calls to make
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
  import BigCard from '$lib/components/dashboard/BigCard.svelte';
  import SmallCard from '$lib/components/dashboard/SmallCard.svelte';
  import ModuleCircleButton from '$lib/components/dashboard/ModuleCircleButton.svelte';
  import type { chatbot_module, user } from '@prisma/client';
  export let modules: chatbot_module[];
  export let counsellors: user[];
  let chatbot_modules = [];

  let imageUrl = 'https://picsum.photos/id/{imageId}/400/600.jpg';
  for (let i = 0; i < 3; i++) {
    if (i >= modules.length) {
      break;
    }
    let imageId = 200 + i*2;
    chatbot_modules[chatbot_modules.length] = {
      title: modules[i].title,
      description: modules[i].description,
      image: imageUrl.replace('{imageId}', imageId.toString()),
      href: '/admin/module-details/' + modules[i].id
    };
  }

</script>
<div class="ml-8 mt-8">
  <h1>Dashboard</h1>
</div>
<div class="module-card pt-2">
  <BigCard title={'Counsellors'} subTitle={''}>
    {#each counsellors as counsellor}
      <SmallCard image={counsellor.avatar_url} titleButton={counsellor['fname'] + " " + counsellor['lname']} path = "/admin/employee-details/{counsellor['id']}" />
    {/each}
    <ModuleCircleButton path="/admin/counsellors"/>
  </BigCard>

  <BigCard title={'Training Modules'} subTitle={''}>
    {#each chatbot_modules as module}
      <SmallCard
        cardClass="col-span-2 text-center px-3 py-3"
        path={module['href']}
        alt={module['title']}
        imageClass=".object-cover h-48 w-96 rounded-3xl relative"
        titleButton={module['title']}
        image={module['image']}></SmallCard>
    {/each}
    <ModuleCircleButton path="/admin/modules" />
  </BigCard>
</div>
