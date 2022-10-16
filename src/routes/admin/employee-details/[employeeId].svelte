<script context="module" lang="ts">
  export async function load({ fetch, params }) {
    const user_url = `/api/users/${params.employeeId}`;
    const user_response = await fetch(user_url);

    const modulesUrl = '/api/modules/chatbot';
    const modulesResponse = await fetch(modulesUrl);

    return {
      userStatus: user_response.status,
      moduleStatus: modulesResponse.status,
      props: {
        foundUser: user_response.ok && (await user_response.json()),
        id: params.id,
        modules: modulesResponse.ok && (await modulesResponse.json())
      },  
    };
  }
</script>

<script lang="ts">
  import type { user, chatbot_module } from '@prisma/client';


  export let foundUser: user;
  export let id: bigint;
  export let modules: chatbot_module[];

  import ModuleBigCard from '$lib/components/dashboard/ModuleBigCard.svelte';
  import CounsellorCard from '$lib/components/dashboard/CounsellorCard.svelte';
  import ModuleOverallProgress from '$lib/components/dashboard/ModuleOverallProgress.svelte';

  let top_modules = [];
  let chatbotModules = [];
  
let employee = {
    name: foundUser.fname + ' ' + foundUser.lname,
    progress: 50,
    profile_image: foundUser.avatar_url,
    position: foundUser.type_id,
    training: 10
  };
  console.log(foundUser)
  let totalCompleted = 0;
  let totalModules = foundUser.chatbot_attempt.length;
  let totalHoursDone = 10;
  let targetTrainingHours = 50;

  for (let i = 0; i < foundUser.chatbot_attempt.length; i++) {
    let flag = 0;
    if (foundUser.chatbot_attempt[i].completed_at != null){
      totalCompleted += 1;
    };
    for (let x = 0; x < top_modules.length && x < 3; x++){
      if(foundUser.chatbot_attempt[i].cbm_id == top_modules[x].cbm_id){
        flag = 1;
      }
      
    }
    if(!flag){
      top_modules.push(foundUser.chatbot_attempt[i]);
    }
    };
    for (let i = 0; i < modules.length; i++) {
      for (let x = 0; x < top_modules.length && x < 3; x++){
        if(modules[i].id == top_modules[x].cbm_id){
          chatbotModules[chatbotModules.length] = {
          title: modules[i].title,
          description: modules[i].description,
          image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=225',
          href: '/admin/module-details/' + modules[i].id
         };
        }
    }
  }
</script>
<div class="grid grid-cols-2 gap-4 m-8">
  <CounsellorCard employeeData={employee} />
    <ModuleOverallProgress
      {totalModules}
      completedModules={totalCompleted}
      completedHours={totalHoursDone}
      targetHours={targetTrainingHours}
    />
  <div class="col-span-2"><ModuleBigCard chatbotModules = {chatbotModules}/></div>
</div>
