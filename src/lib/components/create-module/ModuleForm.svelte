<script lang="ts">
  import type { chatbot_assignment_POST, chatbot_module_POST} from '$lib/post_types';
  import { writable } from 'svelte/store';
  import { to_number } from 'svelte/internal';
  import MultiSelect from 'svelte-multiselect';
  import { getContext } from 'svelte';
  const { close } = getContext('simple-modal');

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
  let dueDate = convertToYearMonthDayString(now); // Default due date today

  let titleInvalid = false;
  let descInvalid = false;

  export const moduleDetails = writable({
    title: "",
    description: "",
    assignedCounsellors: [],
    dueDate: dueDate
  })

  moduleDetails.subscribe(m => {
    newModule.title = m.title;
    newModule.description = m.description
    assignees = m.assignedCounsellors,
    dueDate = convertToYearMonthDayString(new Date(m.dueDate))
  });

  async function submit() {
    if (!formIsValid()) {
      return;
    }
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

  async function assignCounsellor(moduleId : number, userId: number, dueDate: string) {
    const counsellorAssignment: chatbot_assignment_POST = {
      module_id: moduleId,
      user_id: userId,
      due_date: new Date(dueDate)
    };

    const assignmentResult = await fetch('/api/chatbot-assignments', {
      method: 'POST',
      body: JSON.stringify(counsellorAssignment)
    });

    return await assignmentResult.json();
  }

  function formIsValid() {
    return !(validateTitle() || validateDescription());
  }

  function validateTitle() {
    titleInvalid = isNullOrWhitespace(newModule.title);
    return titleInvalid;
  }

  function validateDescription() {
    descInvalid = isNullOrWhitespace(newModule.description);
    return descInvalid;
  }

  function convertToYearMonthDayString(date: Date) : string {
    return date.toISOString().split('T')[0];
  }

  function isNullOrWhitespace(string: string) {
    return string == null || string.trim() === '';
  }
</script>

<div class="p-2">
  <h2 class="mb-4 font-bold">Create Module</h2>
  <form>
    <div class="mb-3">
      <div class="mb-2"><label for="title">Module title</label></div>
      <input type="text" class="form-control input input-bordered w-full" class:titleInvalid bind:value={$moduleDetails.title} on:blur="{validateTitle}"/>
      {#if titleInvalid}
        <span><p class="pt-1 text-error error-message">Module title cannot be empty.</p></span>
      {/if}
    </div>
    <div class="mb-3">
      <div class="mb-2"><label for="desc">Module description</label></div>
      <input type="text" class="form-control input input-bordered w-full" class:descInvalid bind:value={$moduleDetails.description} on:blur="{validateDescription}" />
      {#if descInvalid}
        <span><p class="pt-1 text-error error-message">Module description cannot be empty.</p></span>
      {/if}
    </div>
    <!-- UNCOMMENT WHEN WE HAVE LEARNING OUTCOMES -->
    <!--<div class="flex-row">
      <div><label for="learningOutcomes">Learning outcomes</label></div>
      <div><input type="text" bind:value={$module.learningOutcomes} /></div>
    </div>-->
    <div class="mb-3">
      <div class="mb-2"><label for="assignedCounsellors">Assign to counsellors</label></div>
      <MultiSelect bind:selectedValues={$moduleDetails.assignedCounsellors} options={counsellorOptions} />
    </div>
    <div class="flex-row">
      <div class="mb-2"><label for="dueDate">Due date</label></div>
      <input type="date" class="input-bordered w-1/2 text-center" min="{convertToYearMonthDayString(now)}" bind:value={$moduleDetails.dueDate} />
    </div>
    <div class="flex justify-end">
      <div><button class="btn mr-3" on:click="{close}">Cancel</button></div>
      <div><button class="btn btn-primary" on:click="{async () => {await submit()}}">Create</button></div>
    </div>
  </form>
</div>

<style>
  .titleInvalid, .descInvalid  {
		border: 1px solid red;
	}

	.titleInvalid, .descInvalid {
		outline: 1px solid red;
	}

  .error-message {
    font-size: 0.8rem;
  }
</style>