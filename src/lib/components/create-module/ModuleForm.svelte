<script lang="ts">
  import type { chatbot_assignment_POST, chatbot_module_POST} from '$lib/post_types';
  import { writable } from 'svelte/store';
  import { to_number } from 'svelte/internal';
  import MultiSelect from 'svelte-multiselect';

  export let counsellors = [];

  let counsellorOptions = [];
  for (let counsellor of counsellors) {
    counsellorOptions.push({
      label: counsellor.fname + " " + counsellor.lname,
      value: counsellor.id
    });
  }
  let now = new Date(Date.now());
  let newModule : chatbot_module_POST = {
    title: "",
    description: ""
  };
  let assignees : Array<number> = [];
  let dueDate = new Date(now.getDate() + 7); // Default due date in 7 days from now

  export const moduleAssignees = writable({
    title: "",
    description: "",
    assignedCounsellors: [],
    dueDate: dueDate
  })

  moduleAssignees.subscribe(m => {
    newModule.title = m.title;
    newModule.description = m.description
    assignees = m.assignedCounsellors,
    dueDate = new Date(m.dueDate)
  });

  async function submit() {
    // Post module
    let createdModule = await createNewModule(newModule);

    // Post assignees
    for (let assigneeId of assignees) {
      await assignCounsellor(to_number(createdModule.id), to_number(assigneeId), dueDate);
    }
  }
  
  async function createNewModule(newModule: chatbot_module_POST) {
    const module_result = await fetch('/api/modules/chatbot', {
      method: 'POST',
      body: JSON.stringify(newModule)
    });

    return await module_result.json();
  }

  async function assignCounsellor(moduleId : number, userId: number, dueDate: Date) {
    const counsellorAssignment: chatbot_assignment_POST = {
      module_id: moduleId,
      user_id: userId,
      due_date: dueDate
    };

    const assignmentResult = await fetch('/api/chatbot-assignments', {
      method: 'POST',
      body: JSON.stringify(counsellorAssignment)
    });

    return await assignmentResult.json();
  }
</script>

<h2 class="mb-5">Create Module</h2>
<form class="content flex-col">
  <div class="flex-row">
    <div><label for="title">Module title</label></div>
    <div><input type="text" bind:value={$moduleAssignees.title} /></div>
  </div>
  <div class="flex-row">
    <div><label for="desc">Module description</label></div>
    <div><input type="text" bind:value={$moduleAssignees.description} /></div>
  </div>
  <!-- UNCOMMENT WHEN WE HAVE LEARNING OUTCOMES -->
  <!--<div class="flex-row">
    <div><label for="learningOutcomes">Learning outcomes</label></div>
    <div><input type="text" bind:value={$module.learningOutcomes} /></div>
  </div>-->
  <div class="flex-row">
    <div><label for="assignedCounsellors">Assign to counsellors</label></div>
    <MultiSelect bind:selectedValues={$moduleAssignees.assignedCounsellors} options={counsellorOptions} />
  </div>
  <div class="flex-row">
    <div><label for="dueDate">Due date</label></div>
    <div><input type="date" min="{now.toDateString()}" bind:value={$moduleAssignees.dueDate} /></div>
  </div>
  <div class="flex justify-end">
    <div><button class="btn mr-3" on:click="{submit}">Create</button></div>
    <div><button class="btn">Cancel</button></div>
  </div>
</form>
