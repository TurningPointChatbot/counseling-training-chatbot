<script lang="ts">
  import ModuleRow from '../lib/components/ModuleRow.svelte';

  // Array containing array of module values [[moduleName, dueDate, progress, description], ...]
  // eg. [['Module 1', '17/08/22', 45, 'Lorem ipsum...'], ...]
  let modules: Array<any> = [];
  let moduleNames = ["Module 101: Empathy", "Module 102: Treatment Options", "Module 103: Alcohol & drugs", "Module 104: Withdrawal", "Module 105: Counselling Techniques"]
  
  for (let i: number = 1; i <= 5; i++) {
    let moduleName: string = moduleNames[i-1];
    let dueDate: string = String(i) + '/06/22';
    let progress: number = 25;
    let description: string =
      'Empathy is the ability to emotionally understand what other people feel, see things from their point of view, and imagine yourself in their place. Essentially, it is putting yourself in someone else\'s position and feeling what they must be feeling.';
    modules.push({
      moduleName: moduleName,
      dueDate: dueDate,
      progress: progress,
      description: description
    });
  }
</script>

<html lang="en" data-theme="cupcake" />
<!--Header-->
<h1 class="py-4">Modules</h1>
<div class="grid-flow-col gap-8 my-4">
  <div
    tabindex="0"
    class="collapse collapse-close border border-base-300 bg-base-100 rounded-box"
    style="background-color:#852E82; color:white"
  >
    <div class="collapse-title text-2xl font-medium">
      <div class="grid grid-cols-3 gaps-4">
        <div>Module Name</div>
        <div>Due Date</div>
        <div>Status</div>
      </div>
    </div>
  </div>
</div>

{#each modules as module}
  <ModuleRow {...module} />
{/each}
