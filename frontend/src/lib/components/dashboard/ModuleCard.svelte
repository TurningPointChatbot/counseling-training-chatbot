<script lang="ts">
  import ModuleProgress from './ModuleProgress.svelte';

  export let imgUrl = "https://api.lorem.space/image/furniture?w=400&h=225&hash=33751";
  export let moduleName = "";
</script>

<a
  class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
  href="/"
>
  <!-- TODO: Correct url -->
  <div class="mb-2">
    <b>
      <h4 class="whitespace-nowrap mx-2">{moduleName}</h4>
    </b>
  </div>
  <img
    class="rounded-md"
    src={imgUrl}
    alt="Module"
  />
  <div><ModuleProgress /></div>
</a>
