<script lang="ts">
    export let ModuleCardIcon;
    import ModuleProgress from "./moduleProgress.svelte";
  </script>
  
  <a class ="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href="">
    <div class="card-body grid grid-cols-10 gap-3 w-full">
        <div class="col-span-3"><p> 04/05/2022 </p></div>
        <div class="col-span-3">
            <img class="rounded-md" src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Random Picture">
        </div>
    </div>
  </a>