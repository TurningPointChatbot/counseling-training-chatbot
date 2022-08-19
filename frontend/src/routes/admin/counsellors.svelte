<script lang="ts">
  import FilterableList from '$lib/components/FilterableList.svelte';
  import supabase from '$lib/supabase';

  // TODO: Retrieve counsellor details from database.
  async function getCounsellors() {
    let api_counsellors = []
    try {

      let {data, error} = await supabase.from('user').select();

      if (data) {

        for (let i = 0; i < data.length; i++) {
            api_counsellors.push({
              title: data[i].fname + ' ' + data[i].lname,
              description: await getCounsellorsType(data[i].type_id),
              image: data[i].avatar_url,
              href: '/admin/employee-details/' + data[i].id
            });
        }

      }
    } catch (error) {
      alert(error.message);
    }

    return api_counsellors;
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

  let promise = getCounsellors();
</script>

  <div class="m-3">
    <h1>Counsellors</h1>
  </div>
  <div class="m-3 h-3/4">
    {#await promise then counsellors}
    <FilterableList listData={counsellors}/>
    {/await}
  </div>
