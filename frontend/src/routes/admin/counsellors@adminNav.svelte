<script context="module">
  export async function load({ params }) {
    return { props: { employeeId: params.employeeId } };
  }
  </script>


<script lang="ts">
  import FilterableList from '$lib/components/FilterableList.svelte';
  import supabase from '$lib/supabase';

  export let employeeId: string;
  // TODO: Retrieve counsellor details from database.

  async function getCounsellors() {
  try {

    let {data, error} = await supabase.from('users').select().eq('user_id', employeeId);;

    if (data) {
      console.log(data)

    }
  } catch (error) {
    alert(error.message);
  }
}

async function getCounsellorsType() {
  try {

    let {data, error} = await supabase.from('users_type').select().eq('user_id', employeeId);;

    if (data) {
      console.log(data)
      
    }
  } catch (error) {
    alert(error.message);
  }
}
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
  getCounsellors();
</script>

  <div class="m-3">
    <h1>Counsellors</h1>
  </div>
  <div class="m-3 h-3/4">
    <FilterableList listData={counsellors} />
  </div>
