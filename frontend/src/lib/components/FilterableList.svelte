<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';

  export let listData: any[];

  let filteredList = listData;
  let filterTerm = '';
  let sortedAz = true;

  /**
   * Sort list by list item titles. Also display icon accordingly depending on
   * whether the list is sorted alphabetically or reverse alphabetical.
   */
  function sortList() {
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
</script>

<div class="card-bordered h-full">
  <div class="card-body h-full p-3">
    <div class="flex justify-end mb-3">
      <div class="flex items-center mr-3">
        <div class="mr-2">Sort A - Z</div>
        <div class="sort-icon p-2 mr-3" on:click={sortList}>
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
          <a href={listItem.href}>
            <div class="card-bordered p-3">
              <div class="flex flew-row">
                <div class="basis-1/4 mr-5">
                  <img
                    alt={listItem.title}
                    class="rounded-box h-40"
                    src={listItem.image}
                  />
                </div>
                <div class="flex items-center basis-3/4">
                  <div>
                    <div class="item-title">
                      {listItem.title}
                    </div>
                    <div class="item-description">
                      {listItem.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>
<<<<<<< HEAD
