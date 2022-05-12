<script lang="ts">
  let modPrint = 'Completed : 10 / 40';
</script>

<!-- <progress class="progress  w-56 h-5 align-middle bg-base-400" value="70" max="100"></progress> -->
<div class="row">
  Module Completion
  <div class="w-full bg-gray-200 rounded-full">
    <div
      class="bg-secondary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded"
      style="width: 25%"
    >
      25%
    </div>
  </div>
  <div class="font-xs text-base-400">{modPrint}</div>
</div>
