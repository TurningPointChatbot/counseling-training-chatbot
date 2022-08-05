<script lang="ts">
  export let time = 50;
  export let totalTime = 100;

  let percent = (time / totalTime) * 100;
</script>

<div class="row">
  <h2 > Target Training Time</h2>
  <div class="w-full bg-gray-200 rounded-full">
    <div
      class="bg-secondary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded"
      style="width: {percent}%"
    >
      {percent}%
    </div>
  </div>
  <div class="pt-1 font-xs text-base-400">Time Remaining : {totalTime - time} hours</div>
</div>
