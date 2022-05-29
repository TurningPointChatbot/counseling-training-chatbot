<script>
  import RecentModules from '$lib/components/RecentModules.svelte';
  import supabase from '$lib/supabase';

  
  async function getModulesList() {
    let api_modules = [];
    try {
      let {data, error} = await supabase
        .from('admin_module')
        .select();
  
      if (data) {
        for (let i = 0; i < data.length; i++) {
          let module = {title: data[i].title, description: data[i].description, image: 'https://picsum.photos/id/426/400/600.jpg', dateAccessed: data[i].dateAccessed};
          api_modules.push(module);
        }
      }
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    }
    return api_modules;
  }
  let promise = getModulesList()

  let counsellorPreview = [
  {
    title: 'Davos Sand',
    description: 'Junior Counsellor',
    image: 'https://picsum.photos/id/426/400/600.jpg'
  },
  {
    title: 'Evelyn Chua',
    description: 'Senior Counsellor',
    image: 'https://picsum.photos/id/426/400/600.jpg'
  },
  {
    title: 'Isabella Howard',
    description: 'Junior Counsellor',
    image: 'https://picsum.photos/id/426/400/600.jpg'
  },{
    title: 'Jackson Tyler',
    description: 'Junior Counsellor',
    image: 'https://picsum.photos/id/426/400/600.jpg'
  }];
  /*
  let trainingModules = [
    {
      title: 'Lesson 101: Module Title',
      description:
        'Short summary lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate ipsum vel nisi aliquam euismod.',
      image: 'https://picsum.photos/id/426/400/600.jpg',
      dateAccessed: new Date('April 13, 2022 11:15:00')
    },
    {
      title: 'Tutorial 102: Module Title',
      description:
        'Short summary lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate ipsum vel nisi aliquam euismod.',
      image: 'https://picsum.photos/id/426/400/600.jpg',
      dateAccessed: new Date('April 3, 2022 11:13:00')
    },
    {
      title: 'Class 103: Module Title',
      description:
        'Short summary lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate ipsum vel nisi aliquam euismod.',
      image: 'https://picsum.photos/id/426/400/600.jpg',
      dateAccessed: new Date('April 13, 2022 11:13:00')
    },
    {
      title: 'Module 104: Module Title',
      description:
        'Short summary lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate ipsum vel nisi aliquam euismod.',
      image: 'https://picsum.photos/id/426/400/600.jpg',
      dateAccessed: new Date('April 23, 2022 11:13:00')
    }
  ];*/
</script>

{#await promise then modules}
      <RecentModules listData={modules}/>
{/await}

<body>
  
  <div class="font-bold text-xl mb-2 text-gray-700">Counsellors</div>
  <p class="text-gray-400 text-base">
    Recently viewed
</p>
  <div class="flex items-center rounded bg-white overflow-hidden h-90 w-90">
    {#each counsellorPreview as cardItem}
    <!--Card 1-->
    <div class="rounded">
      <img class="rounded-full h-32 w-32" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="Davos Sand">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">
          <button type="button" class="font-small text-gray-900 bg-white rounded-full focus:z-10 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-black center">{cardItem.title}</button>
        </div>
      </div>
    </div>
    {/each}
    <div class="flex-direction: row; rounded-full ">
        <button type="button" class="text-grey-700 border border-grey-700 hover:bg-grey-700 hover:text-black focus:ring-1 focus:outline- focus:ring-grey-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-grey-500 dark:text-grey-500 dark:hover:text-black dark:focus:ring-grey-800">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
      </div>
      <p class="text-gray-500 text-base">
        See all
    </p>
</div>
</body>

