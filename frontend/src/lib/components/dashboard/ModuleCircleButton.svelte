<script lang="ts">
  export let path = '';
</script>

<div class="flex flex-col justify-center center relative m-16">
  <a href={path} rel="prefetch" class="nav-link">
    <button
      type="button"
      class="text-grey-700 border border-grey-700 hover:bg-grey-700 hover:text-black focus:ring-4 focus:outline-none focus:ring-grey-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-grey-500 dark:text-grey-500 dark:hover:text-black dark:focus:ring-grey-800"
    >
      <svg
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        /></svg
      >
    </button>
  </a>
  <div class="text-gray-500 text-base text-center pt-2 whitespace-nowrap">
    See all
  </div>
</div>
