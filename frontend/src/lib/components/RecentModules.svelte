<script lang="ts">
  export let listData: any[];

  let sortedList = listData;

  // sort from most recently accessed to least recently accessed module
  function sortMostRecent() {
    sortedList.sort(function (a, b) {
      return b.dateAccessed.getTime() - a.dateAccessed.getTime();
    });
    if (sortedList.length > 4) {
      sortedList = sortedList.slice(0, 4); // only displaying max 4 modules at once on dash
    }
  }
  sortMostRecent();
</script>

<div class="card-bordered m-3 relative">
  <!-- Training Modules Title -->
  <div class="ml-6 mt-3">
    <h3 class="font-bold">
      Training Modules
    </h3>
    <h4>
      Recently viewed
    </h4>
  </div>
  <!-- Training Module Cards-->
  <div class="module-list">
    {#each sortedList as cardItem}
      <!--Card 1-->
      <a href={cardItem.href}>
        <!-- Module Card -->
        <div class="flex flex-col items-center pr-5 overflow-hidden hover:-translate-y-1">
          <div>
            <img
              class="rounded-rectangle"
              src={cardItem.image}
              alt={cardItem.title}
            />
          </div>
          <div class="flex py-4">
            <h4 class="whitespace-nowrap w-max">
              {cardItem.title}
            </h4>
          </div>
        </div>
      </a>
    {/each}
  </div>
  <!-- See-All Button -->
  <div class="absolute z-1 right-3 top-1/2">
    <a href="/admin/modules" rel="prefetch">
      <button type="button"
              class="circle-button bg-base-100">
        <h4>See all</h4>
        <svg
                class="w-5 h-5 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
          <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"/>
        </svg>
      </button>
    </a>
  </div>
</div>