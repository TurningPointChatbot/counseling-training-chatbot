<script lang="ts">
  export let time = 50;
  export let totalTime = 100;

  let percent = (time / totalTime) * 100;
</script>

<div class="row module-card">
  <h3>Target Training Time</h3>
  <div class="w-full">
    <!-- Progress Bar -->
    <div class="progress-bar" style="width: {percent}%">
      {percent}%
    </div>
  </div>
  <div class="p-faded">Time Remaining : {totalTime - time} hours</div>
</div>
