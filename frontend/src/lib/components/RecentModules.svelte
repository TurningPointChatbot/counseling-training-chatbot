<script lang="ts">
export let listData: any[];

let sortedList = listData;

// sort from most recently accessed to least recently accessed module
function sortMostRecent() {
  sortedList.sort(function(a, b) {
    return b.dateAccessed.getTime() - a.dateAccessed.getTime()
  });
  if (sortedList.length > 4) {
    sortedList = sortedList.slice(0, 4); // only displaying max 4 modules at once on dash
  }
}
sortMostRecent();
</script>

<div id = "title" class="font-bold text-xl mb-2 text-gray-700">Training Modules</div>
<h1 class="text-gray-400 text-base">
    Recently viewed
</h1>
<div id = "modules" class="flex items-center rounded bg-white shadow-md overflow-hidden mt-10 mr-8 hover:shadow-lg transform transition hover:-translate-y-1">
    {#each sortedList as cardItem}
    <!--Card 1-->
    <div id = "card" class="rounded overflow-hidden shadow-lg">
        <img class="rounded-rectangle" src={cardItem.image} alt={cardItem.title}>
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
                <button type="button" class="font-small text-gray-900 bg-white rounded-full focus:z-10 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-black center">{cardItem.title}</button>
            </div>
        </div>
    </div>
    {/each}
    <div id = "see_all">
        <a
            href="/admin/modules"
            rel="prefetch"
            class="nav-link">
            <div class="flex-direction: row; rounded-full ">
                <button type="button" class="text-grey-700 border border-grey-700 hover:bg-grey-700 hover:text-black focus:ring-4 focus:outline-none focus:ring-grey-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-grey-500 dark:text-grey-500 dark:hover:text-black dark:focus:ring-grey-800">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
        </a>
        <div class="text-gray-500 text-base">
            See all
        </div>
    </div>
</div>

<style>
#card {
  width: 330px;
}

#modules {
  position: relative;
  left: 20px;
}

.rounded-rectangle {
  /* Crops the image to a rectangle with rounded corners. */
  object-fit: cover;
  border-radius: 25px;
  height: 180px;
  width: 315px;
  position: relative;
  left: 5px;
}

h1 {
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
