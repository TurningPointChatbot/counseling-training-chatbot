<script>
    import RecentModules from '$lib/components/RecentModules.svelte';
  
    let training_modules = [
      {
        title: 'Lesson 101: Module Title',
        description:
          'Short summary lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate ipsum vel nisi aliquam euismod.',
        image: 'https://picsum.photos/id/426/400/600.jpg',
        dateAccessed: new Date("April 13, 2022 11:15:00")
      },
      {
        title: 'Tutorial 102: Module Title',
        description:
          'Short summary lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate ipsum vel nisi aliquam euismod.',
        image: 'https://picsum.photos/id/426/400/600.jpg',
        dateAccessed: new Date("April 3, 2022 11:13:00")
      },
      {
        title: 'Class 103: Module Title',
        description:
          'Short summary lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate ipsum vel nisi aliquam euismod.',
        image: 'https://picsum.photos/id/426/400/600.jpg',
        dateAccessed: new Date("April 13, 2022 11:13:00")
      },
      {
        title: 'Module 104: Module Title',
        description:
          'Short summary lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate ipsum vel nisi aliquam euismod.',
        image: 'https://picsum.photos/id/426/400/600.jpg',
        dateAccessed: new Date("April 23, 2022 11:13:00")
      }
    ];
  </script>

<RecentModules listData={training_modules} />