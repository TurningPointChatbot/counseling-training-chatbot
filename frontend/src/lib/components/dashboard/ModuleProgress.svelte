<script lang="ts">
  export let completed = 10;
  export let total = 40;

  let percent = (completed / total) * 100;
</script>

<!-- <progress class="progress  w-56 h-5 align-middle bg-base-400" value="70" max="100"></progress> -->
<div class="row">
  <h2 class="pb-2">Module Completion</h2>
  <div class="w-full bg-gray-200 rounded-full">
    <div
      class="bg-secondary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded"
      style="width: {percent}%"
    >
      {percent}%
    </div>
  </div>
  <div class="pt-1 font-xs text-base-400">Completed: {completed}/{total}</div>
</div>
