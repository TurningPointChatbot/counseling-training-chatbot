<script lang="ts">
  export let completed = 10;
  export let total = 40;

  let percent = (completed / total) * 100;
</script>

<!-- <progress class="progress  w-56 h-5 align-middle bg-base-400" value="70" max="100"></progress> -->
<div class="row module-card">
  <h3>Module Completion</h3>
  <div class="w-full">
   <!-- Progress Bar -->
    <div class="progress-bar" style="width: {percent}%">
      {percent}%
    </div>
  </div>
  <p class="p-faded">Completed: {completed}/{total}</p>
</div>
