<script>
  import FilterableList from '$lib/components/FilterableList.svelte';

  // TODO: Retrieve module details from database.
  let modules = [
    {
      title: 'Lesson 101: Module Title',
      description:
        'Short summary lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate ipsum vel nisi aliquam euismod.',
      image: 'https://picsum.photos/id/426/400/600.jpg'
    },
    {
      title: 'Tutorial 102: Module Title',
      description:
        'Short summary lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate ipsum vel nisi aliquam euismod.',
      image: 'https://picsum.photos/id/426/400/600.jpg'
    },
    {
      title: 'Class 103: Module Title',
      description:
        'Short summary lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate ipsum vel nisi aliquam euismod.',
      image: 'https://picsum.photos/id/426/400/600.jpg'
    },
    {
      title: 'Module 104: Module Title',
      description:
        'Short summary lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate ipsum vel nisi aliquam euismod.',
      image: 'https://picsum.photos/id/426/400/600.jpg'
    }
  ];
</script>

<FilterableList listData={modules} />
