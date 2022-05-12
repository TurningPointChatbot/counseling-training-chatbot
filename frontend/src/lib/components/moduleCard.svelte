<script>
    export let ModuleCard;
    import ModuleProgress from "./moduleProgress.svelte";
  </script>
  
  <a class ="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href="">
      <img class="rounded-md" src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Random Picture">
      <div><ModuleProgress moduleProgress={ModuleProgress}/></div>
  </a>