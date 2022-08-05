<script>
  import BigCard from '$lib/components/dashboard/BigCard.svelte';
  import SmallCard from '$lib/components/dashboard/smallCard.svelte';
  import ModuleCircleButton from '$lib/components/dashboard/ModuleCircleButton.svelte';
  import supabase from '$lib/supabase';

  // Dummy data to be changed when connected to DB to be deleted
  let counsellorData = [
    'Davos Sand',
    'Evelyn Chua',
    'Isabella Howard',
    'Jackson Tyler',
    'Katherine Moffat',
    'Anna Giang'
  ];

  // getting modules from db
  async function getModulesList() {
    let api_modules = [];
    try {
      let { data, error } = await supabase.from('admin_module').select();

      if (data) {
        for (let i = 0; i < data.length; i++) {
          let module = {
            title: data[i].title,
            description: data[i].description,
            image: 'https://picsum.photos/id/426/400/600.jpg',
            dateAccessed: data[i].dateAccessed
          };
          api_modules.push(module);
        }
      }
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    }
    return api_modules;
  }
  let promise = getModulesList(); // list of modules

  // !! list of modules needs to be sorted need to implement somehow sort function
</script>

<!-- add div for padding -->
<BigCard title={'Counsellors'} subTitle={'Recently viewed'}>
  {#each counsellorData as counsellorName}
    <SmallCard titleButton={counsellorName} />
  {/each}
  <ModuleCircleButton path="admin/counsellors" />
</BigCard>

{#await promise then modules}
  <BigCard title={'Training Modules'} subTitle={'Recently Viewed'}>
    {#each modules as cardItem}
      <SmallCard
        image={cardItem.image}
        alt={'Model of care'}
        imageClass="object-cover rounded-3xl h-40 w-60 relative"
        titleButton={cardItem.title}
      />
    {/each}
    <ModuleCircleButton path="admin/counsellors" />
  </BigCard>

  <!--<RecentModules listData={modules} /> -->
{/await}
