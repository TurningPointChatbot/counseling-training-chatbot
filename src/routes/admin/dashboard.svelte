<script>
  import ModuleBigCard from '$lib/components/dashboard/ModuleBigCard.svelte';
  import ModuleCard from '$lib/components/dashboard/ModuleCard.svelte';
  import BigCard from '$lib/components/dashboard/BigCard.svelte';
  import SmallCard from '$lib/components/dashboard/SmallCard.svelte';
  import ModuleCircleButton from '$lib/components/dashboard/ModuleCircleButton.svelte';
  import supabase from '$lib/supabase';

  export async function load({ fetch}) {
    const url = `/api/users/counsellors`;
    const response = await fetch(url);
    console.log("hi");
    return {
      status: response.status,
      props: {
        assignments: response.ok && (await response.json())
      }
    };
  }

  let counsellorData = [
    'Davos Sand',
    'Evelyn Chua',
    'Isabella Howard',
    'Jackson Tyler',
    'Katherine Moffat',
    'Anna Giang'
  ];

  let modulesData = [
    'Duty of care',
    'Crisis management',
    'Lesson 3'
  ];

  // !! list of modules needs to be sorted need to implement somehow sort function


</script>
<!-- put URL for each module that is gotten from db in the path -->
<div class="module-card">
  <BigCard title={'Counsellors'} subTitle={'Recently viewed'}>
    {#each counsellorData as counsellorName}
      <SmallCard titleButton={counsellorName} />
    {/each}
    <ModuleCircleButton path="/admin/counsellors" />
  </BigCard>


      <BigCard title={'Training Modules'} subTitle={'Recently Viewed'}>
        {#each modulesData as cardItem}
        <SmallCard
            cardClass = "col-span-2 text-center px-3 py-3"
            path="/admin/modules"
            alt={'Model of care'}
            imageClass=".object-cover h-48 w-96 rounded-3xl relative"
            titleButton={cardItem}
            image="https://images.unsplash.com/photo-1584515933487-779824d29309?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=225"
          />
        {/each}
        <ModuleCircleButton path="/admin/modules" />
      </BigCard>


    <!--<RecentModules listData={modules} /> -->

  </div>
