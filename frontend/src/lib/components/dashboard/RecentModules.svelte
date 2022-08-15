<script lang="ts">
  export let listData: any[];
  import ModuleCircleButton from './ModuleCircleButton.svelte';
  let sortedList = listData;

  // sort from most recently accessed to least recently accessed module
  function sortMostRecent() {
    /*
    sortedList.sort(function (a, b) {
      return b.dateAccessed.getTime() - a.dateAccessed.getTime();
    });
    */
    sortedList.sort(
      (d1, d2) =>
        new Date(d1.dateAccessed).getTime() -
        new Date(d2.dateAccessed).getTime()
    );

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
    <ModuleCircleButton path="admin/counsellors" />
  </div>
</div>
