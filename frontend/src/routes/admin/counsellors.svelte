<script>
import AdminBar from "$lib/components/AdminBar.svelte";
import FilterableList from '$lib/components/FilterableList.svelte';

// TODO: Retrieve counsellor details from database.
let counsellors = [{
    title: 'Davos Sand',
    description: 'Junior Counsellor',
    image: 'https://picsum.photos/id/426/400/600.jpg'
  },
  {
    title: 'Evelyn Chua',
    description: 'Junior Counsellor',
    image: 'https://picsum.photos/id/426/400/600.jpg'
  },
  {
    title: 'Isabella Howard',
    description: 'Junior Counsellor',
    image: 'https://picsum.photos/id/426/400/600.jpg'
  },
  {
    title: 'Jackson Tyler',
    description: 'Junior Counsellor',
    image: 'https://picsum.photos/id/426/400/600.jpg'
  },
  {
    title: 'Carey Smith',
    description: 'Junior Counsellor',
    image: 'https://picsum.photos/id/426/400/600.jpg'
  },
  {
    title: 'Joanna Tran',
    description: 'Junior Counsellor',
    image: 'https://picsum.photos/id/426/400/600.jpg'
  }
];
</script>

<AdminBar>
  <FilterableList listData={counsellors} />
</AdminBar>
