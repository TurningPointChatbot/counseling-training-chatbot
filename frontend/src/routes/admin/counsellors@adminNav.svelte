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

    let {data, error} = await supabase.from('users').select();

    if (data) {
      counsellors = [];

      for (let i = 0; i < data.length; i++) {
          counsellors[counsellors.length] = {
            title: data[i].fname + ' ' + data[i].lname,
            description: await getCounsellorsType(data[i].type_id),
            image: data[i].avatar_url,
            href: '/admin/employee-details/' + data[i].id
          };
      }

    }
  } catch (error) {
    alert(error.message);
  }
}

async function getCounsellorsType(typeId) {
  try {

    let {data, error} = await supabase.from('user_type').select().eq('id', typeId);;

    if (data) {
      return data[0].name;
    } else {
      return '';
    }
  } catch (error) {
    return '';
  }
}
  let counsellors = [
    {
      title: 'Blake Sand',
      description: 'Junior Counsellor',
      image:
        'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160',
      href: '/admin/employee-details/id'
    },
    {
      title: 'Sam Chua',
      description: 'Senior Counsellor',
      image:
        'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160',
      href: '/admin/employee-details/id'
    },
    {
      title: 'Aiden Howard',
      description: 'Junior Counsellor',
      image:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160',
      href: '/admin/employee-details/id'
    },
    {
      title: 'Winter Tyler',
      description: 'Junior Counsellor',
      image:
        'https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160',
      href: '/admin/employee-details/id'
    },
    {
      title: 'Riley White',
      description: 'Junior Counsellor',
      image:
        'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160',
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
