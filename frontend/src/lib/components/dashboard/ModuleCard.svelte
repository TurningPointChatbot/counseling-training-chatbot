<script lang="ts">
  import ModuleProgress from './ModuleProgress.svelte';

  export let imgUrl = "https://api.lorem.space/image/furniture?w=400&h=225&hash=33751";
  export let moduleName = "";
</script>

<a href="/">
  <!-- TODO: Correct url -->
  <div class="mb-2"><b><h3>{moduleName}</h3></b></div>
  <img
    class="rounded-md"
    src={imgUrl}
    alt="Module"
  />
  <div><ModuleProgress /></div>
</a>
