<script lang="ts">
  import FilterableList from '$lib/components/FilterableList.svelte';
  import supabase from '$lib/supabase';
  
  
  async function getModulesList() {
    let api_modules = [];
    try {
      let {data, error} = await supabase
        .from('admin_module')
        .select();
  
      if (data) {
        //console.log(data);
        for (let i = 0; i < data.length; i++) {
          let module = {title: data[i].title, description: data[i].description, image: 'https://picsum.photos/id/426/400/600.jpg', dateAccessed: data[i].dateAccessed};
          //console.log(module);
          api_modules.push(module);
          //console.log(api_modules);
        }
      }
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    }
    return api_modules;
  }
  let promise = getModulesList()



  

  // TODO: Retrieve module details from database.
  /*let modules = [
    {
      title: 'Lesson 101: Module Title',
      description:
        'Short summary lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate ipsum vel nisi aliquam euismod.',
      image: 'https://picsum.photos/id/426/400/600.jpg',
      href: '/admin/module-details/moduleId'
    },
    {
      title: 'Tutorial 102: Module Title',
      description:
        'Short summary lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate ipsum vel nisi aliquam euismod.',
      image: 'https://picsum.photos/id/426/400/600.jpg',
      href: '/admin/module-details/moduleId'
    },
    {
      title: 'Class 103: Module Title',
      description:
        'Short summary lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate ipsum vel nisi aliquam euismod.',
      image: 'https://picsum.photos/id/426/400/600.jpg',
      href: '/admin/module-details/moduleId'
    },
    {
      title: 'Module 104: Module Title',
      description:
        'Short summary lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate ipsum vel nisi aliquam euismod.',
      image: 'https://picsum.photos/id/426/400/600.jpg',
      href: '/admin/module-details/moduleId'
    }
  ];*/
</script>

  <div class="m-3">
    <h1>Modules</h1>
  </div>
  <div class="m-3 h-3/4">
    {#await promise then modules}
      <FilterableList listData={modules}/>
    {/await}
  </div>