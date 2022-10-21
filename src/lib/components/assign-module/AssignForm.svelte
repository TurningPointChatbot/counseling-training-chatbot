<script lang="ts">
    import type { chatbot_assignment_POST} from '$lib/post_types';
    import { writable } from 'svelte/store';
    import { to_number } from 'svelte/internal';
    import MultiSelect from 'svelte-multiselect';
    import { getContext } from 'svelte';
    const { close } = getContext('simple-modal');
  
    export let counsellors = [];
    const moduleId = getContext('moduleId');
  
    let counsellorOptions = [];
    for (let counsellor of counsellors) {
      counsellorOptions.push({
        label: counsellor.fname + " " + counsellor.lname,
        value: counsellor.id
      });
    }
    let now = new Date(Date.now());
    let assignees : Array<number> = [];
    let dueDate = convertToYearMonthDayString(now); // Default due date today
  
    export const assignDetails = writable({
      assignedCounsellors: [],
      dueDate: dueDate
    })
  
    assignDetails.subscribe(m => {
      assignees = m.assignedCounsellors,
      dueDate = convertToYearMonthDayString(new Date(m.dueDate))
    });
  
    async function submit() {
  
      // Post assignees
      for (let assigneeId of assignees) {
        await assignCounsellor(to_number(moduleId), to_number(assigneeId), dueDate);
      }
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
  
    function convertToYearMonthDayString(date: Date) : string {
      return date.toISOString().split('T')[0];
    }
  </script>

<script context="module" lang="ts">
  export async function load({ fetch, session }) {
        const user = session.user;
        if (!user) {
            return {
                status: 302,
                redirect: "/login"
            };
        }
        else{
          return {
                status: 302,
                redirect: "/profile/account" 
            };
        }
  }
</script>
  
  <div class="p-2">
    <h2 class="mb-4 font-bold">Assign Module</h2>
    <form>
      <!-- UNCOMMENT WHEN WE HAVE LEARNING OUTCOMES -->
      <!--<div class="flex-row">
        <div><label for="learningOutcomes">Learning outcomes</label></div>
        <div><input type="text" bind:value={$module.learningOutcomes} /></div>
      </div>-->
      <div class="mb-3">
        <div class="mb-2"><label for="assignedCounsellors">Assign to counsellors</label></div>
        <MultiSelect bind:selectedValues={$assignDetails.assignedCounsellors} options={counsellorOptions} />
      </div>
      <div class="flex-row">
        <div class="mb-2"><label for="dueDate">Due date</label></div>
        <input type="date" class="input-bordered w-1/2 text-center" min="{convertToYearMonthDayString(now)}" bind:value={$assignDetails.dueDate} />
      </div>
      <div class="flex justify-end">
        <div><button class="btn mr-3" on:click="{close}">Cancel</button></div>
        <div><button class="btn btn-primary" on:click="{async () => {await submit()}}">Assign</button></div>
      </div>
    </form>
  </div>