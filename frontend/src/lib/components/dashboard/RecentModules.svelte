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

<div class="card-bordered m-3">
  <div id="title" class="font-bold text-xl mb-2 text-gray-700">
    Training Modules
  </div>
  <div id="subtitle" class="text-gray-400 text-base">Recently viewed</div>
  <div
    id="modules"
    class="flex items-center bg-white overflow-hidden mt-4 mr-8 transform transition"
  >
    {#each sortedList as cardItem}
      <!--Card 1-->
      <a href={cardItem.href}>
        <div
          class="flex flex-col items-center pr-5 overflow-hidden hover:-translate-y-1"
        >
          <div>
            <img
              class="rounded-rectangle"
              src={cardItem.image}
              alt={cardItem.title}
            />
          </div>
          <div class="flex py-4">
            <div class="text-xl mb-2">
              {cardItem.title}
            </div>
          </div>
        </div>
      </a>
    {/each}
    <!--button went here-->
    <ModuleCircleButton path="admin/counsellors" />
  </div>
</div>

<style>
  #modules {
    position: relative;
    left: 20px;
  }

  .rounded-rectangle {
    /* Crops the image to a rectangle with rounded corners. */
    object-fit: cover;
    border-radius: 25px;
    height: 160px;
    width: 230px;
    position: relative;
  }

  #subtitle {
    position: relative;
    left: 30px;
    top: 5px;
  }

  #title {
    position: relative;
    left: 30px;
    top: 10px;
  }

  #see_all {
    position: relative;
    left: 25px;
  }
</style>
