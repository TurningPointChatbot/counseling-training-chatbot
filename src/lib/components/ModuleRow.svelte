<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import Linkable from './Linkable.svelte';
  import { generatePDF } from '$lib/scripts/pdf_utils';

  interface Module {
    title: string;
    description: string;
    cbm_id: number;
    completed: boolean;
    image: string;
    dateAccessed: string;
  }

  export let listData: Array<Module>;
  export let rectangleOrCircle: boolean;

  let filteredList: Array<Module> = listData;
  let filterTerm: string = '';
  let sortedAz: boolean = false; // is list sorted A->Z
  let filterStatusOn: boolean = false; // is the filter in use
  let filterCompleted: boolean = false; // is the filter filtering by completed?
  let shapeClass: string = rectangleOrCircle ? 'rounded-rectangle' : 'rounded-circle';

  // filteredList[1].completed = true; -- dummy data to test filtering

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

  /**
   * Filter list by the status of the module, ie if completed vs not completed
   */
  function filterByStatus() {
    // turn filter on & filter by incomplete
    if (!filterStatusOn && !filterCompleted) {
      filteredList = listData.filter((item) => item.completed != true);

      filterStatusOn = true;
    }
    // filter by complete
    else if (filterStatusOn && !filterCompleted) {
      filteredList = listData.filter((item) => item.completed == true);
      filterCompleted = true;
    }
    // turn filter off
    else {
      filteredList = listData.filter(
        (item) => item.completed || !item.completed == true
      );
      filterStatusOn = false;
      filterCompleted = false;
    }
  }

  /**
   * Generate pdf functionality
   */
  function startPDFGeneration(listItem: Module) {
    console.log('pdf clicked!')
    // TODO: Replace placeholder module values
    let attemptId: number = 1;
    let dateCompleted: string = '2022-10-17 15:23'
    let counsellorName: string = 'John Smith'
    generatePDF(attemptId, listItem.title, counsellorName, dateCompleted);
  }

  sortListAz();
</script>

<div class="card-bordered h-full">
  <div class="card-body h-full p-3">
    <div class="flex justify-end mb-3">
      <div class="flex items-center mr-3">
        <!-- Filter by status -->
        <div class="mr-2">Filter Status</div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="sort-icon p-2 mr-3" on:click={filterByStatus}>
          {#if !filterStatusOn && !filterCompleted}
            <Icon
              imgPath="/icon-filter-full.png"
              altText="Filter Status"
              width="20px"
              height="20px"
            />
          {:else if filterStatusOn && !filterCompleted}
            <Icon
              imgPath="/icon-filter-bot.png"
              altText="Filter Status"
              width="20px"
              height="20px"
            />
          {:else}
            <Icon
              imgPath="/icon-filter-top.png"
              altText="Filter Status"
              width="20px"
              height="20px"
            />
          {/if}
        </div>
        <div class="mr-2">Sort A - Z</div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="sort-icon p-2 mr-3" on:click={sortListAz}>
          {#if sortedAz}
            <!-- Initially list will be sorted alphabetically (A-Z) -->
            <Icon
              imgPath="/icon-sort-asc.png"
              altText="Sort A-Z"
              width="20px"
              height="20px"
            />
          {:else}
            <Icon
              imgPath="/icon-sort-desc.png"
              altText="Sort Z-A"
              width="20px"
              height="20px"
            />
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
          <div class="card-bordered p-3">
            <div class="flex flew-row">
              <div class="basis-1/4 mr-5">
                <Linkable link={'/learning-outcomes/' + listItem.cbm_id}>
                  <img
                    alt={listItem.title}
                    class={shapeClass}
                    src={listItem.image}
                  />
                </Linkable>
              </div>
              <div class="flex items-center basis-3/4">
                <div>
                  <Linkable link={'/learning-outcomes/' + listItem.cbm_id}>
                    <div class="item-title">
                      {listItem.title}
                      <!-- status badges -->
                      {#if listItem.completed}
                        <div class="badge badge-md badge-accent badge-outline">
                          completed
                        </div>
                      {:else}
                        <div
                          class="badge badge-lg badge-secondary badge-outline"
                        >
                          incomplete
                        </div>
                      {/if}
                    </div>
                    <div class="item-description">
                      {listItem.description}
                    </div>
                  </Linkable>
                </div>
              </div>
              <div>
                <!-- Able button - generate PDF -->
                {#if listItem.completed}
                  <button
                    on:click={() => startPDFGeneration(listItem)}
                    class="btn"
                    tabindex="-1"
                    aria-disabled="false">PDF</button
                  >
                {:else}
                  <!-- Disabled button - cant generate PDF -->
                  <button
                    class="btn btn-disabled"
                    tabindex="-1"
                    aria-disabled="true">PDF</button
                  >
                {/if}
              </div>
              <div />
            </div>
          </div>
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
    max-height: 360px;
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
