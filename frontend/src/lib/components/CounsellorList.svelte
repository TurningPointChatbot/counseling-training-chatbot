<script lang="ts">
  // TODO: Retrieve counsellor details from database.
  let counsellors = [
    {
      name: 'Davos Sand',
      position: 'Junior Counsellor',
      profile_image: 'https://picsum.photos/id/426/400/600.jpg'
    },
    {
      name: 'Evelyn Chua',
      position: 'Junior Counsellor',
      profile_image: 'https://picsum.photos/id/426/400/600.jpg'
    },
    {
      name: 'Isabella Howard',
      position: 'Junior Counsellor',
      profile_image: 'https://picsum.photos/id/426/400/600.jpg'
    },
    {
      name: 'Jackson Tyler',
      position: 'Junior Counsellor',
      profile_image: 'https://picsum.photos/id/426/400/600.jpg'
    },
    {
      name: 'Carey Smith',
      position: 'Junior Counsellor',
      profile_image: 'https://picsum.photos/id/426/400/600.jpg'
    },
    {
      name: 'Joanna Tran',
      position: 'Junior Counsellor',
      profile_image: 'https://picsum.photos/id/426/400/600.jpg'
    }
  ];

  let filteredCounsellors = counsellors;
  let counsellorFilterTerm = '';

  /**
   * Sort counsellor list by counsellor names. Also display
   * icon accordingly depending on whether the list is sorted
   * alphabetically or reverse alphabetical.
   */
  function sortCounsellorList() {
    var azSortIcon = document.getElementById('az-sort-icon');
    var zaSortIcon = document.getElementById('za-sort-icon');
    if (azSortIcon.style.display === 'none') {
      // Sort reverse alphabetical.
      filteredCounsellors.sort((a, b) => b.name.localeCompare(a.name));
      azSortIcon.style.display = 'block';
      zaSortIcon.style.display = 'none';
    } else {
      // Sort alphabetical.
      filteredCounsellors.sort((a, b) => a.name.localeCompare(b.name));
      azSortIcon.style.display = 'none';
      zaSortIcon.style.display = 'block';
    }
    filteredCounsellors = filteredCounsellors; // Required to trigger re-render of list.
  }

  /**
   * Filter counsellors by the filter term entered by the user, stored in 'counsellorFilterTerm'.
   * This is a case-insensitive filter on both the counsellor name and counsellor position.
   */
  function filterCounsellors() {
    filteredCounsellors = counsellors.filter(
      (item) =>
        item.name
          .toLocaleLowerCase()
          .indexOf(counsellorFilterTerm.toLocaleLowerCase()) !== -1 ||
        item.position
          .toLocaleLowerCase()
          .indexOf(counsellorFilterTerm.toLocaleLowerCase()) !== -1
    );
  }
</script>

<div id="admin-counsellor-list">
  <div class="h1 fw-bold">Counsellors</div>
  <div class="card">
    <div class="card-body">
      <div class="flex justify-end mb-3">
        <div class="flex items-center me-3">
          <div class="me-2">Sort A - Z</div>
          <div on:click={sortCounsellorList}>
            <!-- Initially list will be sorted alphabetically (A-Z) -->
            <i id="az-sort-icon" class="bi bi-sort-alpha-down sort-icon" />
            <i id="za-sort-icon" class="bi bi-sort-alpha-down-alt sort-icon" />
          </div>
        </div>
        <div class="flex items-center">
          <label for="counsellor-filter" class="form-label me-2 mb-0"
            >Filter:</label
          >
          <input
            type="search"
            class="form-control"
            id="counsellor-filter"
            bind:value={counsellorFilterTerm}
            on:keyup={filterCounsellors}
          />
        </div>
      </div>
      <div class="scroll">
        <div>
          {#each filteredCounsellors as counsellor}
            <div class="card p-3">
              <div class="flex flew-row">
                <div class="basis-1/4">
                  <img
                    alt={counsellor.name}
                    class="rounded-circle"
                    src={counsellor.profile_image}
                  />
                </div>
                <div class="flex items-center basis-3/4">
                  <div>
                    <div class="counsellor-name">
                      {counsellor.name}
                    </div>
                    <div class="counsellor-role">
                      {counsellor.position}
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
</div>

<style>
  #admin-counsellor-list {
    font-family: Arial, Helvetica, sans-serif;
  }

  .rounded-circle {
    /* Crops the image to a circle. */
    object-fit: cover;
    border-radius: 50%;
    height: 100px;
    width: 100px;
  }

  .counsellor-name {
    font-size: 24px;
  }

  .counsellor-role {
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
