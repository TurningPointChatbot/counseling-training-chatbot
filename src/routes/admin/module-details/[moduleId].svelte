<script context="module">
  
  export async function load({ fetch, params }) {
    const moduleUrl = `/api/modules/chatbot/${params.moduleId}`;
    const moduleResponse = await fetch(moduleUrl);

    const assignedUrl = `/api/chatbot-assignments/module_id=${params.moduleId}`;
    const assignedResponse = await fetch(assignedUrl);

    const counsellorsUrl = '/api/users/counsellors';
    const counsellorsResponse = await fetch(counsellorsUrl);

    return { 
      moduleStatus: moduleResponse.status,
      assignedStatus: assignedResponse.status,
      counsellorStatus: counsellorsResponse.status,
      props: { 
        my_chatbot_module: moduleResponse.ok && (await moduleResponse.json()),
        assigned_list: assignedResponse.ok && (await assignedResponse.json()),
        moduleId: params.moduleId,
        counsellors: counsellorsResponse.ok && (await counsellorsResponse.json())
      } 
    };
    
  }
</script>

<script lang="ts">
  import Modal from 'svelte-simple-modal';
  import ModuleDetails from "$lib/components/ModuleDetails.svelte";
  import {setContext } from 'svelte';
  import type { chatbot_module, chatbot_assignment, user} from '@prisma/client';

  export let moduleId: string;
  export let my_chatbot_module: chatbot_module;
  export let assigned_list: chatbot_assignment[];
  export let counsellors: user[];
  console.log(assigned_list);
  let counsellorlist = [];
  let uniquelist = [];
  setContext('moduleId', moduleId);

  for (let i = 0; i < assigned_list.length; i++) {
    if (uniquelist.includes(assigned_list[i].user_id)){
      continue;
    }
    else{
      counsellorlist[counsellorlist.length] = {
        title: assigned_list[i]["user"].fname + ' ' + assigned_list[i]["user"].lname,
        description: 'Counsellor',
        image: assigned_list[i]["user"].avatar_url,
        href: '/admin/employee-details/' + assigned_list[i].user_id
      };
      uniquelist.push(assigned_list[i].user_id);
    }
  }

  let module = {
    title: my_chatbot_module.title,
    description: my_chatbot_module.description
  };


  // TODO: Retrieve counsellor module progress from database.
  /*let counsellorlist = [
    {
      title: 'Blake Sand',
      description: 'Junior Counsellor',
      image:
        'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160',
      href: '/admin/employee-details/id'
    },
    {
      title: 'Sam Chua',
      description: 'Senior Counsellor',
      image:
        'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160',
      href: '/admin/employee-details/id'
    },
    {
      title: 'Aiden Howard',
      description: 'Junior Counsellor',
      image:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160',
      href: '/admin/employee-details/id'
    },
    {
      title: 'Winter Tyler',
      description: 'Junior Counsellor',
      image:
        'https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160',
      href: '/admin/employee-details/id'
    },
    {
      title: 'Riley White',
      description: 'Junior Counsellor',
      image:
        'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160',
      href: '/admin/employee-details/id'
    }
  ];*/
</script>



<Modal>
  <!-- Module list needs to be a component to provide a context to open modal. 
    See https://github.com/flekschas/svelte-simple-modal/issues/16 -->
  <ModuleDetails module = {module} assignedCounsellors={counsellorlist} moduleId = {moduleId} counsellors = {counsellors}/>
</Modal>