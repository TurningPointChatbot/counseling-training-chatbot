<script lang="ts">
  import ModuleProgress from './ModuleProgress.svelte';
</script>

<a
  class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
  href="/" 
>
  <!-- TODO: Correct url -->
  <img
    class="rounded-md"
    src="https://api.lorem.space/image/shoes?w=400&h=225"
    alt="Module"
  />
  <div><ModuleProgress /></div>
</a>
