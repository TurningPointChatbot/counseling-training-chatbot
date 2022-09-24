<script>
  import { writable } from 'svelte/store';

  export const module = writable({
    title: "Title",
    description: "Desc",
    learningOutcomes: "Outcomes",
    assignedCounsellors: "Bob"
  })
</script>

<h2 class="mb-5">Create Module</h2>
<form class="content flex-col">
  <div class="flex-row">
    <div><label for="title">Module title</label></div>
    <div><input type="text" bind:value={$module.title} /></div>
  </div>
  <div class="flex-row">
    <div><label for="desc">Module description</label></div>
    <div><input type="text" bind:value={$module.description} /></div>
  </div>
  <div class="flex-row">
    <div><label for="learningOutcomes">Learning outcomes</label></div>
    <div><input type="text" bind:value={$module.learningOutcomes} /></div>
  </div>
  <div class="flex-row">
    <div><label for="assignedCounsellors">Assign to counsellors</label></div>
    <div><input type="text" bind:value={$module.assignedCounsellors} /></div>
  </div>
</form>