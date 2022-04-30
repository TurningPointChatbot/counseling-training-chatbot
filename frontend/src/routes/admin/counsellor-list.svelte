<script lang="ts">
  import {
    Card,
    CardBody,
    Col,
    ListGroup,
    ListGroupItem,
    Row
  } from 'sveltestrap';

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
	let counsellorFilterTerm = "";

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
		filteredCounsellors = counsellors.filter(item => 
			item.name.toLocaleLowerCase().indexOf(counsellorFilterTerm.toLocaleLowerCase()) !== -1 
				|| item.position.toLocaleLowerCase().indexOf(counsellorFilterTerm.toLocaleLowerCase()) !== -1
		);
  }
</script>

<div id="admin-counsellor-list">
  <div class="h1 fw-bold">Counsellors</div>
  <Card class="col-8">
    <CardBody>
      <div class="d-flex justify-content-end mb-3">
        <div class="d-flex align-items-center me-3">
          <div class="me-2">Sort A - Z</div>
          <div on:click={sortCounsellorList}>
            <!-- Initially list will be sorted alphabetically (A-Z) -->
            <i id="az-sort-icon" class="bi bi-sort-alpha-down sort-icon" />
            <i id="za-sort-icon" class="bi bi-sort-alpha-down-alt sort-icon" />
          </div>
        </div>
        <div class="d-flex align-items-center">
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
        <ListGroup>
          {#each filteredCounsellors as counsellor}
            <ListGroupItem>
              <Row class="row-2 py-2">
                <Col class="col-3">
                  <img
                    alt={counsellor.name}
                    class="rounded-circle"
                    src={counsellor.profile_image}
                  />
                </Col>
                <Col class="d-flex align-items-center col-9">
                  <div>
                    <div class="row counsellor-name">
                      {counsellor.name}
                    </div>
                    <div class="row counsellor-role">
                      {counsellor.position}
                    </div>
                  </div>
                </Col>
              </Row>
            </ListGroupItem>
          {/each}
        </ListGroup>
      </div>
    </CardBody>
  </Card>
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
