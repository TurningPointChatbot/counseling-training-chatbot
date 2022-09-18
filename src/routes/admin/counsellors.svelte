<script context="module" lang="ts">
  export async function load({ fetch }) {
    const url = '/api/users/counsellors';
    const response = await fetch(url);

    return {
      status: response.status,
      props: {
        users: response.ok && (await response.json())
      }
    };
  }
</script>

<script lang="ts">
  import FilterableList from '$lib/components/FilterableList.svelte';
  import type { user } from '@prisma/client';

  export let users: user[];

  let counsellors = []

  for (let i = 0; i < users.length; i++) {
      counsellors[counsellors.length] = {
        title: users[i].fname + ' ' + users[i].lname,
        description: 'Counsellor',
        image: users[i].avatar_url,
        href: '/admin/employee-details/' + users[i].id
      };
  }

</script>

  <div class="m-8">
    <h1>Counsellors</h1>
  </div>
  <div class="m-8 h-3/4">
    <FilterableList listData={counsellors}/>
  </div>
