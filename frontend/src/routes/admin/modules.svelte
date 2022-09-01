<script>
  import FilterableList from '$lib/components/FilterableList.svelte';

  // TODO: Retrieve module details from database.
  let modules = [
    {
      title: 'Module 101: Empathy',
      description:
        'Empathy is the ability to emotionally understand what other people feel, see things from their point of view, and imagine yourself in their place. Essentially, it is putting yourself in someone else\'s position and feeling what they must be feeling.',
      image: 'https://images.unsplash.com/photo-1516967124798-10656f7dca28?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987',
      dateAccessed: new Date('April 13, 2022 11:15:00'),
      href: '/admin/module-details/moduleId'
    },
    {
      title: 'Module 102: Treatment Options',
      description:
        'There are a range of gambling treatment and support services available in Australia, many of which are free. If you or someone you know is affected by addiction, the first step to getting help is talking to someone.',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170',
      dateAccessed: new Date('April 3, 2022 11:13:00'),
      href: '/admin/module-details/moduleId'
    },
    {
      title: 'Module 103: Alcohol & drugs',
      description:
        'There are a range of alcohol and other drug related treatment and support services available in Australia, many of which are free. If you or someone you know is affected by addiction, the first step to getting help is talking to someone.',
      image: 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687',
      dateAccessed: new Date('April 13, 2022 11:13:00'),
      href: '/admin/module-details/moduleId'
    },
    {
      title: 'Module 104: Withdrawal',
      description:
        'There are a range of physical and psychological symptoms people can experience when reducing, or stopping, alcohol and other drugs. Here\'s how it works and how to manage it.',
      image: 'https://images.unsplash.com/photo-1516027828283-84217f09f3c4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728',
      dateAccessed: new Date('April 23, 2022 11:13:00'),
      href: '/admin/module-details/moduleId'
    }
  ];
</script>

  <div class="m-3">
    <h1>Training Modules</h1>
  </div>
  <div class="m-3 h-3/4">
   <!-- {#await promise then modules}
      <FilterableList listData={modules}/>
    {/await}-->

    <FilterableList listData={modules}/>
  </div>