<script lang="ts">
  export let listData: any[];

  let filteredList = listData;
  let filterTerm = '';

  /**
   * Sort list by list item titles. Also display icon accordingly depending on
   * whether the list is sorted alphabetically or reverse alphabetical.
   */
  function sortList() {
    var azSortIcon = document.getElementById('az-sort-icon');
    var zaSortIcon = document.getElementById('za-sort-icon');
    if (azSortIcon.style.display === 'none') {
      // Sort reverse alphabetical.
      filteredList.sort((a, b) => b.title.localeCompare(a.title));
      azSortIcon.style.display = 'block';
      zaSortIcon.style.display = 'none';
    } else {
      // Sort alphabetical.
      filteredList.sort((a, b) => a.title.localeCompare(b.title));
      azSortIcon.style.display = 'none';
      zaSortIcon.style.display = 'block';
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

<div class="card">
  <div class="card-body">
    <div class="flex justify-end mb-3">
      <div class="flex items-center me-3">
        <div class="me-2">Sort A - Z</div>
        <div on:click={sortList}>
          <!-- Initially list will be sorted alphabetically (A-Z) -->
          <i id="az-sort-icon" class="bi bi-sort-alpha-down sort-icon" />
          <i id="za-sort-icon" class="bi bi-sort-alpha-down-alt sort-icon" />
        </div>
      </div>
      <div class="flex items-center">
        <label for="filter" class="form-label me-2 mb-0">Filter:</label>
        <input
          type="search"
          class="form-control"
          id="filter"
          bind:value={filterTerm}
          on:keyup={filterList}
        />
      </div>
    </div>
    <div class="scroll">
      <div>
        {#each filteredList as listItem}
          <div class="card p-3">
            <div class="flex flew-row">
              <div class="basis-1/4">
                <img
                  alt={listItem.title}
                  class="rounded-circle"
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
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .rounded-circle {
    /* Crops the image to a circle. */
    object-fit: cover;
    border-radius: 50%;
    height: 100px;
    width: 100px;
  }

  .item-title {
    font-size: 24px;
  }

  .item-description {
    font-size: 16px;
    color: gray;
  }

  .scroll {
    max-height: 400px;
    overflow-y: auto;
  }

  .sort-icon {
    font-size: 28px;
  }

  .sort-icon:hover {
    filter: opacity(80%);
  }

  #za-sort-icon {
    display: none;
  }
</style>
