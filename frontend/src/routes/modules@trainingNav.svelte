<script lang="ts">
  import ModuleRow from '../lib/components/ModuleRow.svelte';

  // Array containing array of module values [[moduleName, dueDate, progress, description], ...]
  // eg. [['Module 1', '17/08/22', 45, 'Lorem ipsum...'], ...]
  let modules: Array<any> = [];

  for (let i: number = 1; i <= 8; i++) {
    let moduleName: string = 'Module ' + String(i);
    let dueDate: string = String(i) + '/06/22';
    let progress: number = (i + 2) * 10;
    let description: string =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque in dui non volutpat. Suspendisse non turpis eget purus viverra sollicitudin. Morbi nulla nisi, consequat non neque vel, scelerisque porta orci. Aenean vitae neque imperdiet tellus cursus ornare. Etiam dignissim pellentesque fermentum. Etiam feugiat nibh vel mattis eleifend. Praesent orci.';
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