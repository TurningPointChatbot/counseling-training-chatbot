<script>
  import FilterableList from '$lib/components/FilterableList.svelte';

  // TODO: Retrieve counsellor details from database.
  let counsellors = [
    {
      title: 'Davos Sand',
      description: 'Junior Counsellor',
      image: 'https://picsum.photos/id/426/400/600.jpg',
      href: '/admin/employee-details/id'
    },
    {
      title: 'Evelyn Chua',
      description: 'Junior Counsellor',
      image: 'https://picsum.photos/id/426/400/600.jpg',
      href: '/admin/employee-details/id'
    },
    {
      title: 'Isabella Howard',
      description: 'Junior Counsellor',
      image: 'https://picsum.photos/id/426/400/600.jpg',
      href: '/admin/employee-details/id'
    },
    {
      title: 'Jackson Tyler',
      description: 'Junior Counsellor',
      image: 'https://picsum.photos/id/426/400/600.jpg',
      href: '/admin/employee-details/id'
    },
    {
      title: 'Carey Smith',
      description: 'Junior Counsellor',
      image: 'https://picsum.photos/id/426/400/600.jpg',
      href: '/admin/employee-details/id'
    },
    {
      title: 'Joanna Tran',
      description: 'Junior Counsellor',
      image: 'https://picsum.photos/id/426/400/600.jpg',
      href: '/admin/employee-details/id'
    }
  ];
</script>

  <div class="m-3">
    <h1>Counsellors</h1>
  </div>
  <div class="m-3 h-3/4">
    <FilterableList listData={counsellors} />
  </div>
