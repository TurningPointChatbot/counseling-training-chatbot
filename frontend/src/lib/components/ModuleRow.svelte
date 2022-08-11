

<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import Linkable from './Linkable.svelte';

  export let listData: any[];
  export let rectangleOrCircle: boolean;
  
  let filteredList = listData;
  let filterTerm = '';
  let sortedAz = true;
  let sortedCompleted = false;
  let shapeClass = rectangleOrCircle ? "rounded-rectangle" : "rounded-circle";

  /**
   * Sort list by list item titles. Also display icon accordingly depending on
   * whether the list is sorted alphabetically or reverse alphabetical.
   */
  function sortListAz() {
    if (sortedAz) {
      // Sort reverse alphabetical.
      filteredList.sort((a, b) => b.title.localeCompare(a.title));
      sortedAz = false;
    } else {
      // Sort alphabetical.
      filteredList.sort((a, b) => a.title.localeCompare(b.title));
      sortedAz = true;
    }
    filteredList = filteredList; // Required to trigger re-render of list.
  }


  /**
   * Sort list by completed vs non-completed. Display icon reflections completed / non completed
   */
  function sortListCompleted() {
    if (sortedCompleted) {
      // Sort by incompleted.
      // TODO filteredList.sort((a, b) => b.title.localeCompare(a.title));
      sortedCompleted = false;
    }
    else {
      // Sort by completed.
      // TODO filteredList.sort((a, b) => a.title.localeCompare(b.title));
      sortedCompleted = true;
    }
    filteredList = filteredList; // Required to trigger re-render of list.
  }

  /**
   * Filter list by the filter term entered by the user, stored in 'filterTerm'.
   * This is a case-insensitive filter on both the list item title and description.
   */
  function filterList() {
    filteredList = listData.filter(
      (item) =>
        item.title
          .toLocaleLowerCase()
          .indexOf(filterTerm.toLocaleLowerCase()) !== -1 ||
        item.description
          .toLocaleLowerCase()
          .indexOf(filterTerm.toLocaleLowerCase()) !== -1
    );
  }
</script>

<div class="card-bordered h-full">
  <div class="card-body h-full p-3">
    <div class="flex justify-end mb-3">
      <div class="flex items-center mr-3">
        
        <!-- Sort by completed -->
        <div class="mr-2">Sort Completed</div>
        <div class="sort-icon p-2 mr-3" on:click={sortListCompleted}>
          {#if sortedCompleted}
            <Icon imgPath="/icon-sort-asc.png" altText="Sort Completed" width="20px" height="20px" />
          {:else}
            <Icon imgPath="/icon-sort-desc.png" altText="Sort Incompleted" width="20px" height="20px"/>
          {/if}
        </div>

        <div class="mr-2">Sort A - Z</div>
        <div class="sort-icon p-2 mr-3" on:click={sortListAz}>
          {#if sortedAz}
            <!-- Initially list will be sorted alphabetically (A-Z) -->
            <Icon imgPath="/icon-sort-asc.png" altText="Sort A-Z" width="20px" height="20px" />
          {:else}
            <Icon imgPath="/icon-sort-desc.png" altText="Sort Z-A" width="20px" height="20px"/>
          {/if}
        </div>
      </div>
      <div class="flex justify-center items-center">
        <label for="filter" class="form-label mr-2">Search:</label>
        <input
          type="search"
          class="form-control input input-bordered"
          id="filter"
          bind:value={filterTerm}
          on:keyup={filterList}
        />
      </div>
    </div>
    <div class="scroll">
      <div>
        {#each filteredList as listItem}
        <Linkable link={'/learning-outcomes/' + listItem.title}>
            <div class="card-bordered p-3">
              <div class="flex flew-row">
                <div class="basis-1/4 mr-5">
                  <img
                    alt={listItem.title}
                    class={shapeClass}
                    src={listItem.image}
                  />
                </div>
                <div class="flex items-center basis-3/4">
                  <div>
                    <div class="item-title">
                      {listItem.title}
                        <!-- status badges -->
                        {#if listItem.completed}
                        <div class="badge badge-md badge-accent badge-outline">completed</div>
                        {:else}
                        <div class="badge badge-lg badge-secondary badge-outline">incomplete</div>
                        {/if}
                    </div>
                    <div class="item-description">
                      {listItem.description}
                    </div>
                  </div>
                </div>
              <div>
                </div>
                </div>
            </div>
          </Linkable>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .rounded-rectangle {
    /* Crops the image to a rectangle with rounded corners. */
    object-fit: cover;
    border-radius: 25px;
    height: 150px;
    width: 200px;
  }

  .rounded-circle {
    /* Crops the image to a circle. */
    object-fit: cover;
    border-radius: 50%;
    height: 150px;
    width: 150px;
  }

  .item-title {
    font-size: 24px;
  }

  .item-description {
    font-size: 16px;
    color: gray;
  }

  .scroll {
    max-height: 100%;
    overflow-y: auto;
  }

  .sort-icon:hover {
    filter: opacity(50%);
  }

  .item-status {
    font-size: 16px;
    color: gray;
  }
</style>




<!--
  <script lang="ts">
  export let moduleName: string;
  export let dueDate: string;
  export let progress: number;
  export let description: string;

  function runModule() {
    location.href = '/learning-outcomes/' + moduleName;
  }
</script>

<div class="grid-flow-col gap-8 my-4">
  <div
    tabindex="0"
    class="collapse collapse-arrow border border-base-300 bg-base-300 rounded-box"
    style="color:black"
  >
    <input type="checkbox" />
    <div class="collapse-title text-2xl font-medium">
      <div class="grid grid-cols-3 gaps-4">
        <div>{moduleName}</div>
        <div>{dueDate}</div>
        <div>
        -->
        <!--
          {#if progress < 100}
            <!-- Progress Bar 
            <div class="w-full bg-base-400 rounded dark:bg-white">
              <div
                class="bg-blue-light text-s font-medium text-blue-100 text-center p-0.5 leading-none rounded"
                style="width: {String(progress)}%"
              >
                {String(progress)}%
              </div>
            </div>
          {:else}
            <!-- Completed Module Icon 
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          {/if}
        </div>
      </div>
    </div>
    <div class="collapse-content">
      <h3><b> {description} </b></h3>
      <div class="text-right">
        <button on:click={runModule} class="btn-highlight btn-icon">
          <div class="svgicon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="60"
              fill="currentColor"
              class="bi bi-arrow-right-circle"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
              />
            </svg>
          </div>
          <b>Run Module</b>
        </button>
      </div>
    </div>
  </div>
</div>
--->