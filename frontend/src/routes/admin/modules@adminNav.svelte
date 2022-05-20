<script>
  import AdminBar from '$lib/components/admin/AdminBar.svelte';
  import FilterableList from '$lib/components/FilterableList.svelte';

  // TODO: Retrieve module details from database.
  let modules = [
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
  ];
</script>

  <div class="m-3">
    <h1>Modules</h1>
  </div>
  <div class="m-3 h-3/4">
    <FilterableList listData={modules} />
  </div>